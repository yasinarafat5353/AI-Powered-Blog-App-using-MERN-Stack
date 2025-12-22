
import {assets} from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
const Layout = () => {

    const navigaten = useNavigate()

    const logout = ()=> {
      navigaten('/')
    }


  return (
    <>
      <div className='flex items-center justify-between py-2 h-17.5 px-4 sm:px-12 borde-b border-gray-200'>
        <img src={assets.logo} alt="" className='w-32 sm:w-40 cursor-pointer' onClick={()=>navigaten('/')}/>
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer '>Logout</button>

      </div>
      <div className='flex h-[calc(100vh-70px)] '>
        <Sidebar/>
        <Outlet/>
      </div>
    </>
  )
}

export default Layout
