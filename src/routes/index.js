import Home from "../pages/Home";
import Movies from "../pages/Movies";
import DetailMovie from "../pages/DetailMovie";
import DefaultLayout from "../layouts/DefaultLayout";


// privateRoutes
const privateRoutes = [];

// publicRoutes
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/movies', component: Movies, layout: DefaultLayout },
    { path: '/detailMovie', component: DetailMovie, layout: DefaultLayout },
]

export { privateRoutes, publicRoutes }