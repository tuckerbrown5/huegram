import { useState } from "react";

interface Props {
  searchHues: (color: string) => void;
}

const Title = ({ searchHues }: Props) => {
  const [colors, setColors] = useState("");

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    searchHues(colors);
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-8 shadow-lg px-6">
      <h1 className="text-6xl font-black text-white tracking-wide">
        #HUEGRAM
      </h1>
      <div className="relative w-1/4" style={{ maxWidth: '300px' }}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
          required
          onChange={(e) => setColors(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Title;
