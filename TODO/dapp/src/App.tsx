import {Button, Flex} from  "@radix-ui/themes";
import { useState } from "react";
import { AddingJob_onChain } from "./component/AddingJob_onChain";
import { RemoveJob_onChain } from "./component/RemoveJob_onChain";
import { ConnectButton, useAccounts } from "@mysten/dapp-kit";


function App() {
  const [list, setList] = useState<string[]>([])
  const [job, setJob] = useState<string>("");
  const Add_to_todoList = () => {
    if(job != ''){
      setList([... list, job]);
      <AddingJob_onChain
        job={job}
      />
      setJob('')
    }
  }  
  const ClearList = () => {
    if(list.length !== 0){
      setList([]);
    }
  }
  const RemoveJob = (index: number) => {
    setList(list.filter((_, i) => i !== index));
    <RemoveJob_onChain
      index={index}
    />
  }
  const handleKeyDown = (key: string) => {
    if(key === "Enter"){
      Add_to_todoList(); 
    }
  }
  return (
    <div style={{padding:20}}>

      <div style={{paddingBottom: 20}}>
        <ConnectButton style={{
          backgroundColor:"black", 
          color:"white"
          }}/>
        </div>
      
      <input 
        className="input-job" 
        type="text" 
        onChange={(e) => {setJob(e.target.value)}} 
        value={job}
        onKeyDown={(e) => handleKeyDown(e.key)}/>

      <Button className="btn" color="red" onClick={Add_to_todoList}>Add</Button>

      <ul className="todo-list" style={{listStyle:"none"}}>

        {list.map((jobName, index) => (
          <Flex key={index}>
            <button className="remove-btn" onClick={() => RemoveJob(index)}>X</button>
            <li className="job-name" style={{paddingLeft:20}}>{jobName}</li>   
         </Flex>
        ))}

      </ul>

      <Button onClick={ClearList}>Clear All</Button>

    </div>
  );
}

export default App;
