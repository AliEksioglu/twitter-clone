import {createBrowserRouter} from 'react-router-dom';
import NotFound from '../pages/not-found';
import Explore from '../pages/explore';
import Notifications from '../pages/notifications';
import HomePage from '../pages/home';
import MainLayout from '../layouts/main';
import Messages from '../pages/messages';
import ListPage from '../pages/list';
import Landmarks from '../pages/landmarks';
import Profile from '../pages/profile';


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
                path: 'messages',
                element: <Messages/>
            },
            {
                path: 'list',
                element: <ListPage/>
            },
            {
                path: 'landmarks',
                element: <Landmarks/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    },
])

export default routes