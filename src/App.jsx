import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Error from './pages/Error';
import LogIn from './pages/LogIn';
import Homepage from './pages/Homepage';

const router = createBrowserRouter([
  { 
    path: '/auth-login/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: '/auth-login/', element: <Homepage /> },
      { path: '/auth-login/login', element: <LogIn /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
