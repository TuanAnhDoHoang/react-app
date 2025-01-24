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
public fun create_new_todoList(jobName: vector<String>, ctx: &mut TxContext): ToDoList{
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
public fun remove_job_from_list(todoList: &mut ToDoList, index: u64){
    vector::remove(&mut todoList.jobName, index);
}