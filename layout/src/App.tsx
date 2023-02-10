import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './routes/routes';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
