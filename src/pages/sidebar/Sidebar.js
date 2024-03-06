
import React, { useState } from 'react';
import { SideDiv, MainDiv } from '../sidebar/Style';
import img from '../../image/new.png';
import image2 from '../../../src/image/Group.png';
import image3 from '../../../src/image/Search.png';
import TablePagination from '@mui/material/TablePagination';
import man1 from '../../1man.png';
import ok from '../../Ok.png';
import setting from '../../setting.png';
import Pagination from './Pagintation ';
import divider from '../../divider.png';
import { Route, useNavigate } from 'react-router-dom';
import Header from '../Header';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


const Sidebar = () => {
  const navigate = useNavigate();
  const menuItem = [
    { id: 1, Image: './image/1. overview.png', name: 'Dashboard', path: '/Dashboard' },
    { id: 1, Image: './image/tickets.png', name: 'Administration', path: '/Administration' },
    { id: 1, Image: './image/Vector.png', name: 'Buildings', path: '/Building' },
    { id: 1, Image: './image/4contacts.png', name: 'Supervisors', path: '/Supervisors' },
    { id: 1, Image: './image/Vector3.png', name: 'Contact', path: '/Contact' },
    { id: 1, Image: './image/Vector.png', name: 'Tenants' },
    { id: 1, Image: './image/4contacts.png', name: 'Directory' },
    { id: 1, Image: './image/Vector3.png', name: 'Service Category' },
    { id: 1, Image: './image/Vector3.png', name: 'Report' },
  ];

  const handleClick = (id) => {
    navigate('/page/${id}')
  }
  return (
    <>
      <SideDiv style={{ backgroundColor: "#363740", position: "fixed" }}>

        <div className="sidebar">
          <img src={image2} className="real" />
          <div className="top_section">
            <h1 className="heading"></h1>
          </div>
        </div>
        {menuItem.map((item) => (
          <div className="side-div" key={item.id} onClick={() => navigate(item.path)}>
            <img src={item.Image} className="side-icons" />
            <p className="side-headings">{item.name}</p>
          </div>
        ))}
        <hr style={{ border: '1px solid #DFE0EB', width: "126%" }} />
      </SideDiv>
    </>
  );
};

export default Sidebar;


