
/**
 * appConfig.config.ts
 * Configurações globais de integração (API ou n8n).
 */
export const AppConfig = {
  integrationType: process.env.INTEGRATION_TYPE || 'mock', // 'api' | 'n8n' | 'mock'
  apiEndpoint: process.env.API_ENDPOINT || 'https://api.example.com',
  n8nWebhook: process.env.N8N_WEBHOOK || '',
  version: '1.0.0',
};
