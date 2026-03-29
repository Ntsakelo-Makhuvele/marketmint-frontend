import Navbar from "../components/ui/Navbar";
import ReactPlayer from 'react-player';
import video from '../assets/Glow-Up & Community.mp4'
const Home = () => {
    

    return (
        <div className=''>
           <Navbar />
           <div className="h-[500px] bg-indigo-300 mt-20">
            <div className="">
              <h2 className="text-center text-4xl pt-30 font-roboto-italic text-mist-200">Your Social Media Campaign creative engine</h2>
              <p className="mt-2 text-center text-lg">Create quality reels for your next social media campaign with great storytelling and motion precision</p>
            </div>
            <div className="h-14 max-w-[800px] w-[90%] m-auto mt-3 rounded-full bg-mist-200 grid grid-cols-12 gap-7">
               <div className="col-span-9">
                      <input type="text" placeholder="Describe the campaign reel you want to create" className="h-full w-full ml-5 outline-none"/>
               </div>
               <div className="col-span-3">
                   <button type="button" className="w-[95%] mt-2 p-2 rounded-full bg-amber-300 text-zinc-900 cursor-pointer font-roboto-regular text-md">Generate</button>
               </div>
            </div>
           </div>
           <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-20 w-[95%] m-auto">
              <div className="h-40 bg-white drop-shadow-xl drop-shadow-indigo-300/40 rounded-md">

              </div>
              <div className="h-40 bg-white drop-shadow-xl drop-shadow-indigo-300/40 rounded-md">

              </div>
              <div className="h-40 bg-white drop-shadow-xl drop-shadow-indigo-300/40 rounded-md">

              </div>
           </div>
           <div className="mt-20">
               <h1 className="text-center text-3xl font-roboto-italic">Your AI Campaigns Companion</h1>
               <div className="border border-indigo-200 h-130 w-[350px] m-auto mt-5 mb-30 rounded-xl">
                   <div className="flex p-5 gap-2">
                    <div className="w-5 h-5 rounded-full bg-gray-200">

                    </div>
                        <div className="w-5 h-5 rounded-full bg-gray-200">

                    </div>
                   </div> 
                   <div className="border border-gray-200 border-l-0 border-r-0  h-100">
                      <div className="flex">
                      <div className="m-3 h-15 w-15 rounded-full bg-gray-200">

                      </div>
                      <div className="m-3 h-15 grid items-center w-[70%]">
                         <div className="h-2 rounded-full mb-1 bg-gray-200"></div>
                         <div className="h-2 rounded-full bg-gray-200"></div>
                      </div>
                      </div>
                      <div className="mt-3 m-3">
                          <p className="font-roboto-regular text-gray-700">We are excited to bring you the latest in ur beauty salon</p>
                      </div>
                          <div className="h-50 pt-0">
                                <ReactPlayer src={video} width={'100%'} height={'100%'} controls autoPlay />
                          </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Home;