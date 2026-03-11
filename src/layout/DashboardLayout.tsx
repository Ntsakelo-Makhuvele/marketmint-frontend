import logo from '../assets/logo.svg'
import { LayoutDashboard, Image, ChartNoAxesCombined } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className="min-h-[100vh] h-full border bg-background">
         <div className='grid grid-cols-2 mt-1 p-5 border-b-1 border-border'>
            <div className='flex items-center'>
               <img src={logo} alt="logo" className='inline' />
               <input type="text" placeholder='Search assets...' className='inline ml-5 h-8 rounded-md text-secondary-text bg-fill p-2' />
            </div>
         </div>
         <div className='grid md:grid-cols-12 grid-cols-1 h-full'>
            <div className='col-span-3 p-5 border-r border-r-border'>
               <section>
                  <p className='text-description-text'>COLOR PALETTE</p>
                  <div className='flex gap-2  mt-2'>
                     <div className='h-10 w-10 rounded-full bg-description-text mt-2 mb-3'></div>
                     <div className='h-10 w-10 rounded-full bg-description-text mt-2'></div>
                     <div className='h-10 w-10 rounded-full bg-description-text mt-2'></div>
                  </div>
               </section>
               <section className='mt-5'>
                  <p className='text-description-text'>TONE OF VOICE</p>
                  <div className='mt-5'>
                     <div className='inline-block mr-2 text-secondary-text bg-fill px-2 rounded-full border border-cta-text'>Helpful</div>
                     <div className='inline-block mr-2 text-secondary-text bg-fill px-2 rounded-full border border-cta-text'>Local</div>
                     <div className='inline-block text-secondary-text bg-fill px-2 rounded-full border border-cta-text'>Expert</div>
                  </div>
               </section>
               <section className='mt-8'>
                  <p className='text-description-text'>CORE ASSETS</p>
                  <div className='mt-5'>
                     <Link to="/creative-canvas" className='mb-5 flex items-center p-1 px-3 rounded-md  text-description-text  focus:bg-cta-fill focus:text-cta-text'>
                        <LayoutDashboard className='inline w-5 mr-2' /><span className='text-lg'>Creative Canvas</span>
                     </Link>
                     <Link to="/" className='mb-5 flex items-center p-1 px-3 rounded-md text-description-text focus:bg-cta-fill focus:text-cta-text'>
                        <Image className='inline w-5 mr-2' /><span className='text-lg'>Brand Media</span>
                     </Link>
                     <Link to="/" className='flex items-center p-1 px-3 rounded-md text-description-text focus:bg-cta-fill focus:text-cta-text'>
                        <ChartNoAxesCombined className='inline w-5 mr-2' /><span className='text-lg'>Campaign Insights</span>
                     </Link>
                  </div>
               </section>
            </div>
            <div className='col-span-9'>
              <Outlet />
            </div>
            </div>
         </div>
    )
}

export default DashboardLayout;