
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers/router';

export default function App() {
 
  return (
    <div>
      <h1>REACT ROUTER DOM</h1>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
