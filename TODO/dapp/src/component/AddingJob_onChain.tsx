import React from "react"
import { ConnectButton, useAccounts, useCurrentAccount } from "@mysten/dapp-kit";
import { Box, Button, Container, Flex, Heading } from "@radix-ui/themes";
import { WalletStatus } from "../WalletStatus";
import { Transaction } from "@mysten/sui/transactions";
import { PackageId, ModuleName } from "../OnChainInformation";

interface Props{
    job: String[];
    functionName: String,
}
export const AddingJob_onChain: React.FC<Props> = (props) => {
    const {job, functionName} = props;
    const tx = new Transaction();
    tx.moveCall({
        target: `${PackageId}::${ModuleName}::${functionName}`
    })
    return (<>
    
    </>);
}

