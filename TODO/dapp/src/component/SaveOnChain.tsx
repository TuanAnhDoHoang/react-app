import { AddingJob_onChain } from "./AddingJob_onChain"
import { RemoveJob_onChain } from "./RemoveJob_onChain"
interface Props{
    AddingList: String[],
    RemoveList: number[],
}
export const SaveOnChain: React.FC<Props> = (props) => {
    const {AddingList, RemoveList} = props;

    return (<>
        <RemoveJob_onChain
            index={RemoveList}
            functionName="remove_job_from_list"
        />
        <AddingJob_onChain
            job={AddingList}
            functionName="add_to_list"
        /> 
    </>);
}