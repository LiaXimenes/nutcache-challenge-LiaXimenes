import styled from 'styled-components';
import logo from "./images/nutcache-logo.png"

export default function NavBar(){
    return (
        <Bar>
            <img src={logo}/>
        </Bar>
    )
}

const Bar = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    box-shadow: 0px 5px 10px 0px #C8C2BC;


    img{
        height: 75px;
        margin-left: 10px;
    }
`;

