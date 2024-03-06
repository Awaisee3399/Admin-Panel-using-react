import React from 'react'
import { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { MainDiv } from '../dashboard/Style'
import img from '../../image/new.png'
import { Buildings } from '../building/Style'
import error from '../../Error.png'
import contact from '../../Contacts.png'
import pencil from '../../Pencil.png'
import trash from '../../Trash.png'
import image2 from '../../image 2.png'
import elispse from '../../Ellipse 5.png'
import elipse8 from '../../Ellipse 8.png'
import group from '../../Group 4373.png'

const Building = () => {
  const [show, setShow] = useState(false);
  const carditem = [
    { index: 1, image: "./image/image4.png" },
    { index: 2, image: "./image/image3.png" },
    { index: 3, image: "./image/image4.png" },
    { index: 4, image: "./image/image2.png" },
    { index: 4, image: "./image/image4.png" },
    { index: 4, image: "./image/image3.png" },
    { index: 4, image: "./image/image4.png" },
    { index: 4, image: "./image/image2.png" },

  ]
  return (

    <>
      <Buildings>
        <MainDiv style={{ width: "100%", display: "flex", backgroundColor: "aliceblue" }}>

          <div
            className="responsive-div"
            style={{ display: show ? "block" : "none" }}
          >
            <Sidebar />
          </div>
          <div className='main___div' >
            <div className='main_div'>
              <button type="button"
                onClick={() => setShow(!show)}
                className='responsive-button'>
                menu
              </button>
              <div>
                <h1 className='main'>Building Management</h1>
              </div>
              <div className='main2'>
                <img src={img} className='imge' />
                <p>Admin</p>
              </div>
            </div>

            <div className='container'>


              {
                carditem.map((item) => (
                  <div className='main-card'>
                    <p className='para-1'>Heirs AL Shamsi Villa Hor..</p>
                    <div className='img-group'>
                      <img src={error} className='image-1' />
                      <img src={contact} className='image-1' />
                      <img src={pencil} className='image-1' />
                      <img src={trash} className='image-1' />
                    </div>
                    <div className='main-image'>
                      <img src={item.image} className='image-2' />
                    </div>
                    <div className=" floor_1">
                      <button className='btn5'>Floor Management</button>
                    </div>
                    {/* <div style={{ display: "flex", marginTop: "15px", marginLeft: "15px" }}>
                  <div style={{ display: "flex" }}>
                  </div>
                </div> */}
                    <div className='Elipse__1'>

                      <img src={elispse} className='elipse-1' /> <span className='span1'>201</span>
                      <img src={elispse} className='elipse-2' /> <span className='span3'>202</span>
                      <img src={elispse} className='elipse-3' /> <span className='span2'>+2</span>
                      <img src={group} />
                    </div>
                    <div className="main__card">
                      <div className='main-card2'>
                        <div className='minicard'>
                          <div className='super'>
                            Supervisor:
                          </div>
                          <div className='elipse8'>
                            <img src={elipse8} className='elipse1' />
                            <img src={elipse8} className='elipse2' />
                            <img src={elipse8} className='elipse3' />
                            <img src={group} className='elipse4' />

                          </div>
                          <div className='super'>
                            Contacts:
                          </div>
                          <div className='elipse8'>
                            <img src={elipse8} className='elipse1' />
                            <img src={elipse8} className='elipse2' />
                            <img src={elipse8} className='elipse3' />
                            <img src={group} className='elipse4' />

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='shahid-1'>
                      <span className='shahid'>
                        Shahid
                      </span>
                      <span className='number'>
                        +972 3003 393933 3
                      </span>
                    </div>

                  </div>
                ))
              }

            </div>
          </div>

        </MainDiv>
      </Buildings>
    </>
  )
}

export default Building;