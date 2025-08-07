import React, { useState } from 'react';
import {
    Drawer,
    IconButton,
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Divider,
    Menu,
    MenuItem
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddBoxIcon from '@mui/icons-material/AddBox';
import WorkIcon from '@mui/icons-material/Work';

function ResponsiveDrawer({ open, setOpen, dropdownItems }) {
    const [signupAnchor, setSignupAnchor] = useState(null);
    const [loginAnchor, setLoginAnchor] = useState(null);
    const [hoveredMenu, setHoveredMenu] = useState(null);

    // Open dropdown menu
    const handleOpen = (setter) => (event) => {
        setter(event.currentTarget);
        setHoveredMenu(event.currentTarget);
    };

    // Close dropdown with small delay (for smoother hover transition)
    const handleDelayedClose = (setter) => {
        setTimeout(() => {
            if (!hoveredMenu) {
                setter(null);
            }
        }, 150);
    };

    return (
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <Box
                sx={{
                    width: 320,
                    //   p: 2,
                    bgcolor: '#fff',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* Close Button */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box p={2}>


                    {/* Title */}
                    <Typography variant="h6" fontWeight="bold" align="center" mt={1} mb={2}>
                        WWW.MYPROJECT.AI
                    </Typography>
                    <Divider sx={{ mb: 2 }} />

                    {/* Menu Items */}
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <AddBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Post a Project" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <WorkIcon />
                            </ListItemIcon>
                            <ListItemText primary="Apply Internship" />
                        </ListItem>

                        {/* Page Links */}
                        {['Home', 'How It Works', 'Projects', 'Blogs', 'DIY Worktops'].map((text) => (
                            <ListItem button key={text}>
                                <ListItemText
                                    primary={
                                        <Typography
                                            sx={{
                                                fontWeight: text === 'Home' ? 'bold' : 500,
                                                color: text === 'Home' ? '#2196f3' : '#000'
                                            }}
                                        >
                                            {text}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}

                        {/* Login Dropdown */}
                        <Box mt={2} onMouseLeave={() => handleDelayedClose(setLoginAnchor)}>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    backgroundColor: '#003A64',
                                    borderRadius: '10px',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    mb: 1
                                }}
                                onMouseEnter={handleOpen(setLoginAnchor)}
                            >
                                Log In
                            </Button>
                            <Menu
                                anchorEl={loginAnchor}
                                open={Boolean(loginAnchor)}
                                onClose={() => setLoginAnchor(null)}
                                MenuListProps={{
                                    onMouseEnter: () => setHoveredMenu(loginAnchor),
                                    onMouseLeave: () => {
                                        setHoveredMenu(null);
                                        handleDelayedClose(setLoginAnchor);
                                    }
                                }}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                PaperProps={{
                                    elevation: 3,
                                    sx: {
                                        borderRadius: 2,
                                        mt: 1,
                                        //   minWidth: 180
                                    }
                                }}
                            >
                                {dropdownItems.map((item) => (
                                    <MenuItem key={item} onClick={() => setLoginAnchor(null)}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Sign Up Dropdown */}
                        <Box mt={1} onMouseLeave={() => handleDelayedClose(setSignupAnchor)}>
                            <Button
                                fullWidth
                                variant="outlined"
                                sx={{
                                    borderColor: '#003A64',
                                    borderRadius: '10px',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    color: '#003A64'
                                }}
                                onMouseEnter={handleOpen(setSignupAnchor)}
                            >
                                Sign Up
                            </Button>
                            <Menu
                                anchorEl={signupAnchor}
                                open={Boolean(signupAnchor)}
                                onClose={() => setSignupAnchor(null)}
                                MenuListProps={{
                                    onMouseEnter: () => setHoveredMenu(signupAnchor),
                                    onMouseLeave: () => {
                                        setHoveredMenu(null);
                                        handleDelayedClose(setSignupAnchor);
                                    }
                                }}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                PaperProps={{
                                    elevation: 3,
                                    sx: {
                                        borderRadius: 2,
                                        mt: 1,
                                        //   minWidth: 180
                                    }
                                }}
                            >
                                {dropdownItems.map((item) => (
                                    <MenuItem key={item} onClick={() => setSignupAnchor(null)}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
}

export default ResponsiveDrawer;
