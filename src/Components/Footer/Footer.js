import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fab from '@mui/material/Fab';
import CopyrightIcon from '@mui/icons-material/Copyright';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div>
          <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "rgb(0, 132, 255)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop:"5rem",
        borderTop:"5px solid blue"
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              HS 7
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {` Men |  Women `}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
             Contact us
            </Typography>
          </Grid>
        
          <Grid item xs={12}>
            <Fab color="primary" style={{margin:"auto"}}>
            <FacebookIcon /></Fab>
            {/* <FacebookIcon/> */}
            <Fab  color="secondary" style={{margin:"auto"}}><InstagramIcon /></Fab>
            <Fab color="success" style={{margin:"auto"}}> <WhatsAppIcon /></Fab>

            

          </Grid>
          <Grid item xs={12}>
            <Typography color="black" variant="subtitle1">
              <div>

             All coprights <CopyrightIcon/> are reserved 2023
              </div>
            </Typography>
          </Grid>
        
        </Grid>
      </Container>
    </Box>
    </div>
  )
}

