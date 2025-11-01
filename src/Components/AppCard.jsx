import React from 'react';
import { Link } from 'react-router';
import dawnload from "../assets/icon-downloads.png";
import ratinf from "../assets/icon-ratings.png";

const AppCard = ({ app }) => {
    // Download counts showed as a Million Billion format
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

    return (
        <Link to={`/app/${app.id}`} className="block">
            <div className="flex flex-col justify-start gap-4 w-full h-[350px] p-4 bg-white rounded-lg border border-gray-200 hover:scale-105 transform transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="w-full h-[200px] bg-gray-100 rounded-sm overflow-hidden flex items-center justify-center">
                    <img
                        className="w-full h-full object-fill"
                        src={app.image}
                        alt={app.title}
                    />
                </div>

                <h1 className="text-xl font-bold text-gray-800 line-clamp-1">{app.title}</h1>
                <p className="text-sm text-gray-600 -mt-2">{app.companyName}</p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex w-fit h-10 rounded-2xl bg-[#f1f5e8] justify-center items-center px-3">
                        <p className="text-[16px] font-bold flex items-center gap-2 text-[#1d7655]">
                            <img className="w-5 h-5" src={dawnload}  alt="download icon"/>
                            {formatDownloads(app.downloads)}
                        </p>
                    </div>
                    <div className="flex w-fit h-10 rounded-2xl bg-[#fff0e1] justify-center items-center px-3">
                        <p className="text-[16px] font-bold flex items-center gap-2 text-[#ff8c00]">
                            <img className="w-5 h-5" src={ratinf} alt="rating icon" />
                            {app.ratingAvg}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;