import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import EnquiryCards from "../Components/EnquiryCards/EnquiryCards";
import axios from "axios";
import { ADMIN_API } from "../API";

const Enquiries = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`${ADMIN_API}/get-all-enquires`)
      .then((res) => {
        console.log(res.data);
        setData(res?.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <Grid container gap={2}>
    {data?.map((res)=><Grid item><EnquiryCards data={res}/></Grid>)}
    </Grid>
  );
};

export default Enquiries;
