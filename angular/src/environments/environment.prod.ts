import { Environment } from '@abp/ng.core';

// Use your EC2 Public IP or domain
const baseUrl = 'http://34.222.138.189';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://34.222.138.189/', // Change this to your backend API URL
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false  // Set to `true` if you use HTTPS with a domain
  },
  apis: {
    default: {
      url: 'http://34.222.138.189', // Update this to match your API server
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
