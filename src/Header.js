import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" />
                <div className="header-input">
                    <SearchIcon />
                    <input placeholder = "search friends" type="text" />
                </div>
            </div>

            <div className="header-center">
                <div className="header-option
                header-option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <NotificationsActiveIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header-right">
                <div className="header-info">
                    <Avatar />
                    <h6>Rishav Mehta</h6>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    );
}

export default Header;
