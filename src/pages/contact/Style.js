import styled from "styled-components";
export const ButtonsDiv=styled.div`

.button{
    margin-top: 24px;
}
.main-3{
    margin-top: 24px;
}
.main-4{
    height: 72px;
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

`

export const ButtonDiv=styled.div`

.btn{
    padding: 10px;
    margin-left: 87%;
}
.main-4 {
    height: 76px; 
}
@media (max-width:1070px) and (min-width:425px) {
    
    
    .btn{
       padding: 10px;
       margin-left: 77%;
   }
       
   }

`