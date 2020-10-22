import React, { createContext, SetStateAction, useContext, useEffect, useState } from 'react';
import { socket, socketLog } from '../services/socket';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthContextData {
  logged: boolean;
  error: string | null;
  rememberMe: boolean;
  setRememberMe(value: SetStateAction<boolean>): void;
  setError(value: SetStateAction<string | null>): void;
  logIn(credentials: object): Promise<void>;
  logOut(): void;
}

interface UserData {
  name: string,
  surname: string,
  email: string,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@Lum-mobile:user');
      const storagedToken = await AsyncStorage.getItem('@Lum-mobile:token');

      if(storagedUser && storagedToken) {
        const log = socketLog(storagedToken);
        setUser(JSON.parse(storagedUser));
      }
    }
    loadStoragedData();
  }, [])

  async function userAuth(token: string) {
    const log = socketLog(token);

    log.emit("get profile", "");
    log.on('get profile', (data: UserData) => {
      if(rememberMe) {
        AsyncStorage.setItem('@Lum-mobile:user', JSON.stringify(data));
        AsyncStorage.setItem('@Lum-mobile:token', token);
      }
      setUser(data);
      setError(null);
    })
  }

  async function logIn(credentials: { "email": string, "password": string }) {
    socket.emit('post login', credentials);
    socket.on('get token', (data: { token: string, message: string, status: number }) => {
      if(data.token) {
        userAuth(data.token)
      } else {
        switch (data.status) {
          case 401:
            setError('O e-mail ou senha estão inválidos');
            break;
        }
      };
    });
  }

  async function logOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ logged: !!user, logIn, error, setError, logOut, rememberMe, setRememberMe }}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
} 