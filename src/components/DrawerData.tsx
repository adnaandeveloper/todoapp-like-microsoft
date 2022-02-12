import {
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Typography,
    Button,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import HomeIcon from '@mui/icons-material/Home';
import useCustomToggle from '../myToggleStore';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CheckIcon from '@mui/icons-material/Check';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';

const DrawerData = () => {
    const { toggleToTrue } = useCustomToggle();
    return (
        <Grid container style={{ width: 350, height: `100%` }}>
            <Grid item xs={12}>
                <List sx={{ justifyContent: 'space-between' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuIcon onClick={toggleToTrue} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <WbSunnyIcon
                                sx={{ color: '#767678', fontSize: 24 }}
                            />
                        </ListItemIcon>
                        <Link
                            to="/"
                            style={{ textDecoration: 'none', color: 'white' }}
                        >
                            <ListItemText
                                primary="Mine Opgaver"
                                sx={{ color: '#34373d', fontSize: '1.4rem' }}
                            />
                        </Link>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <StarBorderIcon
                                sx={{ color: '#767678', fontSize: 24 }}
                            />
                        </ListItemIcon>
                        <Link to="Vigtigt" style={{ textDecoration: 'none' }}>
                            <ListItemText
                                primary="Vigtigt"
                                sx={{ color: '#34373d', fontSize: '1.4rem' }}
                            />
                        </Link>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <DateRangeIcon
                                sx={{ color: '#767678', fontSize: 24 }}
                            />
                        </ListItemIcon>
                        <Link to="Planlagt" style={{ textDecoration: 'none' }}>
                            <ListItemText
                                primary="Planlagt"
                                sx={{ color: '#34373d', fontSize: '1.4rem' }}
                            />
                        </Link>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <PersonOutlineIcon
                                sx={{ color: ' #767678', fontSize: 24 }}
                            />
                        </ListItemIcon>
                        <Link
                            to="Tildelt Mig"
                            style={{ textDecoration: 'none' }}
                        >
                            <ListItemText
                                primary="Tildelt mig"
                                sx={{ color: '#34373d', fontSize: '1.4rem' }}
                            />
                        </Link>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <EmojiFlagsIcon
                                sx={{ color: ' #5b6be6', fontSize: 24 }}
                            />
                        </ListItemIcon>
                        <Link
                            to=" Mail Markeret Med Flag"
                            style={{ textDecoration: 'none' }}
                        >
                            <ListItemText
                                primary="Mail Markeret Med Flag"
                                sx={{ color: '#34373d', fontSize: '1.4rem' }}
                            />
                        </Link>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon
                                sx={{ color: ' #5b6be6', fontSize: 24 }}
                            />
                        </ListItemIcon>
                        <Link to="Opgaver" style={{ textDecoration: 'none' }}>
                            <ListItemText
                                primary="Opgaver"
                                sx={{ color: '#34373d', fontSize: '1.4rem' }}
                            />
                        </Link>
                    </ListItemButton>
                </List>{' '}
            </Grid>
            <Grid item xs={12} style={{ alignSelf: 'end' }}>
                <Box>
                    {[
                        <MailOutlineIcon fontSize="small" />,
                        <CalendarTodayIcon fontSize="small" />,
                        <PeopleIcon fontSize="small" />,
                        <AttachFileIcon fontSize="small" />,
                        <CheckIcon fontSize="small" />,
                    ].map((icon) => (
                        <Button>{icon}</Button>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default DrawerData;
