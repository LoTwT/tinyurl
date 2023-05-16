import { ofetch } from 'ofetch'

// https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/create-api/

const env = import.meta.env

const apiFetch = ofetch.create({
  headers: {
    Authorization: `Bearer ${env.VITE_CLOUDFLARE_API_TOKEN}`,
  },
})

export const getLists = async () => await apiFetch(`/api/accounts/${env.VITE_CLOUDFLARE_ACCOUNT_IDENTIFIER}/rules/lists`)

interface RedirectItem {
  redirect: RedirectDetail
}

interface RedirectDetail {
  'source_url': string
  'target_url': string
  'status_code': 301 | 302 | 307 | 308
}

export const createItems = async (items: RedirectItem[]) => await apiFetch(`/api/accounts/${env.VITE_CLOUDFLARE_ACCOUNT_IDENTIFIER}/rules/lists/${env.VITE_CLOUDFLARE_BULK_LIST_ID}/items`, {
  method: 'POST',
  body: items,
})

export const getBulkOperationStatus = async (operationId: string) => await apiFetch(`/api/accounts/${env.VITE_CLOUDFLARE_ACCOUNT_IDENTIFIER}/rules/lists/bulk_operations/${operationId}`)
