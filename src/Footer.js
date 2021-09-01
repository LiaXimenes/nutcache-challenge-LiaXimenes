import styled from 'styled-components';

import divider from "./images/divider.png";
import logo from "./images/nutcache-logo.png";


export default function Footer(){
    return (
        <>
            <Divider src={divider}/>
            <OptionBox>
                <p onClick={() => alert("To be implemented")}>See all unities</p>
                <p onClick={() => alert("To be implemented")}>See employees by unity</p>
            </OptionBox>
            <LogoBox>
                <div></div>
                <img src={logo}/>
                <p>Smart & simple all-in-one project management software for your business.</p>
                <div></div>
            </LogoBox>
            
        </>
    )
}

const Divider = styled.img`
    width: 100%;
    margin-top: 70px;
    margin-bottom: 100px;
`;

const OptionBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    border-top: 2px solid #C8C6C6;

    p{
        font-size: 20px;
        font-weight: bold;
        margin-top: 15px;
        color: #00aec7;

        :hover{
            cursor: pointer;
        }
    }
`;

const LogoBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    div{
        width:150px;
        height: 6px;
        background-color: #7ce0d3;
    }

    img{
        height: 70px;
    }

    p{
        font-size: 25px;
        font-weight: 700;
        color: #00aec7;
    }
`;

