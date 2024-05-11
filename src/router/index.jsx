import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/root';
import NotFound from '../pages/notfound/NotFound';
import Home from '../pages/home/Home';
import Survey from '../pages/survey/Survey';
import Homeregister from '../pages/homeregister/Homeregister';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,

      },
      {
      path: 'survey',
      element: <Survey/>,
      },
      {
        path: 'register',
        element: <Homeregister/>,
        },

    ],
  },
]);

export default router;
