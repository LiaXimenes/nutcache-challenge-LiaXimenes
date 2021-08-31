import { useEffect, useState } from 'react';

import styled from 'styled-components';
import trash from "./images/trash-bin.png"
import edit from "./images/edit-pen.png"
import RegisterPopup from './RegisterPopup';

export default function MainPage(){
    const [show, setShow] = useState(false);

    function insertEmployee(){
        setShow(true)
    }

    function deleteEmployee(){

    }

    function editEmployee(){

    }

    return (
        <>
            <Register onClick={insertEmployee}>Register an Employee</Register>

            <Body>
                <h1>List of Employees</h1>
                <Box>
                    <EachEmployee>
                        <p>Name: Employee</p>
                        <p>Email: employee@gmail.com</p>
                        <p>Start Date: 01/2021</p>
                        <p>Team: Front-End</p>
                        <Imagens>
                            <button onClick={deleteEmployee}><img src={trash}/></button>
                            <button onClick={editEmployee}><img src={edit}/></button>
                        </Imagens>
                    </EachEmployee>
                </Box>

                <RegisterPopup show={show} setShow={setShow}/>
            </Body>
        </>
    )
}

const Body = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 30px;
        margin-bottom: 20px;
    }
`;

const Register = styled.button`
    width: 350px;
    height: 80px;
    font-size: 30px;
    border-radius: 5px;
    margin-top: 50px;
    margin-left: 100px;
    border: solid 2px #7ce0d3;
    box-shadow: 0px 0px 5px 3px #7ce0d3;

    :hover{
        background-color: #7ce0d3;
        cursor: pointer;
        color: white;
    }
`;

const Box = styled.div`
    border: solid 1px black;
    width: 80%;
`;

const EachEmployee = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px black;
    padding-left: 10px;
    padding-right: 10px;
`;

const Imagens = styled.div`
    width: 70px;
    display: flex;
    justify-content: space-between;

    img{
        height: 25px;

        :hover{
            cursor: pointer;
        }
    }
`;