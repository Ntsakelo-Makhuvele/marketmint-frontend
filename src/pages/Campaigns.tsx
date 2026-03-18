import { Link } from "react-router-dom";
import DashboardHead from "../components/ui/DashboardHead";
import CampaignDialog from "../components/ui/CampaignDialog";




const Campaigns = () => {
  
    return (
        <div className="relative  min-h-[100vh] h-[100%]">
            <DashboardHead />
            <div className="absolute mt-20 w-full">
                <div className="inline-block mt-5">
                 <p className='pl-3 text-2xl'>Campaigns</p>
                </div>
                <CampaignDialog />
                  <div className="mt-5 overflow-x-auto">
                   <table className="w-full min-w-[700px] text-center ">
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
                   </table>
                </div>
            </div>
            
        </div>
    )
}

export default Campaigns;