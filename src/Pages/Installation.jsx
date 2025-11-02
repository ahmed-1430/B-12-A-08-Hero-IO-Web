import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dawnload from "../assets/icon-downloads.png";
import ratinf from "../assets/icon-ratings.png";
import { CircleLoader } from "react-spinners";
import Loader from "../Components/Loader";
import AllApps from "../CustomHook/CustomHook";

const Installation = () => {
  const { apps } = AllApps();
  const [installedProducts, setInstalledProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (apps && apps.length > 0) {
      const installedAppIds = JSON.parse(localStorage.getItem("installedApps") || "[]");
      
      // Filter the full apps array to get only installed apps
      const installedApps = apps.filter(app => 
        installedAppIds.includes(app.id)
      );
      
      setInstalledProducts(installedApps);
    }
  }, [apps]); // This will re-run when apps data changes

  const handleUninstall = (appId) => {
    // Remove from localStorage
    const installedAppIds = JSON.parse(localStorage.getItem("installedApps") || "[]");
    const updatedAppIds = installedAppIds.filter(id => id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(updatedAppIds));
    
    // Remove from state
    const updatedProducts = installedProducts.filter(product => product.id !== appId);
    setInstalledProducts(updatedProducts);
    
    toast.success("App uninstalled successfully!");
  };

  const sortedProducts = [...installedProducts].sort((a, b) => {
    // Extract numeric value from size string (e.g., "25 MB" -> 25)
    const getSizeValue = (size) => {
      if (!size) return 0;
      const sizeNum = parseFloat(size);
      return isNaN(sizeNum) ? 0 : sizeNum;
    };

    const sizeA = getSizeValue(a.mb || a.size); // Use mb or size property
    const sizeB = getSizeValue(b.mb || b.size);

    if (sortOrder === "high-to-low") {
      return sizeB - sizeA; 
    } else if (sortOrder === "low-to-high") {
      return sizeA - sizeB;
    } else {
      return 0;
    }
  });

  if (load) {
    return <Loader></Loader>;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Your Installed Apps
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore All Trending Apps on the Market developed by us 
        </p>
      </div>

      <ToastContainer />
      <div className="max-w-11/12 mx-auto px-4">
        <div className="p-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 ">
              Your Apps ({installedProducts.length})
            </h2>
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="" disabled>Sort by size</option>
              <option value="high-to-low">Size: High to Low</option>
              <option value="low-to-high">Size: Low to High</option>
            </select>
          </div>

          {installedProducts.length > 0 ? (
            <div className="space-y-6">
              {sortedProducts.map((app) => (
                <div
                  key={app.id}
                  className="flex flex-col md:flex-row items-center gap-6 p-6 border bg-white border-gray-200 rounded-lg"
                >
                  <div>
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-center md:text-left ">
                      <h3 className="text-xl font-bold text-gray-800 ">
                        {app.title}
                      </h3>
                      <div className="flex flex-wrap mt-8">
                        <div className="flex">
                          <img className="w-5 h-5" src={dawnload} alt="" />
                          <span className="inline-block text-sm px-3 py-1">
                            {app.downloads}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <img className="w-5 h-5" src={ratinf} alt="" />
                          <span className="inline-block text-sm px-3">
                            {app.ratingAvg}
                          </span>
                        </div>
                        <span className="inline-block text-[#627382] text-sm py-1">
                          {app.mb || app.size} MB
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button
                      onClick={() => handleUninstall(app.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No apps installed yet.</p>
              <p className="text-gray-500">Install some apps from the home page to see them here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;