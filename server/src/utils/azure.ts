import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

const client = jwksClient({
  jwksUri: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/discovery/v2.0/keys`
});

function getKey(header: jwt.JwtHeader, callback: jwt.SigningKeyCallback) {
  client.getSigningKey(header.kid!, function(err, key) {
    const signingKey = key?.getPublicKey();
    callback(err, signingKey);
  });
}

interface AzureUser {
  id: string;
  email: string;
}

export const verifyAzureToken = (token: string): Promise<AzureUser> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, getKey, {
      audience: process.env.AZURE_APP_ID,
      issuer: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/v2.0`,
      algorithms: ['RS256']
    }, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded as AzureUser);
      }
    });
  });
};