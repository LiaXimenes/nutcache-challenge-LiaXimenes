import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function RegisterPopup({show, setShow}){
    const genderOptions = ["Cis Man", "Cis Woman", "Trans Man", "Trans Woman", "Non Binary", "I'd rather not say"]
    const teamOptions = ["Front-end", "Back-end", "Mobile"];

    const [name, setChosenName] = useState('');
    const [email, setChosenEmail] = useState('');
    const [gender, setChosenGender] = useState('');
    const [cpf, setChosenCPF] = useState('');
    const [birthDate, setChosenBirthDate] = useState('');
    const [startDate, setChosenStartDate] = useState('');
    const [team, setChosenTeam] = useState('');

    function closePopup(){
        setShow(false)
    }


    return (
        <Body show={show}>
            <PopUp>
                <button onClick={closePopup}>X</button>

                <p>Full name</p>
                <input type="text" placeholder="Name" onChange={(e) => {setChosenName(e.target.value)}}/>
                <p>Birth Date</p>
                <input type="date" placeholder="Birth Date" onChange={(e) => {setChosenBirthDate(e.target.value)}}/>
                <p>E-mail</p>
                <input type="text" placeholder="Email" onChange={(e) => {setChosenEmail(e.target.value)}}/>
                <p>Gender</p>
                <select onChange={(e) => {setChosenGender(e.target.value)}}>
                    <option></option>
                    {genderOptions.map((option) => {
                            return(
                            <option value={option.id}>
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
                            <option value={option.id}>
                                {option}
                            </option>
                        )
                    })}
                </select>
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
    display: ${(props) => (props.show ? "flex" : "none")};    
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