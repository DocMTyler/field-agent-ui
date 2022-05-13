import React, {useEffect, useState} from 'react';

function DeleteAgent({id}){
    const url = `https://localhost:44371/api/agent/${id}`;

    const [agent, setAgent] = useState({});
    
    useEffect(() => {
        const fetchAgent = async () => {
            var requestOptions = {
                method: 'DELETE',
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
        <div>
            <br></br>
            <b>Agent Deleted</b>
        </div>
    );

}

export default DeleteAgent;