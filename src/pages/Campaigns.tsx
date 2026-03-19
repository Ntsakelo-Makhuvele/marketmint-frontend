
import DashboardHead from "../components/ui/DashboardHead";
import CampaignDialog from "../components/ui/CampaignDialog";
import {Play,X} from 'lucide-react';
import photo from '../assets/Container.png'
import ReactPlayer from 'react-player';
import video from '../assets/marketmint_promo.mp4'
import { useState } from "react";


const Campaigns = () => {
     const [preview,setPreview] = useState("/");

     const handleOpenPreview = () => {
         setPreview("/")
     }

     const handleClosePreview = () => {
        setPreview("")
     }

    return (
        <div className="relative  min-h-[100vh] h-[100%]">
            {preview && <div className="h-[100%] border fixed right-0 left-0 z-200 bg-transparent-fill-play">
                <div className="mt-5 text text-left h-10 mb-10">
                    <div className="border w-[fit-content] float-right h-10 grid items-center p-2 rounded-full bg-transparent-fill-play mr-10 cursor-pointer" onClick={handleClosePreview}>
               <X className="text-white"/> 
                    </div>
                </div>
               <div className="h-[fit-content]  max-w-[400px] w-[90%] m-auto bg-black">
                  <ReactPlayer src={video} width={'100%'} height={'fit-content'} controls autoPlay/>
               </div>
            </div>}
            <DashboardHead />
            <div className="absolute mt-20 w-full">
                <div className="inline-block mt-5">
                 <p className='pl-3 text-2xl'>Campaigns</p>
                </div>
                <CampaignDialog />
                  <div className="mt-5 overflow-x-auto">
                    <div className="grid lg:grid-cols-3 2xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 p-5">
                       <div className="h-100 relative rounded-lg">
                             <div className="relative">
                                <div className="absolute z-100 ml-[40%] mt-[50%] h-15 w-15 grid items-center rounded-full bg-transparent-fill-play backdrop-grayscale-0 cursor-pointer" onClick={handleOpenPreview}>
                             <Play className="text-white  block m-auto"/>

                                </div>
                                            <img src={photo} alt="" className='h-75 w-full object-cover absolute rounded-t-lg' />
                                        </div>
                           <div className='h-25 absolute bottom-0 left-0 right-0 bg-asset-description-fill rounded-b-lg grid items-center'>
                                            <div className='p-3'>
                                                <p className='text-white text-lg'>Primary logo - Mint</p>
                                                <p className='text-sm text-description-text'><span>JPG, 4.2MB</span><span className='float-right border px-2 rounded-full bg-cta-fill text-cta-text'>PHOTOS</span></p>
                                            </div>
                                        </div>
                       </div>
                    </div>
                   {/* <table className="w-full min-w-[700px] text-center ">
                        <thead>
                            <tr className="border-b border-b-table-border">
                            <td className="p-4">
                                <input type="checkbox"/>
                            </td>
                            <td>Name</td>
                            <td>Campaign Type</td>
                            <td>Date Created</td>
                            <td>Last Edited</td>
                            </tr>
                        </thead>
                        <tbody>
                                 <tr className="border-b border-b-table-border">
                                <td className="pt-5"><input type="checkbox"/></td>
                                <td className="pt-5 pb-4"><Link to="//campaign?campaign_name=my campaign" className="border-b border-b-border font-semibold">Retail Marketing 2026</Link></td>
                                <td><p className="mt-2"><span className="px-2 mr-3 rounded-full text-white bg-fill">Email</span><span className="px-2 mr-3 rounded-full text-white bg-fill">SMS</span></p></td>
                            </tr>
                        </tbody>
                   </table> */}
                </div>
            </div>
            
        </div>
    )
}

export default Campaigns;