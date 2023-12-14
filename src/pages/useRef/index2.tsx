import { useEffect, useRef, useState } from 'react'

interface DemoProps {}

export default function Demo2({}: DemoProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className='tutorial'>
      <input
        ref={inputRef}
        type='text'
        placeholder='Type something...'
      />
    </div>
  )
}
