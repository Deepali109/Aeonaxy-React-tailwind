import React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import Upper from "./Upper";
import img1 from "../images/img.1.png";
import { PanoramaVerticalSelectSharp } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CardItem from "./Card";
import NewCard from "./NewCard";

function ProjectDashboard() {
  return (
    <div>
      <Upper />
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center ml-4 mt-4">
          <img
            src={img1}
            className="w-[29px] h-[29px] sm:w-[34px] sm:h-[34px]"
          ></img>
          <p className="ml-2 sm:ml-3 text-md sm:text-xl font-bold">
            Project Dashboard
          </p>
        </div>

        <div className="flex items-center">
          <div className="border w-[190px] sm:w-[250px] h-auto rounded-md flex items-center pl-1">
            <SearchIcon fontSize="25px" />
            <input
              type="text"
              className="outline-none p-1 sm:p-2 text-xs sm:text-sm font-semibold"
              placeholder="Search my storyboards"
            ></input>
          </div>
          <div className="flex items-center bg-blue-100 border-2 border-blue-200 rounded-md p-1 sm:p-2 ml-4 mr-5 h-10">
            <PlayCircleOutlineIcon />
            <p className="text-sm font-bold">Ouick Start</p>
          </div>
          <div className=" border-2 border-black rounded-full w-7 h-6 sm:w-8 sm:h-8 flex items-center justify-center pb-1 mr-4 bg-orange-200">
            <p className="text-lg sm:text-2xl font-extrabold">A</p>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-7 w-full flex flex-col items-center bg-slate-100 h-auto">
        <div className="flex justify-between relative w-full">
          <div className="flex ml-4">
            <div className=" border-2 border-black rounded-full w-8 h-8 flex items-center justify-center pb-1 mr-4 bg-orange-200">
              <p className="text-2xl font-extrabold">A</p>
            </div>
            <p className="text-lg font-bold">Adam Cooper Team</p>
          </div>
          <div className="bg-black w-[100px] h-8 flex items-center justify-center rounded-md mr-5">
            <p className="text-sm font-bold text-white">New Project</p>
          </div>
        </div>
        <div className="bg-white relative w-[90vw] h-auto mt-10 mb-10 flex flex-col rounded-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center ml-10">
              <FolderOpenIcon />
              <div className="p-3 ">
                <p className="text-md font-semibold">Default Project</p>
                <p className="text-sm font-semibold text-gray-400">
                  1 storyboard
                </p>
              </div>
            </div>
            <div className="mr-5 w-20 flex justify-between">
              <MoreVertIcon />
              <ArrowDropDownIcon />
            </div>
          </div>
          <div className="ml-10 mt-2 pb-5 flex flex-wrap gap-7 justify-center sm:justify-start">
            <CardItem />
            <NewCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDashboard;
