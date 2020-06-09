import React from 'react'

function Button(props) {
    return (
        <button class="bg-white shadow-md hover:bg-gray-100 text-gray-800 font-semibold py-2 px-5 border border-gray-400 rounded shadow">
            {props.children}
        </button>
    )
}

export default Button;
