import React from 'react'
import { useState } from 'react'
import image3 from '../../image/Search.png'
import img from '../../image/new.png'
// import image2 from '../../../src/image/Group.png'
// import man1 from '../1man.png'
// import ok from '../Ok.png'
// import setting from '../setting.png'

// import divider from '../divider.png'
import { MainDiv } from '../dashboard/Style'
import { Super, Input } from './Style';
import Sidebar from '../sidebar/Sidebar'
import leftarow from '../../Left Arrow.png'
// import { ButtonDiv } from './Style';
// import { ButtonsDiv } from './Style';

const Supervisors = () => {
  const [show, setShow] = useState(false)
  return (
    <>

      <MainDiv style={{ width: "100%", display: "flex", backgroundColor:"aliceblue" }}>
        <div className='color-1'>
          <div   className="responsive-div"  style={{ display: show ? "block" : "none" }}>
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
          <Super>
            <div>
              <div className='super-card'>
                <div>
                  <div className='upper-portion'>
                    <div>
                      <span className='main-headd'>Add Contact</span>
                    </div>
                    <div className='arrow-main'>
                      <img src={leftarow} alt="" className='arrow' />
                      <span className='back'>Back</span>
                    </div>
                  </div>


                  <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "58px" }}>
                      <h3 className='First-name'>FIRST NAME</h3>
                      <Input type="text" name="" placeholder='  Your First Name' />
                      <h3 className='First-name'>LAST NAME</h3>
                      <Input type="text" name="" placeholder='  Your First Name' />
                      <h3 className='First-name'>EMAIL</h3>
                      <Input type="email" name="" placeholder='  Your Email  ' />
                      <h3 className='First-name'> MOBILE NUMBER</h3>
                      <Input type="number" name="" placeholder='  Your Mobile Number ' />


                    </div>
                    <div className='date-1'>
                      <h3 className='First-name'> DATE OF BIRTH</h3>
                      <Input type="date" name="" placeholder='  Select Date Of Birth ' />
                      <br />
                      <h3 className='First-name'> GENDER</h3>
                      <input type='radio' />
                      <label style={{ color: "#4B506D" }}>  Male  </label>
                      <input type='radio' />
                      <label style={{ color: "#4B506D" }}>Female</label>
                      {/* <h3 className='First-name'>  CHOOSE A ICTURE</h3>
                      <Input type="file" name="" placeholder='' /> */}
                      <div >

                        <h3 className='First-namee'>
                          CHOOSE A PICTURE
                        </h3>


                        <input

                          type="file"
                          name="file"
                          id="upload-file"
                          accept=".pdf, .doc, .docx"


                          multiple={false}
                          style={{ visibility: 'hidden', display: "none" }} className='First-name' />


                        <input type="text" className='file-upload' />

                        <label for="upload-file"
                          placeholder="Choose a file"
                          className='upload-button' >
                          Browse
                        </label>

                      </div>

                    </div>


                  </div>

                </div>
                <div className=" button--1">
                  <button className='btn5'>Submit</button>
                  &nbsp; &nbsp; &nbsp;
                  <button className='btn6'>Reset</button>
                </div>

              </div>

            </div>

          </Super>


        </div>

      </MainDiv>

    </>
  )
}

export default Supervisors;