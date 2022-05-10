import { authenticator } from '~/utils/auth.server';

import { Button, Text } from '@chakra-ui/react';
import { LoaderFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    // TODO Add the redirect URL
    successRedirect: 'THE_REDIRECT_URL', // EEX: /app/dashboard
  });
};

export default function Login() {
  return (
    <>
      <Text as="h1" fontSize="4xl">
        Some kick ass login page
      </Text>
      <Form action="/auth/google" method="post">
        <Button type="submit">Login with Google</Button>
      </Form>
    </>
  );
}
