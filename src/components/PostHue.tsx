import { useState } from "react";


interface Props {
  addHue: (hex_code: string) => void;
}

const PostHue = (props: Props) => {
  const [hex_code, setColor] = useState('');

  return (
    <div className='flex flex-row p-4 justify-center items-center'> {/* Adjusted for centering */}

      {/* Set both width and height to the same value to create a square */}
      <div className='flex flex-col justify-between items-center p-4 rounded shadow-xl border border-gray-300' 
           style={{ backgroundColor: hex_code, width: '300px', height: '300px' }}> {/* Adjust the size as needed */}
        
        <input 
          type="text" 
          name="hue" 
          id="hue" 
          placeholder="Enter a color code..." 
          onChange={(event) => setColor(event.target.value)} 
          className="w-3/4 text-lg p-2 rounded border border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-slate-300"
          style={{ transition: 'border 0.3s ease-in-out' }}
        />

        <button 
          onClick={() => props.addHue(hex_code)} 
          className="w-3/4 bg-white text-cyan-950 font-semibold py-2 px-4 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-slate-400"
          style={{ transition: 'background-color 0.2s' }}>Post</button>
      </div>

      

    </div>
  )
}

export default PostHue;
