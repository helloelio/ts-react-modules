import { Authenticate } from '@/pages/Authenticate';

export type RoutesParams = {
  id: number;
  name: string;
  path: string;
  Element: React.FC;
};

enum RoutesList {
  LANDING = '/',
  MAIN = '/main',
  LOGIN = '/auth',
  PROFILE = '/profile',
}

export const privateRoutes: RoutesParams[] = [
  {
    id: 1,
    name: 'Landing',
    path: RoutesList.LANDING,
    Element: Authenticate,
  },
  {
    id: 2,
    name: 'profile',
    path: RoutesList.PROFILE,
    Element: Authenticate,
  },
];

export const publicRoutes: RoutesParams[] = [
  {
    id: 1,
    name: 'Landing',
    path: RoutesList.LANDING,
    Element: Authenticate,
  },
  {
    id: 2,
    name: 'login',
    path: RoutesList.LOGIN,
    Element: Authenticate,
  },
];
