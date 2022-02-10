import { Button, Drawer, Grid, Typography } from '@mui/material';
import { height, width } from '@mui/system';
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Item from './Item';
import DrawerData from './DrawerData';
import DynamicHeading from './DynamicHeading';
import useCustomToggle from '../myToggleStore';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CheckIcon from '@mui/icons-material/Check';

const ItemList = () => {
    const { isNotFalse, isFalse, toggleToFalse, toggleToTrue } =
        useCustomToggle();
    const [open, setOpen] = useState(false);

    const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
        event.preventDefault();
        setOpen((prevopen) => !prevopen);
        toggleToFalse();
        console.log(open);
    };

    return (
        <>
            <div style={{ marginLeft: isFalse ? '21%' : '3px' }}>
                <Item />
            </div>
            <Drawer
                open={isFalse}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '20%',
                        height: '100%',
                        backgroundColor: '#faf8f7',
                        marginTop: '63px',
                    },
                }}
                variant="persistent"
            >
                <DrawerData />
                <div
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        textAlign: 'center',
                        paddingBottom: 0,
                        width: '20%',
                    }}
                >
                    <Grid
                        container
                        spacing={5}
                        style={{ border: '1px solid rgba(0, 0, 0, 0.05)' }}
                    >
                        <Grid item xs={12 / 5}>
                            <MailOutlineIcon />
                        </Grid>
                        <Grid item xs={12 / 5}>
                            <CalendarTodayIcon />
                        </Grid>
                        <Grid item xs={12 / 5}>
                            <PeopleIcon />{' '}
                        </Grid>
                        <Grid item xs={12 / 5}>
                            <AttachFileIcon />
                        </Grid>
                        <Grid item xs={12 / 5}>
                            <CheckIcon />
                        </Grid>
                    </Grid>
                </div>
            </Drawer>
        </>
    );
};

export default ItemList;
