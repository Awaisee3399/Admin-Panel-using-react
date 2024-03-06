import styled from "styled-components";
export const Buildings = styled.div`

.main-card{
    /* height: 50%;
    width: 50%; */
    border: 1px solid white;
    width: 24%;
    height: 494px;
    background-color: white;
    border-radius: 8px;

}
.container{
    margin-left: 27px;
    display: flex;
    width: 98%;
    flex-wrap: wrap;
    gap: 11px
}
.para-1{
    color: #363740;
    font-family: "Poppins", sans-serif;
    size: 14px;
    font-weight: 600;
    margin-left: 26px;
}
.img-group{
    display: flex;
    align-items: center;
    justify-content: center;

}
.main-image{
    display: flex;
    align-items: center;
    justify-content: center;
}
.image-1{
    height: 28px;
    border: 1px red;
    border-radius: 7px;
    margin-top: 3px;
}
.image-2{
    height: 183px;
    
}
.btn5{
    color: #FFFFFF;
    font-family: "Poppins", sans-serif;
    background-color:#363740;
    border-radius: 8px;
    font-weight: 600;
    size: 14px;
    width: 218px;
    padding: 11px;
    height: 42px;
   
}
.small-pic{
    width: 44px;
    height: 44px;
    //margin-left: -32px;
    //margin-top: -8px;
    margin-left: -3px;
    margin-top: -6px;
}
.main-card2{
    border: 0.5px solid #9FA2B4;
    border-radius: 12px;
    height: 80px;
    width: 83%;
    display: flex;
}
.minicard{
    color: #000000;
    size: 12px;
    font-weight: 600;
}
.elipse8{
    display: flex;
    height: 25px;
    margin-left: 124px;
    margin-top: -20px;
    position: relative;
}
.super{
    margin-left: 5px;
    margin-top: 8px;
}
.shahid{
    margin-top: 2px;
    margin-left: 23px;
    /* font-family: poppins; */
    font-weight: 600;
}
.number{
    margin-left: 9px;
    color: #4AC4F8;
    margin-top: 1px;
}
.super1{
    position: absolute;
    /* align-content: center; */
    /* margin-top: 12px; */
    /* margin-left: 14px; */
    top: 12px;
    left: 14px;
}
.span2{
    /* align-content: center; */
    /* margin-top: 12px; */
    /* margin-left: 14px; */
    /* top: 12px;
    left: 62px; */
    position: absolute;
    top: 12px;
    left: 142px;
    color: white;
}
.span3{
        /* position: absolute; */
    /* display: flex; */
    /* align-items: center; */
    /* align-content: center; */
    /* margin-top: 12px; */
    /* margin-left: 14px; */
    position: absolute;
    top: 12px;
    left: 89px;
    color: white;
}
.span1{
    left: 39px;
    position: absolute;
    top: 13px;
    color: white;
}
.elipse1{
    position: absolute;
    height: 99%;
    left: 2px;
}
.elipse2{
    position: absolute;
    height: 100%;
    left: 21px;
}
.elipse3{
    position: absolute;
    height: 100%;
    left: 40px;
}
.elipse4{
    position: absolute;
    height: 100%;
    left: 58px;
}
.elipse-1{
    background-color: black;
    border-radius: 28px;
    opacity: .9;
}
.elipse-2{
    background-color: black;
    border-radius: 28px;
    opacity: 1.9;
}
.elipse-3{
    background-color: black;
    border-radius: 28px;
    opacity: 0.7;
}
.shahid-1{
    display: flex;
}
.main__card{
    display: flex;
    align-items: center;
    justify-content: center;
}
.Elipse__1{
display: flex;
height: 48px;
justify-content: center;
margin-block:10px;
position: relative;
gap: 2px;
}

.floor_1{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:10px;
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
  width: 19%;
  background-color: #363740;
  padding-top: 17px;
  height: auto;
}
@media (min-width: 768px) {
  .responsive-div {
    display: block!important;
  }
}
@media (max-width:1305px) {
    .main-card{
        width: 23%;
    }
    .image-2 {
    height: 164px;
}
.span1{
    left: 30px;
}
.span2{
    left: 129px;
}
.span3{
    left: 81px;
}
.main-card2{
    width: 93%;
}
.btn5{
    width: 192px;
}
}
@media (max-width:1200px){
    .main-card2 {
    width: 97%;
}
.span1 {
    left: 22px;
}
.span3 {
    left: 70px;
}
.span2 {
    left: 119px;
}
.main-card2 {
    width: 97%;

}
.image-2 {
    height: 160px;
}
.number {
    margin-left: 3px;
  
}
.shahid{
    margin-left: 8px;
}
    
}
@media (max-width:1150px) {
    
    .image-2 {
    height: 149px;
}
.main-card2 {
    width: 98%;
}
.elipse1{
    left: -16px;
}
.elipse2{
    left: 2px;
}
.elipse3{
    left: 21px;
}
.elipse4{
    left: 39px;
}
}
@media (max-width:1070px) {
    .para-1{
        margin-left: 11px;
    }
    .image-2 {
    height: 138px;
}
.btn5 {
    width: 167px;
}
.Elipse__1{
    height: 39px;
}
.span1 {
    left: 21px;
    top: 8px;
}
.span3 {
    left: 64px;
    top: 8px;
}
.span2 {
    left: 106px;
    top: 8px;
}
.elipse1 {
    left: -25px;
}
.elipse2 {
    left: -6px;
}
.elipse3 {
    left: 13px;
}
.elipse4 {
    left: 31px;
}
.number {
    margin-left: 1px;
    font-size: 14px;
}
    .main-card{
        height: 464px;
    }
}
@media (max-width:1044px) {
    
    .responsive-div{
        width: 20%;
    }
}
@media (max-width:966x) {
    .para-1 {
    margin-left: 11px;
    font-size: 12px;
}
.image-2 {
    height: 126px;
}
.btn5 {
    width: 145px;
    height: 38px;
}
.Elipse__1 {
    height: 37px;
}
.span1 {
    left: 13px;
    top: 8px;
}
.span3 {
    left: 56px;
    top: 8px;
}
.span2 {
    left: 96px;
    top: 8px;
}
.elipse1 {
    left: -34px;
}
.elipse2 {
    left: -15px;
}
.elipse3 {
    left: 3px;
}
.elipse4 {
    left: 17px;
}
.image-2 {
    height: 127px;
}
    
}
@media (max-width:767px) {
    .main-card {
    height: 521px;
    width: 41%;
    gap: 5px;
    margin-left: 1px;
}
.para-1 {
    margin-left: 28px;
}
.image-2 {
    height: 180px;
}
.btn5 {
    width: 214px;
}
.Elipse__1 {
    height: 55px;
}
.span1 {
    left: 26px;
    top: 19px;
}
.span3 {
    left: 82px;
    top: 18px;
}
.span2 {
    left: 139px;
    top: 16px;
}
.main-card2 {
    width: 87%;
}
.shahid {
    margin-left: 18px;
}
.number {
    margin-left: 19px;
    font-size: 15px;
    margin-top: 3px;
}
.elipse4 {
    left: 59px;
}
.elipse3 {
    left: 41px;
}
.elipse2 {
    left: 22px;
}
.elipse1 {
    left: 4px;
}
.container{
    gap: 40px;
}
}
@media (max-width:685px) {
    .para-1 {
    margin-left: 9px;
    font-size: 15px;
}
.image-2 {
    height: 158px;
}
.Elipse__1 {
    height: 46px;
}
.span1 {
    left: 22px;
    top: 14px;
}
.span3 {
    left: 75px;
    top: 15px;
}
.span2 {
    left: 123px;
    top: 16px;
}
.main-card2 {
    width: 95%;
}
.elipse4 {
    left: 59px;
}
.elipse3 {
    left: 41px;
}
.elipse2 {
    left: 22px;
}
.elipse1 {
    left: 4px;
}
.number {
    margin-left: 13px;
    font-size: 14px;
    margin-top: 3px;
}
.shahid {
    margin-left: 14px;
}
.btn5 {
    width: 191px;
}
}
@media (max-width:600px) and (min-width: 425px) {
    
    .image-2 {
    /* height: 158px; */
    width: 100%;
}
.container {
    gap: 40px;
}
.main-card {
    height: auto;
    width: 41%;
    gap: 5px;

}
.btn5 {
    width: 189px;
}
.main-card2 {
    width: 97%;
}
.span1 {
    left: 28px;
    top: 14px;
}
.span3 {
    left: 77px;
    top: 15px;
}
.span2 {
    left: 128px;
    top: 16px;
}
.span1 {
    left: 13px;
    top: 14px;
}
.span3 {
    left: 62px;
    top: 15px;
}
.span2 {
    left: 110px;
    top: 16px;
}
.number {
    margin-left: 13px;
    font-size: 13px;
    margin-top: 3px;
}
.elipse1 {
    left: -19px;
}
.elipse2 {
    left: 1px;
}
.elipse3 {
    left: 18px;
}
.elipse4 {
    left: 31px;
}
.main-card2 {
    width: 100%;
}
.Elipse__1 {
    height: 38px;
}
}
@media (max-width:425px) and (min-width: 360px){
    .main-card {
    height: auto;
    width: 96%;
    gap: 5px;
}
.para-1 {
    margin-left: 86px;
    font-size: 18px;
}
.btn5 {
    width: 342px;
}
.Elipse__1 {
    height: 63px;
}
.span1 {
    left: 83px;
    top: 19px;
}
.span2 {
    left: 215px;
    top: 19px;
}
.span3 {
    left: 149px;
    top: 21px;
}
.main-card2 {
    width: 92%;
}
.number {
    margin-left: 114px;
    font-size: 19px;
    margin-top: 3px;
}
.shahid {
    margin-left: 93px;
}
.elipse4 {
    left: 180px;
}
.elipse3 {
    left: 162px;
}
.elipse2 {
    left: 143px;
}
.elipse1 {
    left: 124px;
}
.shahid {
    margin-left: 28px;
}
}
@media (max-width:932px) and (min-width: 780px){
    .image-2 {
    /* height: 138px; */
    width: 100%;
}
.Elipse__1 {
    height: 37px;
}
.span1 {
    left: 11px;
    top: 8px;
}
.span3 {
    left: 50px;
    top: 8px;
}
.span2 {
    left: 89px;
    top: 8px;
}
.main-card2 {
    width: 100%;
}
.para-1 {
    margin-left: 11px;
    font-size: 11px;
}
.number {
    margin-left: 1px;
    font-size: 12px;
    margin-top: 6px;
}
.elipse1 {
    left: -34px;
}
.elipse2 {
    left: -17px;
}
.elipse3 {
    left: -1px;
}
.elipse4 {
    left: 11px;
}
.btn5 {
    width: 145px;
}
}
`