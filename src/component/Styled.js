import styled from 'styled-components'
import background from '../image/image1.jpg'
export const BackgroundImg = styled.div`
    background: url(${background}),radial-gradient(#444, #111);
    background-blend-mode: multiply;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100vh;
   
    .parent{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74%
    }
    .card{
        background-color: white;
        border: 1px solid black;
         width: 26%;
        height: 107%;
        margin-top: 5%;    
        border-radius: 12px;
        padding-bottom: 51px;
    }
        /* @media (max-width: 1024px) {
            width: 34%;
        }
        @media (max-width: 768px) {
            width: 45%;
        }
        @media (max-width:425px) {
            width: 81%;
             margin-left: 1px;   
        }
        @media (max-width: 375px) {
     width: 87%;
    margin-left: 1px;
            
        }
        @media (max-width:1330px) {
               margin-top: 2%;
        }

    } */
    .Heading{
        align-items: center;
        justify-content: center;
        display: flex;
        margin-top: 25%;
    }
    .user{
    margin-left: 18px;
    width: 299px;
    height: 36px;
    margin-top: 7px;
    border-radius: 5px
}
    .main-head{
        padding-left: 22px;
    color: #9FA2B4;
    font-size: 11px;
    margin: 0;
    margin-top: 63px;
    }
    .main-headd{
     padding-left: 22px; 
    color: #9FA2B4;
    font-size: 11px;
    margin: 0;
    margin-top: 10px; 
    }
    .password{
        display: flex;
        /* justify-content: space-between; */
        margin-top: 12px;
    }
    .main-headdd{
    padding-left: 157px;
    color: #9FA2B4;
    font-size: 10px;
    margin: 0;
    margin-top: 10px; 
    }
    .btn{
        /* background-color: #04AA6D; */
      background-color: #2E8B57;
    color: white;
    width: 89%;
    padding: 9px;
    margin-left: 16px;
    /* text-align: center; */
    /* text-decoration: none; */
    /* display: inline-block; */
    font-size: 13px;
    margin-top: 14px;
    border-radius: 10px
    }
    .relative{
        position: relative;
    }
    .absolute{
        position: absolute;
        top: 19px;
    right: 34px;
    }
    .span{
        color: red;
        padding-left: 28px;
        font-size: small;
    }
    @media (max-width:768px) {
        /* .card{
            width: 44%;
        }  */
    }
    /* @media (max-width:1024px) {
        .card{
            width: 34%;
        }
        
    } */
    /* @media (max-width:1330px) {
        .card{
     width: 26%;
    height: 107%;
    margin-top: 2%;
        }
        
    } */
    /* @media (max-width:375px) {
        .btn{
            padding: 11px 122px;
        }
        @media (max-width:375px) {
            .user{
                width: 273px;
            }
            @media (max-width:375px) {
                .main-headdd{
                    padding-left: 132px 
                }
            }
        }
        
    } */
    @media (max-width:768px) and (min-width: 425px) {
        .card{
            width: 50%;
        }
        .user{
            width: 85%;
        }
        .btn{
            width: 88%;
        }
        .main-headdd{
            padding-left: 40%;
            /* white-space: nowrap; */
        }

    }
    @media (max-width:1272px) and (min-width: 769px) {
        .card{
            width: 26%;
        }
        .user{
            width: 85%;
        }
        .btn{
            width: 88%;
        }
        .main-headdd{
            padding-left: 40%;
            /* white-space: nowrap; */
        }

    }
    @media (max-width:424px) and (min-width: 360px) {
        .card{
            width: 50%;
        }
        .user{
            width: 85%;
        }
        .btn{
            width: 88%;
        }
        .main-headdd{
            padding-left: 40%;
            /* white-space: nowrap; */
        }

    }
`

