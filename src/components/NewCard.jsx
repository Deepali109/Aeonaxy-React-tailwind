import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import NewStoryboard from "./NewStoryboard"; // Import the dialog component

function NewCard() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = () => {
    setOpenDialog(true);
  };

  return (
    <div>
      <div className="border bg-slate-100 shadow-sm rounded-md h-[300px] w-[300px] flex justify-center items-center">
        <Button onClick={handleClick}>
          <AddCircleOutlineOutlinedIcon
            style={{ fontSize: 40, color: "#DCDCDC" }}
          />
        </Button>
      </div>
      {openDialog && (
        <NewStoryboard open={openDialog} onClose={() => setOpenDialog(false)} />
      )}{" "}
      {/* Render the dialog component */}
    </div>
  );
}

export default NewCard;
