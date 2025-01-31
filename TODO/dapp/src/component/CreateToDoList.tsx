import { Transaction } from "@mysten/sui/transactions";
import { PackageId, ModuleName } from "../OnChainInformation";
import { useCurrentAccount, useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";
import { useState, useEffect } from "react";
import { SuiClient } from "@mysten/sui/client";
import { WalletAccount } from "ethos-connect";

interface Props{
    client: SuiClient,
    currentAccount: WalletAccount | null,
    todoListObjectId: string[],
}

export const CreateToDoList: React.FC<Props> = (props) => {
    const [digest, setDigest] = useState('');
    const { client, currentAccount, todoListObjectId } = props;
    const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction({
        // execute: async ({ bytes, signature }) => {
        //     return await client.executeTransactionBlock({
        //         transactionBlock: bytes,
        //         signature,
        //         options: {
        //             showObjectChanges: true,
        //             showBalanceChanges: true,
        //         }
        //     });
        // }
    });
    useEffect(() => {
        const createToDoList = async () => {
            const tx = new Transaction();
            const functionName = 'create_new_todoList';
            tx.moveCall({
                target: `${PackageId}::${ModuleName}::${functionName}`,
            });
            const result = await signAndExecuteTransaction(
                {
                    transaction: tx,
                },
                // {
                //     onSuccess: (result) => {
                //         console.log(result);
                //         setDigest(prev => prev = result.digest);
                //         alert(`create new list successfully ${result.digest}`);
                //     }
                // }
            );
            console.log(result);
        };
        createToDoList();
        if(todoListObjectId.length > 0)localStorage.setItem("todoListObjectId", JSON.stringify(todoListObjectId));
    }, []) 
    return (
        <></>
    );
}
