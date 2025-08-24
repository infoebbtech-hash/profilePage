/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WP_BASE_URL: string;
  readonly VITE_PRIMARY_EMAIL: string;
  readonly VITE_CALENDLY_LINK: string;
  readonly DEV: boolean;
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
