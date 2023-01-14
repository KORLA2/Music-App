import React from 'react'
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Discover  from './components/Discover'
import SideBar from './SideBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={1} sm={4} md={4}>
        <SideBar/>
          </Grid>
          <Grid item xs={2} sm={4} md={4} sx={{mt:10}}>
            Middle
            <Routes>
              <Route path="/" element={<Discover />} />


            </Routes>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            Last
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
}

export default App
