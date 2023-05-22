import React, { useEffect, useState } from 'react';
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
//import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import AppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SortIcon from '@mui/icons-material/Sort';
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Grid, Paper } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import PostCard from "./PostCard";
import CountCard from "./CountCard";


import AccountPopover from "./AccountPopover";


import { Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const StyledDiv = styled('div')({
  minHeight: '100vh',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.png'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
});
const StyledAppBar = styled(AppBar)({
  background: 'none',
  fontFamily: 'Nunito'
});
const StyledSortIcon = styled(SortIcon)({
  color: '#fff',
  fontSize: '2rem'
});
const StyledToolbar = styled(Toolbar)({
  width: '80%',
  margin: '0 auto'
});
const StyledTypography = styled(Typography)({
  color: '#fff',
  fontSize: '4.5rem',
  fontFamily: 'Nunito'
});

const drawerWidth = 240;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

const StyledUser = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: "#A9A9A9"
}));
const StyledExpandMoreIcon = styled(ExpandMoreIcon)({
  color: '#fff',
  fontSize: '4rem'
});
const StyledContainer = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export default function Dashboard(props) {

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <StyledDiv>
      <CssBaseline />
      {/* <Box sx={{ display: "flex" }}> */}
      <StyledAppBar elevation={0}>
        <StyledToolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <StyledSortIcon />
          </IconButton>
          <h1 style={{ flexGrow: '1' }}>Doubts<span style={{ color: '#FF5733' }}>Overflow</span></h1>
          <IconButton sx={{ p: 0 }}>
            <AccountPopover {...props} />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>
      <Drawer
        background='#5AFF3D'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Box sx={{ mb: 5, mx: 2.5 }}>
          <StyledUser>
            <Avatar src="https://propami.com/assets/corals/images/avatars/avatar_1.png" alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {props.fname}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {props.lname}
              </Typography>
            </Box>
          </StyledUser>
        </Box>
        <Divider />
        <List>
          {["Dashboard", "Explore", "Ask Question", "Your Profile", "Not Found"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Grid container justifyContent="center">
          <Grid item>
            {/* <Collapse
            in={checked}
            {...(checked ? { timeout: 1500 } : {})}
            collapsedheight={50}
          > */}
            <div style={{ textAlign: 'center' }}>
              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <Card
                  sx={{
                    p: 2,
                    display: "flex",
                    height: 240,
                    color: "green",
                    backgroundColor: "rgb(212 243 225);"
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography variant="h3">Welcome Back !</Typography>
                      <Typography variant="h4">{props.fname}</Typography>
                      <Typography variant="subtitle1">
                        Explore this amazing Website.
                      </Typography>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 350 }}
                    image={require('./db.png')}
                    alt="img"
                  />
                </Card>
              </Box>
            </div>
          </Grid>
          {/* </Collapse> */}
          <Grid item>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item>
                <CountCard label={"Total Questions"} count={180} />
              </Grid>
              <Grid item>
                <CountCard label={"Total Answered"} count={120} />
              </Grid>
              <Grid item>
                <CountCard label={"Your Answers"} count={50} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center' }} >
          <Scroll to="action" smooth={true}>
            <IconButton>
              <StyledExpandMoreIcon />
            </IconButton>
          </Scroll>
        </Box>


        <StyledContainer id='action'>
          <Grid container spacing={3} justifyContent="center">
            <PostCard
              text={"Explore Questions"}
              image={"https://source.unsplash.com/random"}
            />
            <PostCard
              text={"Ask Question"}
              image={"https://source.unsplash.com/random"}
            />
          </Grid>
        </StyledContainer>

      </Main>
      {/* </Box> */}
    </StyledDiv>
  );
}