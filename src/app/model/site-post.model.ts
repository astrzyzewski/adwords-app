export class SitePost {
  website: string;
  language_code: string;
  integrations: {
    type: string,
    url: string,
    key: string,
    identifier: string
  }[] = [];
  currency: string;
  name: string;
  platform: string;
  features: {
    name: string,
    active:  boolean
  }[] = [];
}
