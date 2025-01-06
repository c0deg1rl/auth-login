import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Root'
import Error from './pages/Error'
import LogIn from './pages/LogIn'
import Homepage from './pages/Homepage'



const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: 'login', element: <LogIn />},
      // { path: 'sign-in', element: <SignIn />},
    ]
  },
])

const App = () => {

  return (

    <div className='container mx-auto'>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
