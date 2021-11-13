import React from 'react';
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'
import { blueGrey } from '@mui/material/colors';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
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
    })
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Navigation = () => {

    const { user, admin, logOut } = useAuth();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {
                user?.email ?
                    <Box>
                        <MenuItem onClick={logOut}>Logout</MenuItem>
                    </Box>
                    :
                    <Box>
                        <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
                        </Link>
                        <Link to='/register' style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem onClick={handleMenuClose}>Registration</MenuItem>
                        </Link>
                    </Box>
            }
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                {
                    user?.photoURL
                        ?
                        <div style={{display: 'flex'}}>
                            <div>
                                <img onClick={handleProfileMenuOpen} src={user.photoURL} style={{ height: '40px', width: '40px', marginLeft: '10px', borderRadius: '50%' }} alt="" />
                            </div>
                            <div style={{ marginTop: '12px', marginLeft: '3px' }}>
                                <p>{user.displayName}</p>
                            </div>
                        </div>
                        :
                        <div style={{display: 'flex'}}>
                            <div>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>
                            <div style={{ marginTop: '12px', marginLeft: '3px' }}>
                                <p>Profile</p>
                            </div>
                        </div>
                }
            </MenuItem>
        </Menu>
    );

    const navBg = blueGrey[800]
    const drawerBg = blueGrey[500]

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ background: navBg }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <NavLink to='/'><img src="./logo.jpg" alt="" style={{ width: '50px' }} /></NavLink>
                    <Typography variant="h6" noWrap component="div">
                        <Link style={{ textDecoration: 'none', color: 'white', marginLeft: '8px' }} to='/'>Car Warrior</Link>
                    </Typography>
                    <NavLink to='/allcar' style={{ textDecoration: 'none', color: 'white', fontFamily: "Dongle" }}>
                        <Button variant='h5'>All CAR</Button>
                    </NavLink>

                    <NavLink to='/about' style={{ textDecoration: 'none', color: 'white', fontFamily: "Dongle" }}>
                        <Button variant='h5'>ABOUT</Button>
                    </NavLink>

                    <NavLink to='/contact' style={{ textDecoration: 'none', color: 'white', fontFamily: "Dongle" }}>
                        <Button variant='h5'>CONTACT US</Button>
                    </NavLink>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase style={{ marginTop: '3px' }}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        {
                            user?.photoURL
                                ?
                                <img onClick={handleProfileMenuOpen} src={user.photoURL} style={{ height: '40px', width: '40px', marginLeft: '10px', borderRadius: '50%' }} alt="" />
                                :
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                        }

                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box"
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ p: 0, ml: 0, background: drawerBg }}>
                    {
                        user?.photoURL && <img src={user.photoURL} alt="" style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
                    }

                    <Typography variant='h6' sx={{ ml: 1 }}>
                        {user.displayName}
                    </Typography>

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <Typography variant='h6' color='success.main' sx={{ ml: 1, fontWeight: '600' }}>
                    DASHBOARD
                </Typography>
                <Divider />

                <List sx={{background: drawerBg}}>
                    <ListItem button key='Home' onClick={handleDrawerClose}>
                        <Link to='/home' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                            <ListItemIcon><HomeIcon /> </ListItemIcon>
                            <ListItemText style={{ marginTop: 0 }} primary='HOME'></ListItemText>
                        </Link>
                    </ListItem>

                    <ListItem button key='AllCar' onClick={handleDrawerClose}>
                        <Link to='/allcar' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                            <ListItemIcon><DirectionsCarFilledIcon /> </ListItemIcon>
                            <ListItemText style={{ marginTop: 0 }} primary='ALL CAR'></ListItemText>
                        </Link>
                    </ListItem>
                </List>
                
                {
                    user.email && admin ?
                        <List sx={{ background: drawerBg }}>
                            <ListItem button key='MyOrder' onClick={handleDrawerClose}>
                                <Link to='/myOrders' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                                    <ListItemIcon><ShoppingCartIcon /> </ListItemIcon>
                                    <ListItemText style={{ marginTop: 0 }} primary='MY ORDER'></ListItemText>
                                </Link>
                            </ListItem>
                            
                            <ListItem button key='ManageOrder' onClick={handleDrawerClose}>
                                <Link to='/manageOrders' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                                    <ListItemIcon><ManageAccountsIcon /> </ListItemIcon>
                                    <ListItemText style={{ marginTop: 0 }} primary='MANAGE ORDER'></ListItemText>
                                </Link>
                            </ListItem>

                            <ListItem button key='AddProduct' onClick={handleDrawerClose}>
                                <Link to='/addProduct' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                                    <ListItemIcon><AddCircleIcon /> </ListItemIcon>
                                    <ListItemText style={{ marginTop: 0 }} primary='ADD PRODUCT'></ListItemText>
                                </Link>
                            </ListItem>

                            <ListItem button key='ManageProduct' onClick={handleDrawerClose}>
                                <Link to='/manageProduct' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                                    <ListItemIcon><WifiProtectedSetupIcon /> </ListItemIcon>
                                    <ListItemText style={{ marginTop: 0 }} primary='MANAGE PRODUCT'></ListItemText>
                                </Link>
                            </ListItem>

                            <ListItem button key='MakeAdmin' onClick={handleDrawerClose}>
                                <Link to='/makeAdmin' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                                    <ListItemIcon><AdminPanelSettingsIcon /> </ListItemIcon>
                                    <ListItemText style={{ marginTop: 0 }} primary='MAKE ADMIN'></ListItemText>
                                </Link>
                            </ListItem>
                        </List>
                        :
                        <List sx={{ background: drawerBg }}>
                            <ListItem button key='MyOrder' onClick={handleDrawerClose}>
                                <Link to='/myOrders' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                                    <ListItemIcon><ShoppingCartIcon /> </ListItemIcon>
                                    <ListItemText style={{ marginTop: 0 }} primary='MY ORDER'></ListItemText>
                                </Link>
                            </ListItem>
                        </List>
                }

                {
                    user.email ?
                        <List sx={{ background: drawerBg }}>

                            <ListItem button key='Payment' onClick={handleDrawerClose}>
                                <Link to='/payment' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                                    <ListItemIcon><PaymentIcon /> </ListItemIcon>
                                    <ListItemText style={{ marginTop: 0 }} primary='PAYMENT'></ListItemText>
                                </Link>
                            </ListItem>

                            <ListItem button key='Review' onClick={handleDrawerClose}>
                                <Link to='/review' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                                    <ListItemIcon><ReviewsIcon /> </ListItemIcon>
                                    <ListItemText style={{ marginTop: 0 }} primary='REVIEW'></ListItemText>
                                </Link>
                            </ListItem>

                            <ListItem button key='LogOut' onClick={logOut}>
                                <ListItemIcon><LogoutIcon /> </ListItemIcon>
                                <ListItemText style={{ marginTop: 0 }} primary='LOG OUT'></ListItemText>
                            </ListItem>
                        </List>
                        :
                        <List sx={{ background: drawerBg }}>
                            <ListItem button key='Login' onClick={handleDrawerClose}>
                                <Link to='/login' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                                    <ListItemIcon><LoginIcon /> </ListItemIcon>
                                    <ListItemText style={{ marginTop: 0 }} primary='LOGIN'></ListItemText>
                                </Link>
                            </ListItem>

                            <ListItem button key='Registration' onClick={handleDrawerClose}>
                                <Link to='/register' style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                                    <ListItemIcon><HowToRegIcon /> </ListItemIcon>
                                    <ListItemText style={{ marginTop: 0 }} primary='REGISTRATION'></ListItemText>
                                </Link>
                            </ListItem>
                        </List>
                }
                
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
            </Main>
        </Box>
    );
};

export default Navigation;