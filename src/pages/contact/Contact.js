import React from 'react'
import { useState } from 'react';
import image3 from '../../image/Search.png'
import img from '../../image/new.png'
import TablePagination from '@mui/material/TablePagination';
import Pagination from '../sidebar/Pagintation ';
// import image2 from '../../../src/image/Group.png'
import man1 from '../../1man.png'
import ok from '../../Ok.png'
import setting from '../../setting.png'

import divider from '../../divider.png'
// import divider from '../../divider.png'
import { SideDiv, MainDiv } from '../dashboard/Style'
import Sidebar from '../sidebar/Sidebar';
import { ButtonDiv } from './Style';
import { ButtonsDiv } from './Style';

const Contact = () => {
  const [show, setShow] = useState(false);
  const carditem = [
    { image: './image/1man.png', name: "Admin1", Email: "wakoman@gmail.com", Phone: "042-6664772", ok: './image/ok.png', setting: "./image/setting.png" },
    { image: './image/woman.png', name: "Admin1", Email: "wakoman@gmail.com", Phone: "042-6664772", ok: './image/ok.png', setting: "./image/setting.png" },

  ]
  return (
    <>
      <MainDiv style={{ width: "100%", display: "flex",  backgroundColor:"aliceblue"}}>

        <div className='color-1'>
          <div className="responsive-div" style={{ display: show ? "block" : "none" }}>
            <Sidebar />
          </div>
        </div>
        <div style={{ width: "80%", backgroundColor: "aliceblue" }} >
          <div className='main_div'>
            <button type="button"
              onClick={() => setShow(!show)}
              className='responsive-button'>
              menu
            </button>
            <div>
              <h1 className='main'>Admin Management</h1>
            </div>
            <div className='main2'>
              <img src={img} className='imge' />
              <p>Admin</p>
            </div>
          </div>
          <div className='card '>
            <ButtonsDiv>
              <div className='button'>
                <div className='button-groups'>

                  <button className='btn1'>PDF</button>
                  <button className='btn2'>EXCEL</button>
                  <button className='btn3'>PRINT</button>
                </div>
                <div className='search3'>
                  <input type='search' placeholder='search' className='search' />
                  <img src={image3} className='search1' />
                </div>
              </div>

              <div className='main-3'>
                <p style={{ marginLeft: "-37px" }}>Name</p>
                <p style={{ marginLeft: "126px" }}>Email</p>
                <p>Phone</p>
                <p>Active</p>
                <p>Actions</p>
              </div>


              {carditem.map((item) => (
                <div className='main-4'>
                  <div className='main-dive'>
                    <img src={item.image} className='man' />
                    <p className='admin'>{item.name}</p>
                  </div>
                  <p className='email'>{item.Email}</p>
                  <p className='phone'>{item.Phone}</p>
                  <img src={item.ok} className='ok' />
                  <div>
                    <img src={item.setting} className='setting-image' />
                  </div>
                </div>

              ))}
              <ButtonDiv>
                <button className='btn'>+ADD ADMIN</button>
              </ButtonDiv>
              <Pagination />
            </ButtonsDiv>
          </div>


        </div>


      </MainDiv>


    </>
  )
}

export default Contact