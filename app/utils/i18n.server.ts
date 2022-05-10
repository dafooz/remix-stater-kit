import { RemixI18Next } from 'remix-i18next';

import type { Backend } from 'remix-i18next';

class i18NexusBackend implements Backend {
  private url: URL;

  constructor() {
    this.url = new URL('https://api.i18nexus.com/project_resources/translations/');
  }

  async getTranslations(namespace: string, locale: string) {
    let url = new URL(
      `${locale}/${namespace}.json?api_key=${process.env.I18NEXUS_API_KEY}`,
      this.url,
    );
    let response = await fetch(url.toString(), {
      headers: { accept: 'application/json' },
    });
    return response.json();
  }
}

let backend = new i18NexusBackend();

export let i18n = new RemixI18Next(backend, {
  fallbackLng: 'en', // here configure your default (fallback) language
  supportedLanguages: ['en', 'fr'], // here configure your supported languages
});
