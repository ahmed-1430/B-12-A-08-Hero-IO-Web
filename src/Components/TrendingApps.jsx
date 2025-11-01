import React, { useEffect, useState } from 'react';
import AllApps from '../CustomHook/CustomHook';
import Loader from './Loader';
import AppCard from './AppCard';

const TrendingApps = () => {
    const { apps } = AllApps();
    console.log(apps)
    const [load, setLoad] = useState(true);
    const appsSlice = apps ? apps.slice(0, 8) : [];
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    if (load) {
        return <Loader></Loader>
    }
    return (
        <div>
            <div className="text-center py-8 sm:py-12 lg:py-16">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                    Trending Apps
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[#627382] max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className="max-w-11/12 mx-auto p-5">
                {appsSlice.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                        {appsSlice.map(app => (
                            <AppCard key={app.id} app={app}></AppCard>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No products found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrendingApps;