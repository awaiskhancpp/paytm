import React from 'react'

export const Balance = ({value}) => {
  return (
    <div className="flex">
        <div className="font-bold text-lg">
            Your Balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value.toFixed(2)}
        </div>
    </div>
  )
}
