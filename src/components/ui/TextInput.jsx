import React from 'react'

function TextInput({props}) {
  return (
    <>
    <label className="block text-sm font-normal text-gray-700">
            {props.label}
            <input
              className="mt-2 w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 outline-none transition focus:border-red-500 focus:bg-white"
              type={props.type}
              name={props.name}
              placeholder={props.placeholder}
            />
    </label>
    </>
    
  )
}

export default TextInput