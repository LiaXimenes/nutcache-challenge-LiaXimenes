import styled from 'styled-components';

import {api} from "../services/api";

export default function DeletePopup({showDeletePopup, setShowDeletePopup, getAllEmployees, employee}){

    function deleteEmployee(employee){
        const promise = api.delete(`/nutemployee/${employee._id}`)
        promise.then(() => {getAllEmployees(); setShowDeletePopup(false)})
    }

    return(
        <Body showDeletePopup={showDeletePopup}>
            <PopUp>
                <p>Are you sure you want to delete {employee.name}?</p>
                <div>
                    <button onClick={() => deleteEmployee(employee)}>
                        <p>Yes!</p>
                    </button>
                    <button onClick={() => setShowDeletePopup(false)}>
                        <p>OMG, No!</p>
                    </button>
                </div>
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
    display: ${(props) => (props.showDeletePopup ? "flex" : "none")};    
`;

const PopUp = styled.div`
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    top: 40%;
    left: 40%;
    box-shadow: 0px 0px 20px 5px #1A1C2077;

    div{
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    button{
        border: solid 2px #7ce0d3;
        box-shadow: 0px 0px 5px 3px #7ce0d3;
        background-color: white;

        :hover{
        background-color: #7ce0d3;
        cursor: pointer;
        }
    }
`;
