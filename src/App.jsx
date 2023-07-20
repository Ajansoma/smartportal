import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Footer from './Pages/Footer';
import Pricing from './Pages/Pricing';
import Navbar from './Components/Navbar';
import Help from './Pages/Help';
import AboutUs from './Pages/AboutUs';

const Layout = () => (
  <div className="flex justify-center items-start">
    <div className="2xl:max-w-[1280px] w-full ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <Layout />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/pricing', element: <Pricing /> },
      { path: '/contact', element: <Contact /> },
      { path: '/aboutus', element: <AboutUs /> },
      { path: '/help', element: <Help /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
