import { createContext, useContext, useEffect, useState } from 'react';
import { useMsal, MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { loginRequest } from '../config/azure';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  getToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { instance, accounts } = useMsal();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    if (accounts.length > 0) {
      setUser(accounts[0]);
    } else {
      setUser(null);
    }
  }, [accounts]);

  const login = async () => {
    try {
      const result = await instance.loginPopup(loginRequest);
      if (result) {
        setUser(result.account);
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Optionally show a user-friendly error message
    }
  };

  const logout = async () => {
    try {
      await instance.logoutPopup();
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const getToken = async () => {
    try {
      if (!user) {
        return null;
      }
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: user
      });
      return response.accessToken;
    } catch (error) {
      console.error('Failed to get token:', error);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      user,
      login,
      logout,
      getToken
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const MSALWrapper = ({ instance, children }: { instance: IPublicClientApplication, children: React.ReactNode }) => {
  return (
    <MsalProvider instance={instance}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </MsalProvider>
  );
};