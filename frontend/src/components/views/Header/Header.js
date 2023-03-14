import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = ({props}) => {
  return (
    <>
        <div className='header-container'>
            <div className="left-text">
                <p>This is a demo login with limited but essential functionality</p>
                <h1>{props}</h1>
            </div>
            <div className="right-text">
                <SearchIcon className="icon"/>
                <NotificationsIcon className="icon"/>
                <AccountCircleIcon className="icon user-icon"/>
                <LogoutIcon className="icon"/>
            </div>
        </div>
    </>
  )
}

export default Header