import AgentDisplay from "./components/AgentDisplay";
import {useState} from 'react';
import AgentInput from "./components/AgentInput";
import AddAgent from "./components/AddAgent";
import DeleteAgent from "./components/DeleteAgent";

function App() {
  const [agent, setAgent] = useState({});
  const [agentID, setAgentID] = useState();
  const [deleteAgentID, setDeleteAgentID] = useState();
  
  const setID = () => {
    setAgentID(agentID);
  }
  
  return (
    <div>
      <AgentInput label="Enter Agent ID"
                  value={agentID}
                  onChange={(e) => setAgentID(e.target.value)}
                  buttonAction={setID}/>

      <AgentDisplay id={agentID}/>

      <AddAgent />
      <br></br>
      <AgentInput label="Enter Agent ID"
                  value={deleteAgentID}
                  onChange={(e) => setDeleteAgentID(e.target.value)}
                  buttonAction={setID}/>
      <DeleteAgent id={deleteAgentID}/>
    </div>
  );
}

export default App;
