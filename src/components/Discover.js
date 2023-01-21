import React,{useEffect,useState} from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PlayPause from './PlayPause'
import {Card,CardContent,CardMedia,CardActionArea,Typography} from '@mui/material'
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { PlayArrow } from "@mui/icons-material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  
  let [songs,setsongs]=useState([]);
  
    useEffect(()=>{
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "28eb0e2f12mshc4cf2828411c787p1db064jsn5b2a21c91dbb",
    "X-RapidAPI-Host": "shazam-song-recognizer.p.rapidapi.com",
  },
};

fetch(
  "https://shazam-song-recognizer.p.rapidapi.com/top_country_tracks?country_code=US&limit=10&start_from=0",
  options
)
  .then((response) => response.json())
  .then((response) => setsongs(response.result.tracks))
  .catch((err) => console.error(err));
    },[])

let isplay=0,isactive=0,activesong={};

console.log(songs)

    return (
      <Box sx={{}}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {songs.length?songs.map((e, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 ,display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}  className='card'>
<div style={{display:`${activesong.title===e.title?'none':'block'}`}}>

          <PlayPause song={e}/>

</div>

                  <CardMedia
                    component="img"
                    height="140"
                    image={e.images?.coverart}
                    alt="green iguana"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="" component="div">
                   <Link to={`songs/${e.key}`}>

               {e.title.substring(0,6)}
                   </Link>
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{color:'black',textDecoration:'none',overflow:'hidden',textOverflow:'ellipsis'}}>
                   <Link to={e.artists?`/artists/${e.artists[0]?.adamid}`:'/topartists'}>
           
                      {e.subtitle.substring(0,7)}
                 
                        </Link>
                    </Typography>
                  </CardContent>

              </Card>
            </Grid>
          )):''}
        </Grid>
      </Box>
    );
}
