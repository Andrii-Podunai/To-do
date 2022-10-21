import React from 'react'
import { BsCheck } from 'react-icons/bs'
import cn from 'classnames'

const Check = ({isCompleted}) => {
  return (
    <div className={cn(`mr-3 border-2 rounded-md border-orange-400 flex items-center justify-center   w-5 h-5`, {
      "bg-orange-400" : isCompleted,
    })}>
        {isCompleted && 
            <BsCheck size={24} className = "text-gray-900" />
        }
    </div>
  )
}

export default Check