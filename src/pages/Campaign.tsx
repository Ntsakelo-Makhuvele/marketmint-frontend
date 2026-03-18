import DashboardHead from "../components/ui/DashboardHead"

const Campaign = () => {
    return (
        <div className="relative  min-h-[100vh] h-[100%]">
            <DashboardHead />
             <div className="absolute mt-20 w-full">
                <div className="inline-block mt-5">
                 <p className='pl-3 text-2xl'>Campaign Assets</p>
                </div>
                <div className="grid grid-cols-4 mt-5 p-5 gap-5">
                    <div className="border h-150"></div>
                    <div className="border h-150"></div>
                    <div className="border h-150"></div>
                </div>
             </div>   
        </div>
    )
}

export default Campaign