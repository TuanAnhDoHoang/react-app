import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from 'src/pages/Profile';
import Upload from 'src/pages/Upload';
import Search from 'src/pages/Search';
import Login from 'src/pages/Login';
import { HeaderOnly } from 'src/components/Layout';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
    {
        path: '/login',
        component: Login,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
