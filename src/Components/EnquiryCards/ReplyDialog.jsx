import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ReplyDialog({ open, handleClose, info }) {
  const [reply, setReply] = React.useState();

  const handleReply = () => {
    handleClose();
    setReply()
  };

  return (
    <React.Fragment>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle sx={{textTransform:"capitalize"}}>Enquiry from {info?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>{info?.message}</DialogContentText>
          <textarea
            style={{
              width: "100%",
              fontFamily: "sans-serif",
              marginTop: 20,
              padding: 5,
              outline: "none",
              fontSize: 15,
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Write reply here ...."
            rows={6}
            type="text"
            fullWidth
            onChange={(e) => setReply(e.target.value)}
            value={reply}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleReply}>Send</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
