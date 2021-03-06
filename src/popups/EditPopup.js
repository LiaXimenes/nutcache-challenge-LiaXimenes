import styled from 'styled-components';
import { useEffect, useState } from 'react';

import {api} from "../services/api";

export default function EditPopup({showEdit, setShowEdit, getAllEmployees, employee}){
    const genderOptions = ["Cis Man", "Cis Woman", "Trans Man", "Trans Woman", "Non Binary", "I'd rather not say"]
    const teamOptions = ["Front-end", "Back-end", "Mobile"];

    const [name, setChosenName] = useState('');
    const [email, setChosenEmail] = useState('');
    const [gender, setChosenGender] = useState('');
    const [cpf, setChosenCPF] = useState('');
    const [birthdate, setChosenBirthDate] = useState('');
    const [startdate, setChosenStartDate] = useState('');
    const [team, setChosenTeam] = useState('');

    useEffect(() => {
        setChosenName(employee.name)
        setChosenEmail(employee.email)
        setChosenGender(employee.gender)
        setChosenCPF(employee.cpf)
        setChosenBirthDate(employee.birthdate)
        setChosenStartDate(employee.startdate)
        setChosenTeam(employee.team)
    }, [employee])
  
    function sendEditedEmployee(){
        const config ={
            name,
            email,
            gender,
            cpf,
            birthdate,
            startdate,
            team
        }

        const promise = api.put(`/nutemployee/${employee._id}`, config)
        promise.then(() => {
            setShowEdit(false); 
            getAllEmployees();
        })
    }

    return (
        <Body showEdit={showEdit}>
            <PopUp>
                <button onClick={() => setShowEdit(false)}>X</button>

                <p>Full name</p>
                <input type="text" value={name} placeholder="Name" onChange={(e) => {setChosenName(e.target.value)}} />
                <p>Birth Date</p>
                <input type="date" value={birthdate} placeholder="Birth date" onChange={(e) => {setChosenBirthDate(e.target.value)}}/>
                <p>E-mail</p>
                <input type="text" value={email} placeholder="E-mail" onChange={(e) => {setChosenEmail(e.target.value)}}/>
                <p>Gender</p>
                <select value={gender} onChange={(e) => {setChosenGender(e.target.value)}}>
                    <option></option>
                    {genderOptions.map((option) => {
                            return(
                            <option>
                                {option}
                            </option>
                        )
                    })}
                </select>
                <p>CPF</p>
                <input type="text" value={cpf} placeholder="CPF" onChange={(e) => {setChosenCPF(e.target.value)}}/>
                <p>Start Date</p>
                <input type="text" value={startdate} placeholder="MM/YYYY" onChange={(e) => {setChosenStartDate(e.target.value)}}/>
                <p>Team</p>
                <select value={team} onChange={(e) => {setChosenTeam(e.target.value)}}>
                    <option></option>
                    {teamOptions.map((option) => {
                            return(
                            <option>
                                {option}
                            </option>
                        )
                    })}
                </select>
                <SendButton onClick={sendEditedEmployee}>Edit</SendButton>
            </PopUp>
        </Body>
    )
}

const Body = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left: 0;
    z-index: 10;
    display: ${(props) => (props.showEdit ? "flex" : "none")};    
`;

const PopUp = styled.div`
    width: 50%;
    height: 60%;
    background-color: white;
    border-radius: 5px;
    position: fixed;
    top: 25%;
    left: 25%;
    box-shadow: 0px 0px 20px 5px #1A1C2077;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;

    input{
        width: 80%;
        margin-bottom: 10px;
        margin-left: 10px;
        padding: 3px;
        box-shadow: 0px 0px 5px 3px #e5e5e5;
    }

    p{
        margin-left: 10px;
    }

    select{
        width: 80%;
        margin-bottom: 10px;
        margin-left: 10px;
        padding: 3px;
        background-color: white;
        border: 1px solid #ddd;
        box-shadow: 0px 0px 5px 3px #e5e5e5;
    }

    button{
        width: 50px;
        margin-left: 90%;
        background-color: white;
        border-radius: 5px;

        :hover{
        background-color: #7ce0d3;
        cursor: pointer;
        color: white;
        }
    }
`;

const SendButton = styled.div`
    width: 100px;
    height: 20px;
    margin-left: 40%;
    margin-bottom: 5px;
    background-color: white;
    border-radius: 5px;
    border: solid 2px #7ce0d3;
    box-shadow: 0px 0px 5px 3px #7ce0d3;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        background-color: #7ce0d3;
        cursor: pointer;
    }
`;