import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import ReplyDialog from './ReplyDialog';

const EnquiryCards = ({data}) => {
  const [open,setOpen] = useState()
  const [Selected,setSelected]=useState()
  const handleClickOpen = (_details) => {
    setOpen(true);
    setSelected(_details)

  };

  const handleClose = () => {
    setOpen(false);
    setSelected()
  };

  return (
   <Grid item>
     <Card elevation={2} sx={{ width: '100%',borderRadius:3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {moment(data?.createdAt).format('lll')}
        </Typography>
        <Typography variant="h5" component="div">
        {data?.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant='overline' color="text.secondary">
          {data?.phone}
        </Typography>
        <Typography variant="body2">
         {data?.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>handleClickOpen(data)} size="small">Reply Now</Button>
      </CardActions>
    </Card>

    <ReplyDialog handleClose={handleClose} open={open} info={Selected}/>

   </Grid>
  )
}

export default EnquiryCards