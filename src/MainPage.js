import { useEffect, useState } from 'react';

import {api} from "./services/api";
import styled from 'styled-components';
import trash from "./images/trash-bin.png"
import edit from "./images/edit-pen.png"
import RegisterPopup from './popups/RegisterPopup';
import EditPopup from './popups/EditPopup';
import DeletePopup from './popups/ConfirmPopup';

export default function MainPage(){
    const [showRegister, setShowRegister] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [chosenEmployee, setChosenEmployee] = useState([]);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees()
    }, [])

    function getAllEmployees(){
        const promise = api.get("/nutemployee")
        promise.then((req) => {setEmployees(req.data)})
    }

    function callDeletePopUp(employee){
        setChosenEmployee(employee);
        setShowDeletePopup(true);
    }

    function editEmployee(employee){
        setChosenEmployee(employee);
        setShowEdit(true);
    }

    return (
        <>
            <Register onClick={() => setShowRegister(true)}>Register an Employee</Register>

            <Body>
                <h1>List of Employees</h1>
                <Box>
                    {employees.map((employee) => {
                        return (
                            <EachEmployee id={employee._id}>
                                <td>Name: {employee.name}</td>
                                <td>Email: {employee.email}</td>
                                <td>Start date: {employee.startdate}</td>
                                <td>Team: {employee.team}</td>
                                <td>
                                    <button onClick={()=>{callDeletePopUp(employee)}}><img src={trash}/></button>
                                    <button onClick={()=>{editEmployee(employee)}}><img src={edit}/></button>
                                </td>
                            </EachEmployee>
                        )
                    })}
                </Box>

                <RegisterPopup showRegister={showRegister} setShowRegister={setShowRegister} getAllEmployees={getAllEmployees}/>
                <EditPopup showEdit={showEdit} setShowEdit={setShowEdit} getAllEmployees={getAllEmployees} employee={chosenEmployee}/>
                <DeletePopup showDeletePopup={showDeletePopup} setShowDeletePopup={setShowDeletePopup} getAllEmployees={getAllEmployees} employee={chosenEmployee}/>
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

const Box = styled.table`
    width: 80%;
`;

const EachEmployee = styled.tr`
    border: 1px solid black;

    td{
        padding-left: 10px;
        padding-right: 10px;
        height: 40px;

        img{
            height: 20px;

            :hover{
                cursor: pointer;
            }
        }
    }

    td:nth-child(5){
        display: flex;
        justify-content: space-evenly;
    }
`;