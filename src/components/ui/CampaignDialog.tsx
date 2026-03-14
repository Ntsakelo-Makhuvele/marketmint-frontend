import { useState } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { ChevronsUpDown, Check, X } from 'lucide-react'
import DialogTitle from '@mui/material/DialogTitle';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'

const tones = ['Professional', 'Fun', 'Inspirational']

interface Asset {
    id: string,
    name: string,
    url: string,
    category: string
}

const assets: Asset[] = [
    {
        id: "uuid-001",
        name: "Classic Chocolate Cupcake",
        url: "https://storage.googleapis.com/marketmint-assets/chocolate_muffin.png",
        category: "Product Photography"
    },
    {
        id: "uuid-002",
        name: "Mint Frosting Swirl",
        url: "https://storage.googleapis.com/marketmint-assets/mint_detail.jpg",
        category: "Product Photography"
    },
    {
        id: "uuid-003",
        name: "The Cupcake Corner Logo",
        url: "https://storage.googleapis.com/marketmint-assets/logo_transparent.png",
        category: "Brand Identity"
    }
];

const CampaignDialog = () => {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    // const [fullWidth, setFullWidth] = useState(true);
    // const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('md');
    const [selected, setSelected] = useState(tones[2]);
    const [selectedAssets, setSelectedAssets] = useState<any[]>([]);

    const filteredAssets = query === ''
        ? assets
        : assets.filter((asset) => {
            return asset.name.toLowerCase().includes(query.toLowerCase())
        })

    const removeAsset = (assetToRemove: any) => {
        setSelectedAssets(selectedAssets.filter(a => a.id !== assetToRemove.id))
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <button className="float-right mt-5 mr-5 p-1 px-2 rounded-lg bg-cta-text font-semibold cursor-pointer" onClick={handleClickOpen}>Create Campaign</button>
            <Dialog
                fullWidth={true}
                maxWidth={'md'}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Create Campaign</DialogTitle>
                <DialogContent>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: '100%',
                        }}
                    >
                        <form action="">
                            <div className='mb-5'>
                                <label htmlFor="campaign_name" className="block text-sm/6 font-medium text-gray-900">
                                    Campaign Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-cta-text">
                                        <input
                                            id="campaign_name"
                                            name="campaign_name"
                                            type="text"
                                            placeholder="e.g. 20250212_re-engagement"
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
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
                                                        <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{tone}</span>
                                                    </div>

                                                    {/* <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span> */}
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                            </div>
                            <div className='mb-5'>
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Assets</label>

                                    {/* Selected Assets Chips */}
                              

                                    <Combobox value={selectedAssets} onChange={setSelectedAssets} multiple>
                                        <div className="relative">
                                            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border border-gray-300 focus-within:ring-0 focus-within:ring-none sm:text-sm focus-within:border-cta-text">
                                                <ComboboxInput
                                                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none"
                                                    placeholder="Search assets to add..."
                                                    onChange={(event) => setQuery(event.target.value)}
                                                    // For multiselect, we usually keep the input clear so they can search for the next one
                                                    displayValue={() => ''}
                                                />
                                                <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronsUpDown className="size-5 text-gray-400" />
                                                </ComboboxButton>
                                            </div>

                                            <ComboboxOptions transition className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                {filteredAssets.map((asset) => (
                                                    <ComboboxOption
                                                        key={asset.id}
                                                        value={asset}
                                                        className="group relative cursor-default py-2 pl-3 pr-9 text-gray-900 select-none data-focus:bg-cta-text data-focus:text-background"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <img src={asset.url} alt="" className="size-6 rounded object-cover" />
                                                            <span className="block truncate group-data-selected:font-semibold">{asset.name}</span>
                                                        </div>
                                                        {/* Visual indicator for items already in the selection */}
                                                        <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-background group-data-selected:flex group-data-focus:text-background">
                                                            <Check className="size-5" />
                                                        </span>
                                                    </ComboboxOption>
                                                ))}
                                            </ComboboxOptions>
                                        </div>
                                    </Combobox>
                                          <div className="flex flex-wrap gap-2 mb-2 mt-2">
                                        {selectedAssets.map((asset) => (
                                            <span key={asset.id} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-cta-fill text-background text-xs font-medium border border-indigo-100">
                                                {asset.name}
                                                <button onClick={() => removeAsset(asset)} className="hover:text-indigo-900">
                                                    <X className="size-3" />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Description</label>
                                  <textarea name="" id="" placeholder='Provide a high description of your campaign in detail...' rows={5} className="w-full mt-2 p-5 rounded-md outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-cta-text focus:outline-cta-text"></textarea>

                            </div>
                            <div className='mt-5'>
                                 <button className="px-2 p-1 rounded-lg bg-cta-text block m-auto font-semibold cursor-pointer">Generate Campaign</button>
                            </div>
                        </form>
                    </Box>
                </DialogContent>

            </Dialog>
        </>
    );
}

export default CampaignDialog;