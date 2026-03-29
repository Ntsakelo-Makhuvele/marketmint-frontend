import { Upload } from 'lucide-react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import photo from '../assets/Container.png'
import DashboardHead from '../components/ui/DashboardHead';
import AssetDialog from '../components/ui/AssetDialog';

const theme = createTheme({
    palette: {
        primary: {
            main: '#12201A'
        }
    }
})
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className='mt-5'
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Assets = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        event
    };

    return (
        <div className="relative  min-h-[100vh] h-[100%]">
           <DashboardHead />
            <div className='absolute md:mt-20 w-full'>
                <div className="inline-block mt-5">
                 <p className='pl-3 text-2xl'>Brand Media</p>
                </div>
                <AssetDialog />
                <div className='w-[100%] mt-5'>
                    <ThemeProvider theme={theme}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='primary'>
                                    <Tab label="All Assets" {...a11yProps(0)} sx={{ textTransform: 'capitalize' }} />
                                    <Tab label="Logos" {...a11yProps(1)} sx={{ textTransform: 'capitalize' }} />
                                    <Tab label="Photography" {...a11yProps(2)} sx={{ textTransform: 'capitalize' }} />
                                    <Tab label="Illustrations" {...a11yProps(3)} sx={{ textTransform: 'capitalize' }} />
                                    <Tab label="Brand Patterns" {...a11yProps(4)} sx={{ textTransform: 'capitalize' }} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <div className='grid lg:grid-cols-3 2xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4'>
                                    <div className='h-80 relative rounded-lg mb-5'>
                                        <div>
                                            <img src={photo} alt="" className='h-55 w-full object-cover absolute rounded-t-lg' />
                                        </div>
                                        <div className='h-25 absolute bottom-0 left-0 right-0 bg-asset-description-fill rounded-b-lg grid items-center'>
                                            <div className='p-3'>
                                                <p className='text-white text-lg'>Primary logo - Mint</p>
                                                <p className='text-sm text-description-text'><span>JPG, 4.2MB</span><span className='float-right border px-2 rounded-full bg-cta-fill text-cta-text'>PHOTOS</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-80 relative rounded-lg mb-5'>
                                        <div>
                                            <img src={photo} alt="" className='h-55 w-full object-cover absolute rounded-t-lg' />
                                        </div>
                                        <div className='h-25 absolute bottom-0 left-0 right-0 bg-asset-description-fill rounded-b-lg grid items-center'>
                                            <div className='p-3'>
                                                <p className='text-white text-lg'>Primary logo - Mint</p>
                                                <p className='text-sm text-description-text'><span>JPG, 4.2MB</span><span className='float-right border px-2 rounded-full bg-cta-fill text-cta-text'>PHOTOS</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-80 relative rounded-lg mb-5'>
                                        <div>
                                            <img src={photo} alt="" className='h-55 w-full object-cover absolute rounded-t-lg' />
                                        </div>
                                        <div className='h-25 absolute bottom-0 left-0 right-0 bg-asset-description-fill rounded-b-lg grid items-center'>
                                            <div className='p-3'>
                                                <p className='text-white text-lg'>Primary logo - Mint</p>
                                                <p className='text-sm text-description-text'><span>JPG, 4.2MB</span><span className='float-right border px-2 rounded-full bg-cta-fill text-cta-text'>PHOTOS</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-80 relative rounded-lg mb-5'>
                                        <div>
                                            <img src={photo} alt="" className='h-55 w-full object-cover absolute rounded-t-lg' />
                                        </div>
                                        <div className='h-25 absolute bottom-0 left-0 right-0 bg-asset-description-fill rounded-b-lg grid items-center'>
                                            <div className='p-3'>
                                                <p className='text-white text-lg'>Primary logo - Mint</p>
                                                <p className='text-sm text-description-text'><span>JPG, 4.2MB</span><span className='float-right border px-2 rounded-full bg-cta-fill text-cta-text'>PHOTOS</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-80 relative rounded-lg mb-5'>
                                        <div>
                                            <img src={photo} alt="" className='h-55 w-full object-cover absolute rounded-t-lg' />
                                        </div>
                                        <div className='h-25 absolute bottom-0 left-0 right-0 bg-asset-description-fill rounded-b-lg grid items-center'>
                                            <div className='p-3'>
                                                <p className='text-white text-lg'>Primary logo - Mint</p>
                                                <p className='text-sm text-description-text'><span>JPG, 4.2MB</span><span className='float-right border px-2 rounded-full bg-cta-fill text-cta-text'>PHOTOS</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-80 relative rounded-lg mb-5'>
                                        <div>
                                            <img src={photo} alt="" className='h-55 w-full object-cover absolute rounded-t-lg' />
                                        </div>
                                        <div className='h-25 absolute bottom-0 left-0 right-0 bg-asset-description-fill rounded-b-lg grid items-center'>
                                            <div className='p-3'>
                                                <p className='text-white text-lg'>Primary logo - Mint</p>
                                                <p className='text-sm text-description-text'><span>JPG, 4.2MB</span><span className='float-right border px-2 rounded-full bg-cta-fill text-cta-text'>PHOTOS</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-80 relative rounded-lg mb-5'>
                                        <div>
                                            <img src={photo} alt="" className='h-55 w-full object-cover absolute rounded-t-lg' />
                                        </div>
                                        <div className='h-25 absolute bottom-0 left-0 right-0 bg-asset-description-fill rounded-b-lg grid items-center'>
                                            <div className='p-3'>
                                                <p className='text-white text-lg'>Primary logo - Mint</p>
                                                <p className='text-sm text-description-text'><span>JPG, 4.2MB</span><span className='float-right border px-2 rounded-full bg-cta-fill text-cta-text'>PHOTOS</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-80'>
                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-80  border-2 border-dashed border-default-strong rounded-lg cursor-pointer hover:bg-neutral-tertiary-medium">
                                                <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                                                    <Upload />
                                                    <p className="mb-2 text-md"><span className="font-semibold">Add New Asset</span></p>
                                                    <p className="text-sm">Max size 20MB per file</p>
                                                </div>
                                                <input id="dropzone-file" type="file" className="hidden" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                Item Two
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                Item Three
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={3}>
                                Item Four
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={4}>
                                Item Five
                            </CustomTabPanel>
                        </Box>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}

export default Assets;