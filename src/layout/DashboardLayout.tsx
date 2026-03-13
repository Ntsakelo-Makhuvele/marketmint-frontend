import { Menu,LayoutDashboard, FingerprintPattern, Image, Settings, Megaphone } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


const MobileMenuDrawer = () => {
   const [open, setOpen] = useState(false);
   
   const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
   };
   
   
   const DrawerList = (
   <Box sx={{width: 250, padding:'5px', mt:'20px', height:'100%'}} role="presentation" onClick={toggleDrawer(false)}>
            <Link to="/" className='p-1 flex 
            items-center rounded-lg bg-cta-text gap-2 mb-5'>
              <LayoutDashboard className="inline w-5"/><span>Dashboard</span>
            </Link>
              <Link to="/" className='p-1 flex 
            items-center rounded-lg gap-2 mb-5'>
              <FingerprintPattern className="inline w-5"/><span>Brand DNA</span>
            </Link>
             <Link to="/" className='p-1 flex 
            items-center rounded-lg gap-2 mb-5'>
              <Image className="inline w-5"/><span>Brand Media</span>
            </Link>
             <Link to="/" className='p-1 flex 
            items-center rounded-lg gap-2 mb-5'>
              <Megaphone className="inline w-5"/><span>Campaigns</span>
            </Link>
             <Link to="/" className='p-1 flex 
            items-center rounded-lg gap-2 mb-5'>
              <Settings className="inline w-5"/><span>Settings</span>
            </Link>
         </Box>  
   )
   return (
      <div>
      <Menu onClick={toggleDrawer(true)} className='text-white'/>
      <Drawer open={open} onClose={toggleDrawer(false)}>
         {DrawerList}
      </Drawer>
    </div>
  );
}



const DashboardLayout = () => {

   return (
      <div className="">
         <div className="grid md:grid-cols-12 gap-6 grid-cols-1">
            <div className="2xl:col-span-2 md:col-span-3 h-[100vh] border bg-background p-5 hidden md:grid">
               <div>
               <div className='h-10 mb-10 '>

               </div>
               <div className=''>
                    <Link to="/" className='p-1 flex 
            items-center rounded-lg bg-cta-text gap-2 mb-5'>
              <LayoutDashboard className="inline w-5"/><span>Dashboard</span>
            </Link>
              <Link to="/" className='p-1 flex 
            items-center rounded-lg gap-2 mb-5 text-white'>
              <FingerprintPattern className="inline w-5"/><span>Brand DNA</span>
            </Link>
             <Link to="/" className='p-1 flex 
            items-center rounded-lg gap-2 mb-5 text-white'>
              <Image className="inline w-5"/><span>Brand Media</span>
            </Link>
             <Link to="/" className='p-1 flex 
            items-center rounded-lg gap-2 mb-5 text-white'>
              <Megaphone className="inline w-5"/><span>Campaigns</span>
            </Link>
             <Link to="/" className='p-1 flex 
            items-center rounded-lg gap-2 mb-5 text-white'>
              <Settings className="inline w-5"/><span>Settings</span>
            </Link>
               </div>

               </div>
            </div>
            <div className="p-2 block md:hidden bg-background">
               <MobileMenuDrawer />
            </div>
         </div>
         <div className='md:col-span-9 2xl:col-span-10'>
            <Outlet />
         </div>
      </div>

   )
}

export default DashboardLayout;