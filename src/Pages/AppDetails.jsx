import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CircleLoader from 'react-spinners/CircleLoader';
import dawnload from '../assets/icon-downloads.png'
import reting from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Components/Loader';
import ErrorApp from '../Components/ErrorAp';
import AllApps from '../CustomHook/CustomHook';

const AppDetails = () => {
    const { id } = useParams();
    const { apps } = AllApps();
    const [load, setLoad] = useState(true);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1000);

        const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
        if (installedApps.includes(parseInt(id))) {
            setIsInstalled(true);
        }

        return () => clearTimeout(timer);
    }, [id]);

    const app = apps?.find(p => p.id === parseInt(id));

    // Format downloads function
    const formatDownloads = (count) => {
        if (!count && count !== 0) return '0';
        
        const countNum = Number(count);
        
        if (countNum >= 1000000000) {
            return (countNum / 1000000000).toFixed(1) + 'B';
        }
        
        if (countNum >= 1000000) {
            return (countNum / 1000000).toFixed(1) + 'M';
        }
        
        if (countNum >= 1000) {
            return (countNum / 1000).toFixed(1) + 'K';
        }
        
        return countNum.toString();
    };

    const handleInstall = () => {
        if (!app) return;
        
        const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
        if (!installedApps.includes(app.id)) {
            installedApps.push(app.id);
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
        }

        toast.success(`${app.title} installed successfully!`, {
            position: "top-right",
            autoClose: 3000,
        });
        
        setIsInstalled(true);
    };

    if (load) {
        return <Loader></Loader> 
    }

    if (!app) {
        return (
            <div className='min-h-screen bg-[#f5f5f5] flex items-center justify-center'>
                <ErrorApp>
                    message={`Application with ID ${id} not found.`}
                    onReset={() => window.history.back()}
                </ErrorApp> 
            </div>
        );
    }

    const { image, title, mb, companyName, description, ratingAvg, reviews, downloads, ratings } = app;

    const chartData = ratings?.slice().reverse().map((rating) => ({
        name: rating.name,
        count: rating.count
    })) || [];

    return (
        <div className='bg-[#f5f5f5]'>
            <ToastContainer />
            
            <div className='max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-15 min-h-screen'>
                <div className="rounded-lg overflow-hidden">
                    
                    <div className="flex flex-col md:flex-row gap-1 p-6 border-b border-gray-300">
                        <div className="md:w-1/5 flex justify-center md:justify-start mb-6 md:mb-0 pb-6 md:pb-0 md:pr-0 ">
                            <img 
                                src={image} 
                                alt={title}
                                className="w-64 h-64 object-cover rounded-lg"
                            />
                        </div>

                        <div className="md:w-4/5 md:pl-6">
                            <h1 className="text-3xl font-bold text-gray-800  pb-2">{title}</h1>
                           
                            <p className="text-lg text-[#6e38e6] mb-5 mt-1"><span className='text-[#696b6c]'>Developed by</span> {companyName}</p>
                            
                           <p className='border-b w-full text-[#d1d5dc] '></p>

                            <div className="flex items-center gap-15 mb-6 mt-5">
                                <div className="flex flex-col  gap-1">
                                    <img className='w-8' src={dawnload} alt="" />
                                    <span className="text-sm text-gray-600">Downloads</span>
                                    <span className="font-bold text-2xl">{formatDownloads(downloads)}</span>
                                </div>

                                <div className="flex flex-col  gap-1">
                                     <img className='w-8' src={reting} alt="" />
                                    <span className="text-sm text-gray-600">Average Ratings</span>
                                    <span className="font-bold text-2xl">{ratingAvg} </span>
                                </div>

                                <div className="flex flex-col  gap-1">
                                    <img className='w-8' src={review} alt="" />
                                    <span className="text-sm text-gray-600">Total Reviews:</span>
                                    <span className="font-bold">{reviews}</span>
                                </div>
                            </div>

                            <button 
                                onClick={handleInstall}
                                disabled={isInstalled}
                                className={`${
                                    isInstalled 
                                        ? 'bg-[#22a57c] cursor-not-allowed' 
                                        : 'bg-[#00d390] hover:bg-[#22a57c]'
                                } text-white py-3 px-6 rounded-lg mb-6 transition duration-300 flex items-center justify-center gap-2`}
                            >
                                {isInstalled ? (
                                    <>
                                        Installed
                                    </>
                                ) : (
                                    `Install Now (${mb})`
                                )}
                            </button>
                        </div>
                    </div>
                    
                    <div className="p-6 border-b border-gray-300">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Rating Distribution</h3>
                        
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                                layout="vertical"
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                            >
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis 
                                    type="number" 
                                    stroke="#666"
                                />
                                <YAxis 
                                    type="category" 
                                    dataKey="name" 
                                    stroke="#666"
                                    width={80}
                                />
                                <Tooltip 
                                    wrapperStyle={{ 
                                        backgroundColor: '#f5f5f5',
                                        border: '1px solid #d5d5d5',
                                        borderRadius: 3
                                    }} 
                                />
                                <Legend />
                                <Bar 
                                    dataKey="count" 
                                    fill="#ff8811" 
                                    barSize={30}
                                    name="Rating Count"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Description</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;