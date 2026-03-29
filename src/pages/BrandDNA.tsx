import DashboardHead from "../components/ui/DashboardHead";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronsUpDown } from 'lucide-react'
import { useState } from "react";

const tones = ['Professional', 'Fun', 'Inspirational']

const BrandDNA = () => {
    const [selected, setSelected] = useState(tones[2]);
    return (
        <div className="relative  min-h-[100vh] h-[100%]">
            <DashboardHead />
            <div className="md:mt-20 absolute w-full">
                <div>
                    <div className="inline-block mt-5">
                        <p className='pl-3 text-2xl'>Define Your Brand Tone</p>
                        <p className="pl-3 mt-3">Configure the guidelines for all AI-generated campaign reels and copy.</p>
                    </div>
                    <button className="float-right mt-5 mr-5 p-1 px-2 rounded-lg bg-cta-text font-semibold cursor-pointer">Save Tone</button>
                </div>
                <form action="">
                    <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 p-3 mt-2">
                        <div className="h-full border border-gray-300 rounded-lg p-5">
                            <p className="text-2xl mb-5">Tone Identity</p>
                            <div className='mb-5'>
                                <label htmlFor="campaign_name" className="block text-sm/6 font-medium text-gray-900">
                                    Tone Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-cta-text">
                                        <input
                                            id="campaign_name"
                                            name="campaign_name"
                                            type="text"
                                            placeholder="e.g. Inspirational & High-Energy"
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="campaign_name" className="block text-sm/6 font-medium text-gray-900">
                                    Audience & Market
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-cta-text">
                                        <input
                                            id="campaign_name"
                                            name="campaign_name"
                                            type="text"
                                            placeholder="e.g. Inspirational & High-Energy"
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="campaign_name" className="block text-sm/6 font-medium text-gray-900">
                                    Brand Attributes
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-cta-text">
                                        <input
                                            id="campaign_name"
                                            name="campaign_name"
                                            type="text"
                                            placeholder="e.g. Inspirational & High-Energy"
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                              <div className='mb-5'>
                                <label htmlFor="campaign_name" className="block text-sm/6 font-medium text-gray-900">
                                    Forbidden Words
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-cta-text">
                                        <input
                                            id="campaign_name"
                                            name="campaign_name"
                                            type="text"
                                            placeholder="e.g. Inspirational & High-Energy"
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="border border-gray-300 rounded-lg mb-5 p-5">
                               <p className="text-2xl mb-5">AI Persona</p> 
                                 <div className="mb-5">
                                  <label className="block text-sm font-medium text-gray-700 mb-1">System Persona (System Instructions)</label>
                                  <textarea name="" id="" placeholder='Provide a high description of your campaign in detail...' rows={5} className="w-full mt-2 p-5 rounded-md outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-cta-text focus:outline-cta-text"></textarea>
                            </div>
                            </div>
                            <div className="h border border-gray-300 rounded-lg p-5">
                               <p className="text-2xl mb-5">Visual Tone (For reels)</p> 
                               <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                                  <div>
                                      <div className='mb-5'>
                                <Listbox value={selected} onChange={setSelected}>
                                    <Label className="block text-sm/6 font-medium text-gray-900">Tone</Label>
                                    <div className="relative mt-2">
                                        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 focus:outline-cta-text">
                                            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                                <span className="block truncate">{selected}</span>
                                            </span>
                                            <ChevronsUpDown
                                                aria-hidden="true"
                                                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                            />
                                        </ListboxButton>

                                        <ListboxOptions
                                            transition
                                            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                                        >
                                            {tones.map((tone, index) => (
                                                <ListboxOption
                                                    key={index}
                                                    value={tone}
                                                    className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-cta-text data-focus:text-background data-focus:outline-hidden"
                                                >
                                                    <div className="flex items-center">
                                                        <span className="ml-3 block truncate  font-normal group-data-selected:font-semibold">{tone}</span>
                                                    </div>
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                                </div>
                                  </div>
                                        <div>
                                      <div className='mb-5'>
                                <Listbox value={selected} onChange={setSelected}>
                                    <Label className="block text-sm/6 font-medium text-gray-900">   Aesthetic Vibe</Label>
                                    <div className="relative mt-2">
                                        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 focus:outline-cta-text">
                                            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                                <span className="block truncate">{selected}</span>
                                            </span>
                                            <ChevronsUpDown
                                                aria-hidden="true"
                                                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                            />
                                        </ListboxButton>

                                        <ListboxOptions
                                            transition
                                            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                                        >
                                            {tones.map((tone, index) => (
                                                <ListboxOption
                                                    key={index}
                                                    value={tone}
                                                    className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-cta-text data-focus:text-background data-focus:outline-hidden"
                                                >
                                                    <div className="flex items-center">
                                                        <span className="ml-3 block truncate  font-normal group-data-selected:font-semibold">{tone}</span>
                                                    </div>
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                                </div>
                                  </div>
                                        <div>
                                      <div className='mb-5'>
                                <Listbox value={selected} onChange={setSelected}>
                                    <Label className="block text-sm/6 font-medium text-gray-900">Music Pacing</Label>
                                    <div className="relative mt-2">
                                        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 focus:outline-cta-text">
                                            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                                <span className="block truncate">{selected}</span>
                                            </span>
                                            <ChevronsUpDown
                                                aria-hidden="true"
                                                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                            />
                                        </ListboxButton>

                                        <ListboxOptions
                                            transition
                                            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                                        >
                                            {tones.map((tone, index) => (
                                                <ListboxOption
                                                    key={index}
                                                    value={tone}
                                                    className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-cta-text data-focus:text-background data-focus:outline-hidden"
                                                >
                                                    <div className="flex items-center">
                                                        <span className="ml-3 block truncate  font-normal group-data-selected:font-semibold">{tone}</span>
                                                    </div>
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                                </div>
                                  </div>
                               </div>
                            </div>
                        </div>
                    </div>
                        <div className="border p-5 mr-3 ml-3 rounded-lg border-gray-300 mt-2 mb-5">
                            <p className="text-2xl mb-5">Tone Testing Lab</p>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                                        <div className='mb-5'>
                                <label htmlFor="campaign_name" className="block text-sm/6 font-medium text-gray-900">
                                    Quick Input (e.g Describe new cupcake)
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-cta-text">
                                        <input
                                            id="campaign_name"
                                            name="campaign_name"
                                            type="text"
                                            placeholder="e.g. Inspirational & High-Energy"
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <button className="mt-3 p-1 px-4 bg-cta-text rounded-lg cursor-pointer block">Test & Preview Caption</button>
                            </div>
                                  <div className="mb-5">
                                  <label className="block text-sm font-medium text-gray-700 mb-1">AI Output Preview</label>
                                  <textarea name="" id="" placeholder='Provide a high description of your campaign in detail...' rows={2} className="w-full mt-2 p-5 rounded-md outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-cta-text focus:outline-cta-text"></textarea>
                            </div>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default BrandDNA;