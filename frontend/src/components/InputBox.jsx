import React from 'react'

export const InputBox = ({onChange,label,placeholder,value}) => {
  return (
    <div>
      <div className='text-sm font-medium text-left py-2'>
        {label}
      </div>
      <input placeholder={placeholder} onChange={onChange} value={value} className='w-full px-2 py-1 border rounded border-slate-200' />
    </div>
  )
}
