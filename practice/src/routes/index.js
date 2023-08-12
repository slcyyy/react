import Home from 'pages/home';
import LazyLoad from 'pages/image/lazyLoad';

const routes = [
  {
    path: '/',
    element: <Home />,
    children:[
      {
        path:'/image/lazy-load',
        element:<LazyLoad/>
      }
    ]
  },
  
]

export default routes