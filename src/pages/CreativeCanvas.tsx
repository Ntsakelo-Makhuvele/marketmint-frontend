import { Sparkles } from "lucide-react"


const CreateiveCanvas = () => {
    return (
        <div>
              <div className='border-r border-r-border border-t-0 h-[100vh] grid grid-cols-12'>
                   <div className="col-span-8 h-[100vh] border-r border-border p-5">
                        <h3 className='text-white text-2xl'>Creative Canvas</h3>
               <p className='text-description-text'>3 assets generated for your Spring campaign</p>
               <div className="grid grid-cols-3 gap-4 mt-5">
                  <div className='h-100 bg-card-fill rounded-md'>
                     <p className='mt-3 ml-2 p-1 px-2  bg-transparent-fill w-[fit-content] text-white rounded-md'>Email</p>
                  </div>
                  <div className='h-100 bg-card-fill rounded-md'>

                  </div>
                  <div className='h-100 bg-card-fill rounded-md'>

                  </div>
               </div>
                   </div> 
                   <div className='col-span-4'>
                         <div className='p-5 border-b border-b-border'>
                  <div className='flex items-center'>
                     <Sparkles className='inline w-5 text-cta-text mr-2' />
                     <h3 className='inline'> <span className='text-white text-xl'>Minty</span></h3>
                  </div>
                  <p className='text-description-text block'>Your AI creative assistant</p>
               </div>
               <div className='p-4'>
                  <div className='response-container mb-5'>
                     <div className='overflow-hidden'>
                     <p className='text-left p-2 bg-response-fill text-white max-w-[90%] rounded-lg float-left'>I've generated a few options for your
                        spring sale. How do they look? </p>
                     </div>
                        <p className='text-md text-description-text text-left block'>10:20 AM</p>
                  </div>
                  <div className='message-container mb-5'>
                     <div className='overflow-hidden'>
                     <p className='text-right p-2 bg-message-fill text-white max-w-[90%] rounded-lg float-right'>They're good, but maybe make the tone
                        a bit more energetic?</p>
                     </div>
                       <p className='text-md text-description-text text-right block'>10:20 AM</p>
                  </div>
                  <div className='response-container mb-5'>
                     <div className='overflow-hidden'>
                     <p className='text-left p-2 bg-response-fill text-white max-w-[90%] rounded-lg float-left'>I've generated a few options for your
                        spring sale. How do they look? </p>
                     </div>
                        <p className='text-md text-description-text text-left block'>10:20 AM</p>
                  </div>
               </div>
                   </div>
                </div>
        </div>
    )
}

export default CreateiveCanvas;