import React from "react";
import Button from "./Button";
import AgentDisplay from "./AgentDisplay";
import {useState} from 'react'

function AgentInput({value, onChange, buttonAction, label}) {

    return (
                
        <div className={"w-1/2 border-2 mx-auto p-5 mt-20"}>
            <label className={"block text-sm font-medium text-gray-700"}>Agent ID:</label>
            <input type={"text"} value={value} onChange={onChange}
                         className={"shadow-sm border-gray-300 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"}
            />
            <Button onClick={buttonAction} label={label}/>
            <br></br>
        </div>
    );
}

export default AgentInput;