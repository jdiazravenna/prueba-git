import React from 'react'

// export const ToDoHeader = (props) => {
export const ToDoHeader = ({title}) => { //destructuracion de props
  return (
    <h1 className="text-2xl font-bold text-center">{title}</h1>
  )
}

export default ToDoHeader