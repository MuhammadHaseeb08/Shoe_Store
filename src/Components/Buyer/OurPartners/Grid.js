import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export  function Gridi() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
        <Grid item xs={4}>
          <Item><div style={{boxShadow:"0 2px 4px rgb(0 0 0 / 20%), 0 10px 20px rgb(0 0 0 / 20%)"}}><img src='/images/nike.png' width="100%"></img></div></Item>
        </Grid>
        <Grid item xs={4}>
        <Item><div  style={{boxShadow:"0 2px 4px rgb(0 0 0 / 20%), 0 10px 20px rgb(0 0 0 / 20%)"}}><img src='/images/adidas.png' width="85%"></img></div></Item>
        </Grid>
        <Grid item xs={4}>
        <Item><div style={{boxShadow:"0 2px 4px rgb(0 0 0 / 20%), 0 10px 20px rgb(0 0 0 / 20%)"}}><img src='/images/pum.png' width="61%"></img></div></Item>

        </Grid>
      </Grid>
    </Box>
  );
}
