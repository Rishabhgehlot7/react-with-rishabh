import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className='w-full h-screen bg-black'>
      <div className='w-[500px] h-[200px] fixed left-[50%] translate-x-[-50%] top-[150px] bg-slate-800 rounded-lg '>
        <h1 className='text-center font-bold text-white text-[50px]'>Password Generator</h1>
        <div className='flex justify-center'>
          <input type="text" className=' rounded-tl-lg pl-5 text-[18px] rounded-bl-lg w-[80%] outline-none' value={password} ref={passwordRef} readOnly name="" id="" />
          <button onClick={copyPasswordToClipboard} className=' bg-blue-400 text-black font-bold rounded-tr-lg rounded-br-lg p-4'>Copy</button>
        </div>
        <div className='flex justify-center pt-5'>
          <input type="range" value={length} onChange={(e) => { setLength(e.target.value) }} className='cursor-pointer pr-4 ' name="range" max={'20'} min={'6'} id="range" />
          <label htmlFor="range" className='pl-1 cursor-pointer pr-4 text-[white]'>lenght</label>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {
            setNumberAllowed((prev) => !prev);
          }} className='pl-5 cursor-pointer' name="number" id="number" />
          <label htmlFor="number" className='pr-4 cursor-pointer pl-1 text-[white]'>Numbers</label>
          <input type="checkbox" onChange={() => {
            setCharAllowed((prev) => !prev)
          }} defaultChecked={charAllowed} className='pr-4 cursor-pointer bg-blue-200' name="char" id="char" />
          <label htmlFor="char" className='pr-4 pl-1  cursor-pointer text-[white]'>Charectors</label>
        </div>
      </div>
    </div>
  )
}

export default App
