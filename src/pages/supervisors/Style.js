import react from "react";
import styled from "styled-components";
export const Super= styled.div`


.super-card{
    background-color: white;
    border: 1px solid;
    height: 503px;
    margin-right: 23px;
    border: 1px solid #DFE0EB;
    border-radius: 5px;
    margin-left: 29px;
}
.First-name{
    size: 12px;
    color: #9FA2B4;
    font-weight: 700;
    font-size: 12px;
    font-family: Mulish;

}
.second-name{
    height: 40px;
    border: 1px solid #F0F1F7;
    width: 250px;
    border-radius: 8px;
    margin-top: -9px;
    background-color:#FCFDFE;
}
.main-headd{
    /* color: #252733;
    font-family: poppins;
    line-height: 20px;
    margin-left: -28px; */
    font-size: 28px;
    color: #252733;
    /* margin-top: 7px; */
    margin-left: 29px;
    line-height: 55px;
    font-weight: 600;
    
}
.file-upload{
    height: 40px;
    border: 1px solid #F0F1F7;
    width: 175px;
    border-radius: 7px 0px 0px 7px;
    margin-top: -9px;
    background-color: #FCFDFE;
}
.upload-button{
/* background-color: #F0F1F7;
    padding: 9px;
    border-radius: 8px;
    border: 1px solid darkgray;
    color: #4B506D;
    padding-top: 6px; */
    background-color: #F0F1F7;
    padding: 8px 12px;
    border-radius: 0px 10px 10px 0px;
    border: 1px solid #F0F1F7;
    color: #4B506D;
   padding-block: 9px 12px;
    border-left: 0px;
    
    
}
.First-namee{
    size: 12px;
    color: #9FA2B4;
    font-weight: 700;
    margin-top: 31px;
    font-size: 12px;
    font-family: 'Mulish';

}
.btn5{
    padding: 12px 40px;
    background-color: #29CC97;
    border: 0;
    border-radius: 16px;
    color: white;
}
.btn6{
    padding: 12px 40px;
    background-color: #CC2929;
    border: 0;
    border-radius: 16px;
    color: white;
}
.back{
    align-items: end;
}
.arrow-main{
    display: flex;
}
.upper-portion{
    display: flex;
    justify-content: space-between;
   
}
.arrow{
    height: 30%;
    margin-top: 20px;
    margin-right: 13px;
    }
    .back{
        margin-top: 18px;
    }
    .date-1{
        margin-left: 112px;
        margin-top:4px;
    }
    .button--1{
        text-align: center;
        margin-left: 59%;
    }
    /* .responsive-button {
  display: none;
  width: 60px;
  height: 40px;
  background-color: aliceblue;
  border: none;
  padding: 10px;
  text-align: left;
  font-size: 20px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .responsive-button,.responsive-div {
    display: block;
  }
}
.responsive-div {
  width: 20%;
  background-color: #363740;
  padding-top: 17px;
  height: auto;
}
@media (min-width: 768px) {
  .responsive-div {
    display: block!important;
  }
} */


.responsive-button {
  display: none;
  width: 60px;
  height: 40px;
  background-color: aliceblue;
  border: none;
  padding: 10px;
  text-align: left;
  font-size: 20px;
  cursor: pointer;
  color: red;
  margin-top: 25px;
}

@media (max-width: 768px) {
  .responsive-button,.responsive-div {
    display: block;
  }
}
.responsive-div {
  width: 20%;
  background-color: #363740;
  padding-top: 17px;
  height: auto;
}
@media (min-width: 768px) {
  .responsive-div {
    display: block!important;
  }
}
@media (max-width:930px) and (min-width: 768px) {
    .date-1 {
    margin-left: 50px;
    margin-top: 4px;
}
.button--1 {
    text-align: center;
    margin-left: 51%;
}
    .First-name{
        width: 100%;
    }
    .second-name{
        width: 100%;
    }
   
   
}
@media (max-width:846px) {
    .First-name{
        height: 27px;
        width: 100%;
    }
    .file-upload{
        width: 139px;
    }
    
}
@media (max-width:767px) and (min-width: 554px){
    .super-card{
        width: 118%;
    }
    .button--1{
        margin-left: 47%;
    }
    .date-1{
        margin-left: 53px;
    }
}
@media (max-width:553px) and (min-width: 360px){

    .date-1 {
    margin-left: 59px;
}
.super-card{
    height: 750px;
    width: 114%;
}
.button--1 {
    text-align: center;
    margin-left: 20%;
    margin-top: 34px;
}
.file-upload {
    width: 262px;
}
}
`
export const Input = styled.input`

height: 40px;
    border: 1px solid #F0F1F7;
    width: 250px;
    border-radius: 7px;
    margin-top: -9px;
    background-color: #FCFDFE;
    @media (max-width:930px) and (min-width: 768px) {
        width: 100%;
    }
    @media (max-width:767px) and (min-width: 360px){
        width: 100%;
    }
    @media (max-width:553px) and (min-width: 360px){
    width: 79%;
}


`
