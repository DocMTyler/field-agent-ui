import React, {useEffect, useState} from 'react';

function AgentDisplay({id}){
    const url = `https://localhost:44371/api/agent/${id}`;

    const [agent, setAgent] = useState({});
    
    useEffect(() => {
        const fetchAgent = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            
            fetch(url, requestOptions)
                .then(response => response.json())
                .then(result => setAgent(result))
                .catch(error => console.log('error', error));
        }
        fetchAgent();
    }, [id]);

    return (
        <div><br></br>
            <div>Agent ID: {agent.agentID}</div>
            <div>Agent First Name: {agent.firstName}</div>
            <div>Agent Last Name: {agent.lastName}</div>
            <div>Agent DOB: {agent.dateOfBirth}</div>
            <div>Agent Height: {agent.height}</div>
        </div>
    );

}

export default AgentDisplay;