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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1000);

        const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
        if (installedApps.includes(parseInt(id))) {
            setIsInstalled(true);
        }

        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkMobile);
        };
    }, [id]);

    const app = apps?.find(p => p.id === parseInt(id));

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

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                    <p className="font-semibold text-gray-800">{label}</p>
                    <p className="text-[#ff8811]">
                        Count: <span className="font-bold">{payload[0].value}</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='bg-[#f5f5f5]'>
            <ToastContainer />
            
            <div className='w-11/12 mx-auto px-4 py-8 min-h-screen'>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-6 p-6 border-b border-gray-200">
                        <div className="flex justify-center lg:justify-start">
                            <img 
                                src={image} 
                                alt={title}
                                className="w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-2xl shadow-md"
                            />
                        </div>

                        <div className="flex-1 lg:pl-8">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
                           
                            <p className="text-lg text-[#6e38e6] mb-6">
                                <span className='text-gray-600'>Developed by</span> {companyName}
                            </p>
                            
                            <div className="border-b border-gray-200 mb-6"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                                <div className="text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                                        <img className='w-8 h-8' src={dawnload} alt="Downloads" />
                                        <span className="text-sm font-medium text-gray-600">Downloads</span>
                                    </div>
                                    <span className="font-bold text-2xl text-gray-900 block">{formatDownloads(downloads)}</span>
                                </div>

                                <div className="text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                                        <img className='w-8 h-8' src={reting} alt="Ratings" />
                                        <span className="text-sm font-medium text-gray-600">Average Rating</span>
                                    </div>
                                    <span className="font-bold text-2xl text-gray-900 block">{ratingAvg}</span>
                                </div>

                                <div className="text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                                        <img className='w-8 h-8' src={review} alt="Reviews" />
                                        <span className="text-sm font-medium text-gray-600">Total Reviews</span>
                                    </div>
                                    <span className="font-bold text-xl text-gray-900 block">{reviews}</span>
                                </div>
                            </div>

                            <button 
                                onClick={handleInstall}
                                disabled={isInstalled}
                                className={`${
                                    isInstalled 
                                        ? 'bg-green-600 cursor-not-allowed' 
                                        : 'bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#5528c4] hover:to-[#8a52d9] cursor-pointer transform hover:scale-105'
                                } text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg`}
                            >
                                {isInstalled ? (
                                    <>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Installed
                                    </>
                                ) : (
                                    `Install Now (${mb} MB)`
                                )}
                            </button>
                        </div>
                    </div>
                    
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">Rating Distribution</h3>
                        
                        <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData}
                                    margin={{
                                        top: 20,
                                        right: isMobile ? 10 : 30,
                                        left: isMobile ? 10 : 20,
                                        bottom: isMobile ? 30 : 50,
                                    }}
                                    barSize={isMobile ? 35 : 45}
                                >
                                    <CartesianGrid 
                                        strokeDasharray="3 3" 
                                        stroke="#e5e7eb" 
                                        vertical={false}
                                    />
                                    <XAxis 
                                        dataKey="name" 
                                        stroke="#6b7280"
                                        tick={{
                                            fontSize: isMobile ? 11 : 14,
                                            fill: '#6b7280'
                                        }}
                                        axisLine={false}
                                        tickLine={false}
                                        angle={isMobile ? -45 : 0}
                                        textAnchor={isMobile ? "end" : "middle"}
                                        height={isMobile ? 80 : 60}
                                    />
                                    <YAxis 
                                        stroke="#6b7280"
                                        tick={{
                                            fontSize: isMobile ? 11 : 14,
                                            fill: '#6b7280'
                                        }}
                                        axisLine={false}
                                        tickLine={false}
                                        width={isMobile ? 40 : 60}
                                    />
                                    <Tooltip 
                                        content={<CustomTooltip />}
                                        cursor={{ fill: 'rgba(0, 211, 144, 0.1)' }}
                                    />
                                    <Legend 
                                        verticalAlign="top"
                                        height={36}
                                        iconType="circle"
                                        iconSize={10}
                                        wrapperStyle={{
                                            fontSize: isMobile ? '12px' : '14px',
                                            paddingBottom: '20px'
                                        }}
                                    />
                                    <Bar 
                                        dataKey="count" 
                                        name="Number of Ratings"
                                        fill="url(#colorCount)"
                                        radius={[4, 4, 0, 0]}
                                        className="hover:opacity-80 transition-opacity"
                                    />
                                    <defs>
                                        <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#ff8811" stopOpacity={0.8}/>
                                            <stop offset="100%" stopColor="#ff8811" stopOpacity={0.4}/>
                                        </linearGradient>
                                    </defs>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Description</h3>
                        <p className="text-gray-700 text-lg leading-relaxed bg-gray-50 p-6 rounded-lg border border-gray-200">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;