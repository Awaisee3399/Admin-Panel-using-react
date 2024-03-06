import styled from "styled-components";
export const MinDiv =styled.div`
 background: #363740;
    width: 19%;
    padding-top: 17px;
    height: 624px;
.side-div{
    display: flex;
    color: #DDE2FF;
    font-family: monospace;
    padding-left: 47px;
    margin-top: -12px;
    font-family: 'Mulish',sans-serif;
    line-height: 29px;
   

    &:hover{
    border-left: 1px solid white;
    background: #363740;
    opacity: 10;
    color: white;
    cursor: pointer;
    }
    

}
.side-icons{
    width: 13px;
    height: 10%;
    margin-top: 24px;
    margin-right: 24px;
    margin-left: 3px;
    &:hover{
        border-left: 1px solid white;
    /* background: #363740; */
    opacity: 10;
    color: white;
    /* cursor: pointer; */
    }
}
.head{
    color: white;
}
.real{
                                               
    padding-top:13px;
    padding-left: 37px;
}
#icon{
    color: white;
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
export const MaiinDiv=styled.div`
`