import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes'
import './App.css';

function App() {
  return (
    <div className='px-36' data-theme="dracula">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
