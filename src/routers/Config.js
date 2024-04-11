import Home from '../views/Home'
import PageNotFound from '../components/common/PageNotFound ';
import { screens } from '../views';

const configRoute = [
    {
        path: '/',
        component: Home,
        layout: 'Home'
    },
    ...screens,
    {
        path: '*',
        component: PageNotFound,
        layout: 'pagenotfound'
    },
]

export default configRoute;