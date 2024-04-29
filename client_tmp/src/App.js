import{
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './style.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write'

const Layout = () =>{
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element : 
              <Layout/>,
              children:[
                {
                  path : '/',
                  element : <Home/>
                },{
                  path : '/post/:id',
                  element : <Single/>
                },{
                  path : '/Write',
                  element : <Write/>
                }
              ]
  },{
    path : "/login",
    element : <Login/>,
  },
  {
    path : "/register",
    element: <Register/>,
  },
  {
    path : "/Write",
    element : <Write/> ,
  },{
    path : "/Single",
    element : <Single/>,
  },
]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
      
    </div>
  );
}

export default App;
