import Home from "pages/home";
import LazyLoad from "pages/image/lazyLoad";
import ChartDashboard from "pages/chartDashboard";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/image/lazy-load",
        element: <LazyLoad />,
      },
    ],
  },
  {
    path: "/chart_dashboard",
    element: <ChartDashboard />,
  },
];

export default routes;
