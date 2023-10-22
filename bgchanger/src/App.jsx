import { useState } from "react"


function App() {
  const [color, setcolor] = useState("black")
  return (
    <div style={{ background: color }} className='w-100 h-screen'>
      <div className="bg-white fixed flex justify-center rounded-lg bottom-10 w-auto py-3 px-2 h-auto left-[50%] translate-x-[-50%]">
        <div className="bg-white flex align-center justify-evenly py-3 px-2  h-auto">
          <button onClick={() => setcolor("red")} className="bg-[red] py-1 px-3 text-[25px] font-bold rounded-lg shadow-lg text-center mx-2">orange</button>
          <button onClick={() => setcolor("yellow")} className="bg-[yellow] py-1 px-3 text-[25px] font-bold rounded-lg shadow-lg text-center mx-2">yellow</button>
          <button onClick={() => setcolor("green")} className="bg-[green] py-1 px-3 text-[25px] font-bold rounded-lg shadow-lg text-center mx-2">green</button>
          <button onClick={() => setcolor("purple")} className="bg-[purple] py-1 px-3 text-[25px] font-bold rounded-lg shadow-lg text-center mx-2">purple</button>
          <button onClick={() => setcolor("pink")} className="bg-[pink] py-1 px-3 text-[25px] font-bold rounded-lg shadow-lg text-center mx-2">pink</button>
          <button onClick={() => setcolor("brown")} className="bg-[brown] py-1 px-3 text-[25px] font-bold rounded-lg shadow-lg text-center mx-2">brown</button>
          <button onClick={() => setcolor("gray")} className="bg-[gray] py-1 px-3 text-[25px] font-bold rounded-lg shadow-lg text-center mx-2">gray</button>
          <button onClick={() => setcolor("white")} className="bg-[white] py-1 px-3 text-[25px] font-bold rounded-lg shadow-lg text-center mx-2">white</button>
          <button onClick={() => setcolor("black")} className="bg-[black] text-white py-1 px-3 text-[25px] font-bold rounded-lg shadow-lg text-center mx-2">black</button>
          <button onClick={() => setcolor("blue")} className="bg-[blue] py-1 px-3 text-[25px] font-bold rounded-lg shadow-lg text-center mx-2">blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
