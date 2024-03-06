import styled from "styled-components";
export const SideDiv = styled.div`
    /* background: #363740;
    width: 100%;
    padding-top: 17px;
    height: 624px;  */
.side-div{
    display: flex;
    color: #DDE2FF;
    font-family: monospace;
    padding-left: 47px;
    margin-top: -12px;
    font-family: 'Mulish',sans-serif;
    line-height: 29px;
   transform: translateX(0%);

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
    opacity: 10;
    color: white;
   
    }
}

.real{                                       
    padding-top:13px;
    padding-left: 37px;
}
#icon{
    color: white;
}
@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .hidden {
    display: block;
  }
}

`