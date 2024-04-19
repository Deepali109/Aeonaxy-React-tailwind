import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function NewStoryboard({ open, onClose }) {
  // Accept open and onClose props
  return (
    <BootstrapDialog
      onClose={onClose} // Use the onClose prop to handle dialog close
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle
        sx={{ m: 0, p: 3, fontSize: "22px", fontWeight: "bold" }}
        id="customized-dialog-title"
      >
        New Storyboard
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose} // Use the onClose prop to handle dialog close
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography gutterBottom>
          <p className="text-sm font-semibold pl-3 pr-3 ">Storyboard Name</p>
        </Typography>
        <Typography gutterBottom>
          <input
            type="text"
            placeholder="e.g. Default Project Storyboard"
            className="text-sm border p-2 ml-3 mr-3 rounded-sm border-gray-300 w-[340px]"
          ></input>
        </Typography>
        <Typography gutterBottom>
          <p className="text-sm font-semibold mt-6 ml-3 mr-3 ">Frame Size</p>
        </Typography>
        <Typography>
          <select className="border p-2 ml-3 mr-3 text-sm rounded-sm border-gray-300 w-[340px] ">
            <option className="">Landscape (16:9)</option>
            <option className="">Portrait (9:16)</option>
          </select>
        </Typography>
      </DialogContent>
      <DialogActions>
        <div className="flex justify-between w-full p-3">
          <div className="flex">
            <ToggleOffOutlinedIcon />
            <p className="text-sm ml-1 font-semibold">AI Assistant</p>
          </div>
          <Button
            autoFocus
            onClick={onClose}
            sx={{
              backgroundColor: "#DDDDDD",
              color: "white",
              "&:hover": {
                backgroundColor: "#E7E7E7",
              },
            }}
          >
            Create Storyboard
          </Button>
        </div>
      </DialogActions>
    </BootstrapDialog>
  );
}
