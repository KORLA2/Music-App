import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import React from 'react'
import { PauseCircle } from '@mui/icons-material';

const PlayPause = ({song}) => {

  const theme = useTheme();
  let [play,setplay]=React.useState(0);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
      console.log('Iam Clcied')
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column',width:'100%',pl:2 }}>
        <CardContent >
          <Typography component="div" variant="h5">
{song.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
 {song.subtitle}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1,pr:1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">

          {  !play?<PlayArrowIcon sx={{ height: 38, width: 38 }} />:<PauseCircle  sx={{ height: 38, width: 38 }}  />}
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={song.images.background}
        alt="Live from space album cover"
      />
    </Card>
      </List>
  
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={(event)=>{toggleDrawer(anchor, true,event);setplay(!play);}}>

          { !play?<PlayArrowIcon/>:<PauseCircle/>}
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
    
}

export default PlayPause

