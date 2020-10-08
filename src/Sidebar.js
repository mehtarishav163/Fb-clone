import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Sidebar() {
    return (
        <div className = "sidebar">
            <SidebarRow src = "<Avatar />" title = "Rishav Mehta"/>
            <SidebarRow Icon = {FileCopyIcon} title = "Pages"/>
            <SidebarRow Icon = {PeopleIcon} title = "Friends"/>
            <SidebarRow Icon = {ChatIcon} title = "Messenger"/>
            <SidebarRow Icon = {StorefrontIcon} title = "Marketplace"/>
            <SidebarRow Icon = {VideoLibraryIcon} title = "videos"/>
        </div>
    );
}

export default Sidebar;