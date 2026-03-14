import { Handbag, Wallet } from "lucide-react";
import React from "react";

function ShopIcons() {
  return (
   
      <div className="flex gap-5">
        <div className="flex relative">
          <Handbag color="#FFD230" size={40} />
          <p className=" text-red-500 bg-white font-bold flex items-center justify-center w-5 h-5 rounded-lg absolute">
            0
          </p>
        </div>

        <div className="flex relative">
            <Wallet color="#FFD230" size={40} />
            <p className=" text-red-500 bg-white font-bold flex items-center justify-center w-5 h-5 rounded-lg absolute">
                0
             </p>
        </div>
        
      </div>
    
  );
}

export default ShopIcons;
