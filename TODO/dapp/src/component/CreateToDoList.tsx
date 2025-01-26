import { Transaction } from "@mysten/sui/transactions";
import { PackageId, ModuleName } from "../OnChainInformation";


export const CreateToDoList = () => {
    // const []
    const tx = new Transaction(); 
    const functionName = 'create_new_todoList';
    tx.moveCall({
        target: `${PackageId}::${ModuleName}::${functionName}`,
    }) 
    
    return (<>

    </>);
}
