/*
/// Module: todo_blockchain
*/

// For Move coding conventions, see
// https://docs.sui.io/concepts/sui-move-concepts/conventions
module todo_blockchain::todo_blockchain;
use std::string::String;

public struct ToDoList has key, store{
    id: UID,
    jobName: vector<String>,
}
public fun create_new_todoList(ctx: &mut TxContext): ToDoList{
    let jobName:vector<String> = vector::empty();
    ToDoList{
        id: object::new(ctx),
        jobName,
    }
}
public fun add_to_list(todoList: &mut ToDoList, job: vector<String>){
    let mut i: u64 = 0;
    while(i < job.length()){
        vector::push_back(&mut todoList.jobName, job[i]);
        i = i + 1;
    }
}
#[error(code = 0)]
const EIndexOutOfBoud: u64 = 0;
const EEmptyList: u64 = 1;
public fun remove_job_from_list(todoList: &mut ToDoList, sortedRemoveIndexes: vector<u64>){
    //Thiết kế event cho các lỗi 
    assert!(sortedRemoveIndexes != vector::empty(), EEmptyList);
    assert!(sortedRemoveIndexes.length() > 0, EEmptyList);
    assert!(sortedRemoveIndexes[0] >= 0, EIndexOutOfBoud);
    assert!(sortedRemoveIndexes[sortedRemoveIndexes.length() - 1] <= todoList.jobName.length(), EIndexOutOfBoud);
    let mut tempVec: vector<String> = vector::empty();
    let mut index = 0;
    let mut jobIndex = 0;
    let jobListSize = todoList.jobName.length();

    while(jobIndex < jobListSize){
        if(index < sortedRemoveIndexes.length() && sortedRemoveIndexes[index] == jobIndex){
            index = index + 1;
        }
        else{
            tempVec.push_back(todoList.jobName[jobIndex]);
        };
        jobIndex = jobIndex + 1;
    };
    todoList.jobName = tempVec;
}
// #[test_only]
// use std::debug;
// #[test]
// fun test_function(): ToDoList{
//    let mut ctx = tx_context::dummy();
//    let mut todoList = create_new_todoList(&mut ctx);
//    let jobList: vector<String> = vector::empty();
//    vector::push_back(&mut todoList.jobName, b"cooking".to_string());
//    vector::push_back(&mut todoList.jobName, b"home work".to_string());
//    vector::push_back(&mut todoList.jobName, b"house chorce".to_string());
//    vector::push_back(&mut todoList.jobName, b"code".to_string());
//    vector::push_back(&mut todoList.jobName, b"date".to_string());
//    add_to_list(&mut todoList, jobList);
   
//    let mut index = 0;
//    while(index < todoList.jobName.length()){
//        debug::print(&todoList.jobName[index]);
//        index = index + 1;
//    };
//    index = 0;

//    let mut removeList: vector<u64> = vector::empty();

//    removeList.push_back(1);
//    removeList.push_back(10);
//    remove_job_from_list(&mut todoList, removeList);

//    debug::print(&b"Removing from list".to_string());
//    while(index < todoList.jobName.length()){
//        debug::print(&todoList.jobName[index]);
//        index = index + 1;
//    };
//    debug::print_stack_trace();
//    todoList
// }