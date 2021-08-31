import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditPopup({showEdit, setShowEdit, getAllEmployees, editingEmployee}){
    const genderOptions = ["Cis Man", "Cis Woman", "Trans Man", "Trans Woman", "Non Binary", "I'd rather not say"]
    const teamOptions = ["Front-end", "Back-end", "Mobile"];

    const [name, setChosenName] = useState('');
    const [email, setChosenEmail] = useState('');
    const [gender, setChosenGender] = useState('');
    const [cpf, setChosenCPF] = useState('');
    const [birthdate, setChosenBirthDate] = useState('');
    const [startdate, setChosenStartDate] = useState('');
    const [team, setChosenTeam] = useState('');

    console.log(editingEmployee)

    function closePopup(){
        setShowEdit(false)
    }

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

        const promise = axios.update(`https://crudcrud.com/api/ba62d842dfa74888984a916313b8f5b3/nutemployee/${editingEmployee._id}`, config)
        promise.then(() => {
            setShowEdit(false); 
            getAllEmployees();
            setChosenName("");
            setChosenEmail("")
            setChosenCPF("")
            setChosenGender("")
            setChosenBirthDate("")
            setChosenStartDate("")
            setChosenTeam("")
        })
    }
       


    return (
        <Body showEdit={showEdit}>
            <PopUp>
                <button onClick={closePopup}>X</button>

                <p>Full name</p>
                <input type="text" placeholder={editingEmployee.name} onChange={(e) => {setChosenName(e.target.value)}}/>
                <p>Birth Date</p>
                <input type="date" placeholder="Birth Date" onChange={(e) => {setChosenBirthDate(e.target.value)}}/>
                <p>E-mail</p>
                <input type="text" placeholder="Email" onChange={(e) => {setChosenEmail(e.target.value)}}/>
                <p>Gender</p>
                <select onChange={(e) => {setChosenGender(e.target.value)}}>
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
                <input type="text" placeholder="CPF" onChange={(e) => {setChosenCPF(e.target.value)}}/>
                <p>Start Date</p>
                <input type="text" placeholder="MM/YYYY" onChange={(e) => {setChosenStartDate(e.target.value)}}/>
                <p>Team</p>
                <select onChange={(e) => {setChosenTeam(e.target.value)}}>
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
        width: 500px;
        margin-bottom: 10px;
        margin-left: 10px;
    }

    p{
        margin-left: 10px;

    }

    select{
        width: 510px;
        margin-bottom: 10px;
        margin-left: 10px;

    }

    button{
        width: 50px;
        margin-left: 92%;
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