import { useState } from "react";


interface Props { 
  searchHues: (color: string) => void;
}

const Title = ({searchHues}:Props) => {
  const [colors, setColors] = useState("");


  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-8 shadow-lg px-6">
      <h1 className="text-6xl font-black text-white tracking-wide">
        #HUEGRAM
      </h1>
      <input
        type="text"
        placeholder="Search..."
        className="rounded-lg p-2 w-1/4 text-slate-800"
        style={{ maxWidth: '300px' }} 
        onChange={(e) => setColors(e.target.value)} />
        <a 
        href="#"
        onClick={()=> searchHues(colors)}>BUTTON</a>

    </div>
  )
}

export default Title;
