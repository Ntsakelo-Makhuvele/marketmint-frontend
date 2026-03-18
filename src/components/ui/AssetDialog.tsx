import { useState } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Trash2 } from 'lucide-react'
import { Button, DialogActions } from '@mui/material';

interface Asset {
    category_uuid: string,
    asset: File | null
}
const categories = [
    {
        name: 'Photos',
        uuid: ''
    },
    {
        name: 'Logos',
        uuid: ''
    },
    {
        name: 'Illustrations',
        uuid: ''
    },
    {
        name: 'Patterns',
        uuid: ''
    },

]
const AssetDialog = () => {
    const [open, setOpen] = useState(false);
    const [assets, setAssets] = useState<Asset[]>([{ category_uuid: categories[0].name, asset: null }]);
    // let assetList:Asset[]  = [{category_uuid:"",asset:null}];

    const handleAddRow = () => {
        setAssets((prevState) => [...prevState, { category_uuid: categories[0].name, asset: null }])
    }

    const handleRemoveRow = (index: number) => {
        setAssets((prevState) => {
            prevState.splice(index, 1)
            return [...prevState]
        })
    }

    const handleCategorySelect = (index:number,value:string) => {
              setAssets((prevState) => {
                  prevState[index].category_uuid = value
                  return [...prevState]
              })
              console.log(assets)
    }

    const handleSelectFile = (index:number,file:File) => {
           setAssets((prevState) => {
               prevState[index].asset = file;
               return [...prevState]
           })
          console.log(assets);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <button className="float-right mt-5 mr-5 p-1 px-2 rounded-lg bg-cta-text font-semibold cursor-pointer" onClick={handleClickOpen}>Upload Asset</button>
            <Dialog
                fullWidth={true}
                maxWidth={'lg'}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Upload Assets</DialogTitle>
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
                        <div className="overflow-x-auto">
                            <table className='w-full min-w-[700px] text-center'>
                                <thead className="bg-secondary-text">
                                    <tr>
                                        <td className='p-3'>Select Asset</td>
                                        <td>Select Category</td>
                                        <td>Actions</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assets && assets.map((asset, index) => (
                                        <tr className='mb-5 border-b border-b-gray-300' key={index}>
                                            <td className='w-[calc(100%/3)] pb-5'>
                                                <input className="cursor-pointer bg-neutral-secondary-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block  shadow-xs placeholder:text-body file:p-2 file:bg-cta-text mt-5 file:rounded-lg file:mr-2 file:cursor-pointer m-auto" id="file_inpu" type="file" onChange={(e) => handleSelectFile(index,e.target.files![0])}></input>
                                            </td>
                                            <td className='w-[calc(100%/3)]'>
                                            <select className='' value={asset.category_uuid} onChange={(e) => handleCategorySelect(index,e.target.value)}>
                                                {categories.map((category,index) => (
                                                    <option key={index} value={category.name} className="onfocus:bg-cta-text">{category.name}</option>
                                                ))}
                                            </select>
                                                {/* <Listbox value={asset.category_uuid}>

                                                    <div className="relative mt-5">
                                                        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 focus:outline-cta-text">
                                                            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                                                <span className="block truncate">{category}</span>
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
                                                            {categories.map((category, index) => (
                                                                <ListboxOption
                                                                    key={index}
                                                                    value={category.name}
                                                                    className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-cta-text data-focus:text-background data-focus:outline-hidden"
                                                                >
                                                                    <div className="flex items-center">
                                                                        <span className="ml-3 block truncate  font-normal group-data-selected:font-semibold">{category.name}</span>
                                                                    </div>
                                                                </ListboxOption>
                                                            ))}
                                                        </ListboxOptions>
                                                    </div>
                                                </Listbox> */}
                                            </td>
                                            <td>
                                                <Trash2 className='block m-auto mt-5 cursor-pointer' onClick={() => handleRemoveRow(index)} />
                                            </td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button type="button" className='border-1 border-dashed mt-5 block w-full p-2 cursor-pointer border-gray-400' onClick={handleAddRow}>+ Add Row</button>
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Upload
                    </Button>
                </DialogActions>

            </Dialog>
        </>
    );
}

export default AssetDialog;