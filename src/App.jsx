import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/about/About';
import Portofolio from './components/portofolio/Portofolio';
import Conatct from './components/contact/Contact';
import LayOut from './components/layout/LayOut';
import Home from "./components/home/Home";



function App() {
  let routes = createBrowserRouter([
    {
      path: '', element: <LayOut />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portofolio', element: <Portofolio /> },
        { path: 'contact', element: <Conatct /> },
        {path:'*',element:<Home />}
      ]
    }

  ]);
  return <RouterProvider router={routes}></RouterProvider>;

}

export default App;
