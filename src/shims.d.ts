declare interface Window {
  // extend the window
}

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_CLOUDFLARE_BASE_URL: string
  readonly VITE_CLOUDFLARE_API_TOKEN: string
  readonly VITE_CLOUDFLARE_ACCOUNT_IDENTIFIER: string
  readonly VITE_CLOUDFLARE_BULK_LIST_ID: string
}
