import React from "react";
import Todolist from "./Todolist";
import {AddTaskAC, changeStatusAC, RemoveTaskAC} from "./reducers/TaskReducer";
import {setFilterAC} from "./reducers/FilterReducer";
import {connect} from "react-redux";

export type FilterValuesType = "all" | "active" | "completed";

let mapStateToProps = (state: any) => {
    return {
        tasks: state.tasks,
        filter:state.filter
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        removeTask: (id: string) => {
            dispatch(RemoveTaskAC(id))
        },
        addTask: (title: string) => {
            dispatch(AddTaskAC(title));
        },
        changeTaskStatus: (taskId: string, isDone: boolean) => {
            dispatch(changeStatusAC(taskId, isDone))
        },
        changeFilter: (value: FilterValuesType) => {
            dispatch(setFilterAC(value))
        }
    }
}

const AppContainer=connect(mapStateToProps,mapDispatchToProps)(Todolist)

export default AppContainer