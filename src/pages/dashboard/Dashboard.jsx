
import React from 'react'
import image3 from '../../image/Search.png'
import img from '../../image/new.png'
import Pagination from '../sidebar/Pagintation ';
import { useState } from 'react';
import { MainDiv } from './Style';
import Sidebar from '../sidebar/Sidebar'

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const carditem = [
    { image: './image/1man.png', name: "Admin1", Email: "wakoman@gmail.com", Phone: "042-6664772", ok: './image/ok.png', setting: "./image/setting.png" },
    { image: './image/woman.png', name: "Admin1", Email: "wakoman@gmail.com", Phone: "042-6664772", ok: './image/ok.png', setting: "./image/setting.png" },
    { image: './image/woman2.png', name: "Admin1", Email: "wakoman@gmail.com", Phone: "042-6664772", ok: './image/ok.png', setting: "./image/setting.png" },
    { image: './image/777.png', name: "Admin1", Email: "wakoman@gmail.com", Phone: "042-6664772", ok: './image/ok.png', setting: "./image/setting.png" },
    { image: './image/mann.png', name: "Admin1", Email: "wakoman@gmail.com", Phone: "042-6664772", ok: './image/ok.png', setting: "./image/setting.png" },
    { image: './image/888.png', name: "Admin1", Email: "wakoman@gmail.com", Phone: "042-6664772", ok: './image/ok.png', setting: "./image/setting.png" },
    { image: './image/m6.png', name: "Admin1", Email: "wakoman@gmail.com", Phone: "042-6664772", ok: './image/ok.png', setting: "./image/setting.png" },
    { image: './image/7m.png', name: "Admin1", Email: "wakoman@gmail.com", Phone: "042-6664772", ok: './image/ok.png', setting: "./image/setting.png" },
  ]
  return (
    <>



      <MainDiv style={{ width: "100%", display: "flex" }}>

        <div
          className="responsive-div"
          style={{ display: show ? "block" : "none" }}
        >
          <Sidebar />
        </div>
        <div className='main__div1' >
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
              <p className='para-bottom'></p>
              <p className='admi--5'>Admin</p>
            </div>
          </div>
          <div className='card '>
            <button className='btn'>+ADD ADMIN</button>
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
            <Pagination />
          </div>


        </div>


      </MainDiv>


    </>
  )
}

export default Dashboard;

