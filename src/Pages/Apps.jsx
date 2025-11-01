import React, { useEffect, useState } from 'react';
import dawnload from "../assets/icon-downloads.png";
import ratinf from "../assets/icon-ratings.png";
import searchIcon from '../assets/Search_Icon.png'
import { CircleLoader } from 'react-spinners';
import { Link } from 'react-router';
import Loader from '../Components/Loader';
import AllApps from '../CustomHook/CustomHook';
import ErrorAp from '../Components/ErrorAp';

const Apps = () => {
    const { apps } = AllApps();
    const [load, setLoad] = useState(true);
    const [searchLoad, setSearchLoad] = useState(false);
    const [search, setSearch] = useState("");
    const term = search.trim().toLowerCase();

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

    const filteredProducts = term
        ? apps?.filter(product =>
            product.title.toLowerCase().includes(term) ||
            product.companyName.toLowerCase().includes(term)
        )
        : apps;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (term) {
            setSearchLoad(true);
            const timer = setTimeout(() => {
                setSearchLoad(false);
            }, 500);

            return () => clearTimeout(timer);
        } else {
            setSearchLoad(false);
        }
    }, [term]);

    if (load) {
        return <Loader></Loader>
    }

    return (
        <div className="min-h-screen bg-[#f5f5f5] py-8">
            <div className="max-w-11/12 mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our All Applications</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto"> Explore All Apps on the Market developed by us. We code for Millions </p>
                </div>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-8'>
                    <h1 className='text-xl font-semibold'> ({filteredProducts?.length || 0}) Apps Found</h1>
                    <label className="input flex items-center gap-2 w-full sm:w-80">
                        <img src={searchIcon} alt="search icon" className="w-4 h-4" />
                        <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search Apps" className="grow" />
                    </label>
                </div>
                {searchLoad ? (
                    <div className="min-h-[200px] flex justify-center items-center">
                        <CircleLoader color="#9560ee" size={50} loading={searchLoad} />
                    </div>
                ) : (
                    <div>
                        {filteredProducts?.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredProducts.map(product => (
                                    <Link key={product.id} to={`/app/${product.id}`} className="block">
                                        <div className="flex flex-col justify-start gap-4 w-full h-[350px] p-4 bg-white rounded-lg border border-gray-200 hover:scale-105 transform transition-all duration-300 hover:shadow-lg cursor-pointer">
                                            <div className="w-full h-[200px] bg-gray-100 rounded-sm overflow-hidden flex items-center justify-center">
                                                <img
                                                    className="w-full h-full object-fill"
                                                    src={product.image}
                                                    alt={product.title}
                                                />
                                            </div>
                                            <h1 className="text-xl font-bold text-gray-800 line-clamp-1">{product.title}</h1>
                                            <p className="text-sm text-gray-600 -mt-2">{product.companyName}</p>
                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex w-fit h-10 rounded-2xl bg-[#f1f5e8] justify-center items-center px-3">
                                                    <p className="text-[16px] font-bold flex items-center gap-2 text-[#1d7655]">
                                                        <img className="w-5 h-5" src={dawnload} alt="download icon" />
                                                        {formatDownloads(product.downloads)}
                                                    </p>
                                                </div>
                                                <div className="flex w-fit h-10 rounded-2xl bg-[#fff0e1] justify-center items-center px-3">
                                                    <p className="text-[16px] font-bold flex items-center gap-2 text-[#ff8c00]">
                                                        <img className="w-5 h-5" src={ratinf} alt="rating icon" />
                                                        {product.ratingAvg}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <ErrorAp></ErrorAp>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apps;