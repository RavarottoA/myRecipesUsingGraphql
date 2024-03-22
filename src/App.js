import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Authentication from './components/authentication';
import ErrorPage from './components/error';
import Home from './views/home';
import {action as authenticationAction} from './components/authentication/utils';
import MyRecipes from './components/myRecipes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/authentication',
        element: <Authentication />,
        action: authenticationAction
      },
      {
        path: '/myRecipes',
        element: <MyRecipes />,
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
