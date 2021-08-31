import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import trash from "./images/trash-bin.png"
import edit from "./images/edit-pen.png"
import RegisterPopup from './RegisterPopup';
import EditPopup from './EditPopup';

export default function MainPage(){
    const [showRegister, setShowRegister] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState([])

    useEffect(() => {
        getAllEmployees()
    }, [])

    function getAllEmployees(){
        const promise = axios.get("https://crudcrud.com/api/ba62d842dfa74888984a916313b8f5b3/nutemployee")
        promise.then((req) => {console.log(req.data); setEmployees(req.data)})
        promise.catch()
    }

    function insertEmployee(){
        setShowRegister(true)
    }

    function deleteEmployee(id){
        const promise = axios.delete(`https://crudcrud.com/api/ba62d842dfa74888984a916313b8f5b3/nutemployee/${id}`)
        promise.then(() => {getAllEmployees()})


    }

    function editEmployee(id){
        const promise = axios.get(`https://crudcrud.com/api/ba62d842dfa74888984a916313b8f5b3/nutemployee/${id}`)
        promise.then((req) => {setEditingEmployee(req.data); setShowEdit(true)})
        promise.catch()

    }

    return (
        <>
            <Register onClick={insertEmployee}>Register an Employee</Register>

            <Body>
                <h1>List of Employees</h1>
                <Box>
                    <EachEmployee>
                        <td>Name: Lia</td>
                        <td>Email: lia@email.com</td>
                        <td>Start: 01/2021 </td>
                        <td>Team: Front</td>
                        <td>
                            <button onClick={()=>{deleteEmployee()}}><img src={trash}/></button>
                            <button onClick={()=>{editEmployee()}}><img src={edit}/></button>
                        </td>
                    </EachEmployee>

                    {employees.map((employee) => {
                        return (
                            <EachEmployee id={employee._id}>
                                <td>Name: {employee.name}</td>
                                <td>Email: {employee.email}</td>
                                <td>Start {employee.startdate}</td>
                                <td>Team: {employee.team}</td>
                                <td>
                                    <button onClick={()=>{deleteEmployee(employee._id)}}><img src={trash}/></button>
                                    <button onClick={()=>{editEmployee(employee._id)}}><img src={edit}/></button>
                                </td>
                            </EachEmployee>
                        )
                    })}
                </Box>

                <RegisterPopup showRegister={showRegister} setShowRegister={setShowRegister} getAllEmployees={getAllEmployees}/>
                <EditPopup showEdit={showEdit} setShowEdit={setShowEdit} getAllEmployees={getAllEmployees} editingEmployee={editingEmployee}/>
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