export const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID,
    authority: import.meta.env.VITE_AZURE_AUTHORITY,
    knownAuthorities: [import.meta.env.VITE_AZURE_AUTHORITY],
    redirectUri: import.meta.env.VITE_AZURE_REDIRECT_URI,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  }
};

// Default scopes if environment variable is not set
const defaultScopes = ['https://graph.microsoft.com/User.Read'];

// Safely parse scopes from environment variable or use defaults
const scopes = (() => {
  try {
    const envScopes = import.meta.env.VITE_AZURE_SCOPES;
    return envScopes ? JSON.parse(envScopes) : defaultScopes;
  } catch (error) {
    console.warn('Failed to parse VITE_AZURE_SCOPES, using default scopes:', error);
    return defaultScopes;
  }
})();

export const loginRequest = {
  scopes
};