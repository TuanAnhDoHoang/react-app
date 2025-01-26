import { Transaction } from "@mysten/sui/transactions";
import { PackageId, ModuleName } from "../OnChainInformation";
import { useSignAndExecuteTransaction } from "@mysten/dapp-kit";
import { useState } from "react";


export const CreateToDoList = () => {
    const {mutate: SignAndExecuteTransaction} = useSignAndExecuteTransaction();
    const [digest, setDigest] = useState('');
    const tx = new Transaction(); 
    const functionName = 'create_new_todoList';
    tx.moveCall({
        target: `${PackageId}::${ModuleName}::${functionName}`,
    }) 

    return (<>

    </>);
}
