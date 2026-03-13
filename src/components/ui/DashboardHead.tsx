import { Bell } from 'lucide-react'

const DashboardHead = () => {
    return (
          <div className="h-20 grid grid-cols-12  absolute w-[100%] fixed hidden md:grid bg-white z-1">
                <div className="2xl:col-span-5 md:col-span-5 flex items-center ">
                    <input type="text" name="" id="" placeholder="Search assets" className="h-10 w-[50%] pl-5 rounded-full bg-secondary-text" />
                </div>
                <div className='2xl:col-span-5 md:col-span-4 grid items-center mr-5'>
                    <div className=''>
                        <div className='inline-block h-12 w-12 rounded-full bg-cta-text grid items-center float-end'>
                            <p className='text-center text-xl font-semibold mt-2'>M</p>
                        </div>
                        <Bell className='mr-5 inline-block float-end mt-3' />
                    </div>
                </div>
            </div>
    )
}

export default DashboardHead;