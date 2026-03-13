import { Menu } from 'lucide-react'
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {



   return (
      <div className="">
         <div className="grid md:grid-cols-12 gap-6 grid-cols-1">
            <div className="2xl:col-span-2 md:col-span-3 h-[100vh] border bg-background p-5 hidden md:grid">

            </div>
            <div className="border p-2 block md:hidden ">
               <Menu />
            </div>
            <div className='md:col-span-9 2xl:col-span-10'>
                <Outlet />
            </div>
         </div>
      </div>
   )
}

export default DashboardLayout;