/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SOCKET_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
