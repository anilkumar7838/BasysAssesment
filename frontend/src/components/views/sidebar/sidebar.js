import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assests/logo2.png"
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReorderIcon from '@mui/icons-material/Reorder';

const Sidebar = () => {
  const navigate = useNavigate();
  
  const MenuTabs = () => {
    return (
      <div className="sidebar-container">
        <div>
            <img className='logo' src={Logo} alt="loading..." />
          <List
            style={{ marginLeft: "8px", marginRight: "8px", marginTop: "15px" }}
          >
            <ListItem
              className="list_item"
              onClick={()=>{navigate('/')}}
            >
                <AssignmentIndIcon className="sidebar-icon"/>
              <div className="img_style">
                <span>Patient Summary</span>
              </div>
            </ListItem>
            <ListItem
              className="list_item"
              onClick={()=>{navigate('/scorecard')}}
                >
                <ContentPasteIcon className="sidebar-icon"/>
              <div className="img_style">
                <span>Score Card</span>
              </div>
            </ListItem>
            <ListItem
              className="list_item"
              onClick={()=>{navigate('/auth')}}
            >
              <div className="img_style">
                <AssessmentIcon className="sidebar-icon"/> <span>Prior Authorization</span>
              </div>
            </ListItem>
            <ListItem
              className="list_item"
              onClick={()=>{navigate('/claim')}}
            >
                <ReorderIcon className="sidebar-icon"/>
              <div className="img_style">
                <span>Claims</span>
              </div>
            </ListItem>
            <ListItem className="list_item">
              <AccountCircleIcon className="sidebar-icon"/>
              <div className="img_style">
                <span>My Profile</span>
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    );
  };

  return (
    <>
        <MenuTabs/>
    </>
  );
};

export default Sidebar;
