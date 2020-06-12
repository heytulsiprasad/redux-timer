import React from "react";

function Label(props) {
    return (
        <div class="w-1/2 mx-auto flex flex-row justify-center text-gray-700 my-3 text-center bg-gray-400 px-4 py-2 rounded-md">
            <span>{props.lapTime}</span>
        </div>
    );
}

export default Label;
