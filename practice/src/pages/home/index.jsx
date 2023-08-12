import { NavLink, Outlet } from 'react-router-dom';
const Home = () => {
  return(
    <div className='flex w-full h-full'>
      <aside className='h-full border-red-300 border-r'>
        <NavLink to='/image/lazy-load'>图片懒加载</NavLink>
      </aside>
      <main className='flex-1'>
        <Outlet/>
      </main>
    </div>
  ) 
}

export default Home