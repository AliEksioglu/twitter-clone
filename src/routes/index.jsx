import {createBrowserRouter} from 'react-router-dom';
import NotFound from '../pages/not-found';
import Explore from '../pages/explore';
import Notifications from '../pages/notifications';
import HomePage from '../pages/home';
import MainLayout from '../layouts/main';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'notifications',
                element: <Notifications/>
            },
            {
                path: 'explore',
                element: <Explore/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    },
])

export default routes