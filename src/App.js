
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import Phone from './Components/Phone/Phone';


function App() {
  const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('http://localhost:5000/phone/'),
        element: <Home></Home>
      },
      {
        path: '/phones/:id',
        loader: ({params}) => fetch(`http://localhost:5000/phone/${params.id}`),
        element: <Phone></Phone>
      }
    ]
   }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
