import React from "react"
import { ConnectButton } from "@mysten/dapp-kit";
import { Box, Button, Container, Flex, Heading } from "@radix-ui/themes";
import { WalletStatus } from "../WalletStatus";
import { PackageId, ModuleName } from "../OnChainInformation";
interface Props {
    index: number[],
    functionName: String,
}
export const RemoveJob_onChain: React.FC<Props> = (props) => {
    const {index, functionName} = props;
    return (<>
     
    </>);
}