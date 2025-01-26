import {Button, Flex} from  "@radix-ui/themes";
import { useState } from "react";
import { AddingJob_onChain } from "./component/AddingJob_onChain";
import { RemoveJob_onChain } from "./component/RemoveJob_onChain";
import { ConnectButton, useAccounts, useCurrentAccount } from "@mysten/dapp-kit";
import { SaveOnChain } from "./component/SaveOnChain";

//Adding vào list 1 lần nhiều jobs và lưu trong adding List
//Remove jobs trong list 1 lần nhiều jobs và lưu trong Remove List
//Save on chain sẽ cập nhận object todoList trên block chain dựa trên hai List
function App() {

  const [list, setList] = useState<string[]>([])
  const [job, setJob] = useState<string>("");
  const [AddingList, setAddingList] = useState<String[]>([]);
  const [RemoveList, setRemoveList] = useState<number[]>([]); //Remove dependent on index of jobs in exist list
  const currentAccount = useCurrentAccount();

  const Add_to_todoList = () => {
    if(job != ''){
      setList([... list, job]);
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
  }
  const handleKeyDown = (key: string) => {
    if(key === "Enter"){
      Add_to_todoList(); 
    }
  }
  const handleSaveOnChain = () => {
    <SaveOnChain 
      AddingList={AddingList}
      RemoveList={RemoveList}
    />
    // Xoá "bộ nhớ" sau khi cập nhận lên blockchain
    setAddingList([]);
    setRemoveList([]);
  }
  return (
    <div style={{padding:20}}>
      <Flex>
        <div style={{paddingBottom: 20}}>
          <ConnectButton style={{
            backgroundColor:"black", 
            color:"white"
            }}/>
          </div>

          <div style={{padding: 20}} onClick={handleSaveOnChain}>
            <Button>Save on chain</Button>
          </div>
      </Flex>
      
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
