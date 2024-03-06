import styled from "styled-components";
export const MainDiv = styled.div`



.main{
    font-family: 'MULISH';
    padding-left: 5px;
    padding-left: 31px;
    padding-top: 10px;
    text-decoration: underline;
}
.main___div{
    width: 80%;
    background-color: aliceblue;
    @media (max-width:600px ) and (min-width:360px) {
        width: 96%;
        
    }
}
.color-1{
    width: 20%;
    background-color: #363740;
     padding-top: 17px;
      height: 624px 
}
@media (max-width:930px) and (min-width: 768px){
.color-1{
    width: 27%;
}
}
@media (max-width:767px)  and (min-width: 360px){
    .color-1{
        width: auto;
    }
    
}
.imge{
    /* padding-left: 100px; */
    height: 20px;
  width: 25px;
  padding-right: 5px;

}
.admi--5{
    text-decoration:underline;
}
.para-bottom{
    border-bottom: 1px solid #DFE0EB;
}
.main_div{
display: flex;
justify-content:space-between;
width: 100%;
}
.main2{
    display: flex;
    align-items: baseline;
    /* padding-right: 74px;
    margin-top: 21px; */
    padding-right: 21px;
    margin-top: 22px;
}
.card{
   
    
    /* background-color: red; */
    margin: 15px 29px;
    border: 1px solid lightgray;
    background-color: white;
    margin-top: 14px;
   
}
.btn{
    border-radius:18px;
    background-color: #29CC97;
    padding: 3px;
    margin-left: 24px;
    padding-left: 14px;
    padding-right: 15px;
    color: white;
    margin-top: 18px;
    border: #29CC97;
    font-family: 'Mulish';
    font-weight: bold;
    font-size: 14px;
}
.btn1{
    color: #F15B6D;
    background-color: white;
    border-radius: 100px;
    padding: 3px 22px;
    border: 1px solid #F15B6D;
}
.btn2{
    border: 1px solid #29cc97;
    color: #29cc97;
    background-color: white;
    border-radius: 100px;
    padding: 3px 22px;
    margin-inline: 5px;
    
}
.btn3{
    color: #04C6F0;
    background-color: white;
    border-radius: 100px;
    padding: 3px 22px;
    border: 1px solid #04C6F0;
    
}
.search{
    border: 0px;
    border-bottom: 1px solid;
    color: #0000001A;
    font-size: 14px;
    font-weight: 400;
}
.button{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin: 0px 334px 0px; */
    /* margin-left: 646px;
    margin-top: -32px; */
    margin-left: 481px;
    margin-top: -20px;
    position: relative;
    gap: 20px;
}

.search1{
    width: 22px;
    position: absolute;
    right: 44px;
    top: -2px;
}
.search3{
    margin-right: 42px;
}
.button-groups{
    display: flex;
}
.main-3{
    display: flex;
    /* flex-direction: row;
    align-items: center; */
    justify-content:space-around;
    /* margin: 0px 77px; */
    color: #9FA2B4;
    font-family: 'Mulish';
    size: 14px;
    font-weight: bold;
    margin-top: 21px;
}
.main-4{
    display: flex;
    /* flex-direction: row;
    align-items: center; */
    justify-content:space-around;
    /* margin: 0px 77px; */
    /* color: #9FA2B4; */
    border-top: 1px solid #DFE0EB;
    border-bottom: 1px solid #DFE0EB;
    height: 51px;
    align-items: center;

}
.main-dive{
    display: flex;
}
              
.setting-image{
    height: 25px;
    padding-right: 39px;
}
.ok {
    height: 31px;
    margin-right: 86px
}
.phone{
    margin-right: 68px;
    font-size: 14px;
    color: #252733;
    font-family: 'Mulish';
    font-weight: 600;
}
.man{
    margin-right: 22px;
    height: 38px;
    margin-top: 6px;
}
.email{
    margin-left: 127px;
    font-size: 14px;
    color: #252733;
    font-family: 'Mulish';
    font-weight: 600;
}
.admin{
    /* margin-right: 41px; */
    font-size: 14px;
    color: #252733;
    font-family: 'Mulish';
    font-weight: 600;
}
.Main-div1{
    width: 20%;
    background-color:#363740;
    padding-top:17px;
    height: auto;
    /* width: "20%", backgroundColor: "#363740", paddingTop: " 17px", height: " auto" */
}
.child-div{
    width: 80%;
    background-color: aliceblue;
}
@media (max-width:768px) {
    .Main-div1{
        width: 20%;
    background-color:#363740;
    padding-top:17px;
    height: auto;
    display: none;
    }
   
    
}
@media(max-width:1024px) {

    .search1{
       
    right: 24px;
 
    }
    .button{
        margin-left: 287px;
    }
}
@media(max-width:1002px){
    .search1{
        right: 7px;
    }
    
}
@media(max-width:976px){
    .button{
        margin-left:263px;
    }
    .phone{
        margin-right: 49px;
    }
    .email{
        margin-left: 100px;
    }
}
@media(max-width:944px){
    .Main-div1{
        width: 21%;
    }
    .card{
        margin: 17px 18px;
    }
}
@media (max-width:1118px) {
    .button{
        margin-left: 346px;
    }
    
}
@media (max-width:928px) {
    .button{
        margin-left: 246px;
    }
    
}
@media (max-width:1142px) {
    .button{
        margin-left: 363px;
    }
    
}
@media (max-width:1153px) {
    .button{
        margin-left: 374px;
    }
}
@media (max-width:1024px) {
    .button{
        margin-left: 288px;
    }
}
@media (max-width:768px) {
    .card{
        margin: 0px 2%;
    }
    .button{
        margin-left: 30%;
    flex-wrap: wrap;
    }
    .search3{
        margin-right: 11%;

    }
    .search1 {
    right: 62px;
}
.main_div {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.child-div{
    width: 100%;
    background-color:aliceblue;
}
}
@media (max-width:706px) {
    .phone {
    margin-right: 16px;
}
.email {
    margin-left: 47px;
}
    
}
@media (max-width:628px) {
    .main-3{
        margin-left: 2%;
    }
    .setting-image {
    height: 20px;
    padding-right: 24px;
}
.ok {
    height: 31px;
    margin-right: 18px;
}
.email {
    margin-left: 27px;
}
.phone {
    margin-right: -15px;
}
}
@media (max-width:550px){
    .ok {
    height: 18px;
    margin-right: 51px;
    
}
.email {
    margin-left: 6px;
}
.setting-image {
    height: 14px;
    padding-right: 9px;
}
.main-3 {
    margin-left: 3%;
}
}
@media (max-width:512px) {
    .phone {
    margin-right: 12px;
}
.email {
    margin-left: 27px;
}
.ok {
    height: 29px;
    margin-right: 45px;
}
.main-4{
    height: 50px;
}
.main-3 {
    margin-left: 6%;
}
}
@media (max-width:492px) {
    .card {
    margin: 0px 1%;
}
.button {
    margin-left: 34%;
    flex-wrap: wrap;
    margin-top: -4%;
}
.btn{
    margin-left: 6px;
}
.main-4 {
    height: 56px;
    flex-direction: column;
    /* margin-left: -62px; */
    justify-content: space-between;
}
.main-3 {
    margin-left: 8%;
}
.main-dive {
    display: flex;
    margin-left: -72%;
}
.setting-image {
    height: 14px;
    padding-right: -14px;
    margin-left: 547%;
    margin-top: -19%;
    margin-bottom: 26%;
}
.ok {
    height: 17px;
    margin-right: -273px;
    margin-top: -7%;
}
.email {
    margin-left: -73px;
    margin-top: -7%;
}
.phone {
    margin-right: -161px;
    margin-top: -7%;
}
.search1 {
    /* right: 62px; */
    display: none;
}

}
@media (max-width:452px) {
    .main-dive {
    display: flex;
    margin-left: -72%;
    margin-top: 12px;
}
.man {
    margin-right: 22px;
    height: 31px;
    margin-top: 6px;
}
.admin {
    font-size: 12px;
    margin-right: 16px;
}
.email {
    margin-left: -78px;
    margin-top: -12%;
    font-size: 75%;
}
.phone {
    margin-right: -161px;
    margin-top: -11%;
    font-size: 73%;
}
.ok {
    height: 17px;
    margin-right: -273px;
    margin-top: -11%;
}
.setting-image {
    /* height: 12px; */
    padding-right: -14px;
    margin-left: 511%;
    margin-top: -96%;
    /* margin-bottom: 43%; */
    display: flex;
}
.main-4 {
    height: 66px;
    flex-direction: column;
    justify-content: space-between;
}
    
}
.main__div1{
    width: 80%;
    background-color:aliceblue;
}
@media (max-width:423px) {
    .card {
    margin: 0px 2%;
}
.setting-image{
    margin-left: 488%;
}
.btn3{
    padding: 2px 15px;
}
.btn2{
    padding: 2px 15px;
}
.btn1{
    padding: 2px 15px;
}
    .btn{
        padding-left: 10px;
    padding-right: 10px;
    }
}
@media (max-width:392px) {
    
    .main-3 {
    margin-left: 27%;
    justify-content: space-between;
}
.setting-image {
    margin-left: 447%;
}
.card {
    margin: 0px -1%;
}
.email{
    margin-left: -45px;
}
}
@media (max-width:1290px) {
.search3{
display:none;
    
}
}
.responsive-button {
  display: none;
  width: 60px;
  height: 40px;
  background-color: aliceblue;
  border: none;
  padding: 10px;
  text-align: left;
  font-size: 20px;
  color: red;
  margin-top: 25px;
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
}
@media (max-width:888px) {
    .card{
        margin: 15px 1%;
    }
    .email {
    margin-left: 1px;
}
.ok {
    height: 23px;
    margin-right: 53px;
}
.phone {
    margin-right: -20px;
    /* margin-left: 39px; */
    font-size: 11px;
}
.responsive-div{
        width: 23%;
}
}
@media (max-width:783px) {
    .main-3{
        margin-left:11px;
    }
    .responsive-div {
    width: 28%;
}
    
}
@media (max-width:767px) {
    .main__div1{
        width: 100%;
    }
    
}
@media (max-width:486px) {
    .email {
    margin-left: 1px;
    margin-left: -64px;
}
.ok {
    height: 23px;
     margin-right: -53%
}
.phone {
    /* margin-right: -20px; */
    font-size: 11px;
    margin-right: -33%;
}
.main-3 {
    margin-left: 28px;
}
    
}
`