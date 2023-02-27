import Home from "../pages/Home";
import Search from "../pages/Search";
import DetailMovie from "../pages/DetailMovie";
import Person from "../pages/Person";
import DefaultLayout from "../layouts/DefaultLayout";

// privateRoutes
const privateRoutes = [];

// publicRoutes
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/search/:searchValue", component: Search, layout: DefaultLayout },
  { path: "/detail-movie/:idMovie", component: DetailMovie, layout: DefaultLayout },
  { path: "/person/:idPerson", component: Person, layout: DefaultLayout },
];

export { privateRoutes, publicRoutes };
