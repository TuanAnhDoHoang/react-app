import { Transaction } from "@mysten/sui/transactions";

interface Transfer{
    to: String,
    amount: number;
}
export const CreateToDoList = () => {
    const transfers: Transfer[] = getTransfer(); 
    const tx = new Transaction();
    const coin = tx.splitCoins(tx.gas, )
    return (<>

    </>);
}
