import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
// app/services/auth.server.ts
import { Authenticator } from 'remix-auth';
import { GoogleStrategy } from 'remix-auth-google';
import { sessionStorage } from '~/utils/session.server';

import { Logtail } from '@logtail/node';
import { User } from '@prisma/client';

import { db } from './db.server';

type UserType = User & { isNew: boolean };

export let authenticator = new Authenticator<UserType | null>(sessionStorage);

const logtail = new Logtail(process.env.LOGTAIL_SOURCE_TOKEN || '');

let googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.AUTH_PROVIDER_GOOGLE_CLIENTID || '',
    clientSecret: process.env.AUTH_PROVIDER_GOOGLE_CLIENTSECRET || '',
    callbackURL: process.env.AUTH_PROVIDER_GOOGLE_CALLBACK || '',
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    const user = await db.user.upsert({
      where: { email: profile._json.email },
      update: {
        displayName: profile._json.name,
        givenName: profile._json.given_name,
        familyName: profile._json.family_name,
        email: profile.emails[0].value,
        emailVerified: `${profile._json.email_verified}`,
        image: profile._json.picture,
        locale: profile._json.locale,
      },
      create: {
        displayName: profile._json.name,
        givenName: profile._json.given_name,
        familyName: profile._json.family_name,
        email: profile.emails[0].value,
        userName: profile.emails[0].value,
        emailVerified: `${profile._json.email_verified}`,
        image: profile._json.picture,
        locale: profile._json.locale,
        accounts: {
          connectOrCreate: {
            where: {
              provider_providerAccountId: {
                provider: profile.provider,
                providerAccountId: profile.id,
              },
            },
            create: {
              type: profile.provider,
              provider: profile.provider,
              providerAccountId: profile.id,
              refresh_token: refreshToken,
              access_token: accessToken,
              expires_at: Date.now() + extraParams.expires_in,
              token_type: extraParams.token_type,
              scope: extraParams.scope,
              id_token: extraParams.id_token,
            },
          },
        },
        // TODO: ADD HERE ANYTHING THAT SHOULD HAPPEN UPON USER CREATION
      },
    });

    if (user) {
      const isNew = dayjs(user.updatedAt).diff(dayjs(user.createdAt), 'second') < 2;
      isNew
        ? logtail.info('New user registered', { user: { id: user.id, userName: user.userName } })
        : logtail.info('Registered user signin', {
            user: { id: user.id, userName: user.userName },
          });
      return { ...user, isNew };
    }
    return null;
  },
);

authenticator.use(googleStrategy);
