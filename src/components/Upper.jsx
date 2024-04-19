import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

function Upper() {
  return (
    <div className="flex items-center w-full h-[10vh] sm:h-[7vh] bg-orange-100">
      <div className="flex w-32 ml-5 p-1 justify-center items-center bg-orange-200 rounded-xl">
        <AccessTimeFilledIcon fontSize="10px" color="gray" />
        <p className="text-xs font-bold ml-1 text-gray-700">One-Time Offer</p>
      </div>
      <div className="ml-3">
        <p className="text-xs font-bold">
          Your AI Storyboarding Bundle Discount Expires in{" "}
          <span className="text-xs font-bold text-pink-500 bg-pink-100 rounded-xl p-1 pl-2 pr-2">
            5:01
          </span>
        </p>
      </div>
      <div className="bg-red-300 rounded-md ml-4">
        <p className="text-xs font-bold p-1 pl-2 pr-2">Claim Discount</p>
      </div>
    </div>
  );
}

export default Upper;
