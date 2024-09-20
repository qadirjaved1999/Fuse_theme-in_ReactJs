import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import Error404Page from '../main/404/Error404Page';
import ExampleConfig from '../main/example/ExampleConfig';
import PotentialConfig from '../main/potentialProject/potentialConfig';
import WorkingProjectConfig from '../main/workingProject/WorkingProjectConfig';

const routeConfigs = [ExampleConfig, SignOutConfig, SignInConfig, SignUpConfig, PotentialConfig, WorkingProjectConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="/example" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: '/potential',
    element: <Navigate to="/potential" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: '/pql1',
    element: <Navigate to="/pql1" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: '/pql2',
    element: <Navigate to="/pql2" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: '/pql3',
    element: <Navigate to="/pql3" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
