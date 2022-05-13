import React, {useState, useEffect} from 'react';
import LabeledInput from './LabeledInput';

function AddAgent(){
    const url = "http://localhost:44371/api/agent/";

    const [addAgent, setAddAgent] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        height: 0.00
    });

    const agentSetter = (field, value) => {
        const newState = {...addAgent};
        newState[field] = value;
        setAddAgent(newState);
      };
    
    useEffect(() => {
        const fetchAgent = async () => {
            var requestOptions = {
                method: 'POST',
                redirect: 'follow'
            };
            
            fetch(url, requestOptions)
                .then(response => response.json())
                .then(result => setAddAgent(result))
                .catch(error => console.log('error', error));
        }
        fetchAgent();
    }, []);
    
    return (
        <div><br></br>
        <LabeledInput label="First Name" type="text" value={addAgent.firstName}
                setValue={(value) => agentSetter("firstName", value)}/>
        <LabeledInput label="Last Name" type="text" value={addAgent.lastName}
                setValue={(value) => agentSetter("lastName", value)}/>
        <LabeledInput label="Date of Birth" type="text" value={addAgent.dateOfBirth}
                setValue={(value) => agentSetter("dateOfBirth", value)}/>
        <LabeledInput label="Height" type="number" value={addAgent.height}
                setValue={(value) => agentSetter("height", value)}/>
        </div>
    );
}

export default AddAgent;