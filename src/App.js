import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Router';

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center"
        reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
