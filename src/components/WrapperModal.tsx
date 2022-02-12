import { Button, Drawer, Grid, makeStyles, Typography } from '@mui/material';
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
import Header from './Header';

const WrapperModal = (props: any) => {
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
            <Header />
            <div style={{ marginLeft: isFalse ? '26%' : '3px' }}>
                {props.children}
            </div>
            <Drawer
                open={isFalse}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#faf8f7',
                        marginTop: '60px',
                        height: `calc(100vh - 60px)`,
                    },
                }}
                variant="persistent"
            >
                <DrawerData />
            </Drawer>
        </>
    );
};

export default WrapperModal;
