const Title = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-8 shadow-lg px-6">
      <h1 className="text-6xl font-black text-white tracking-wide">
        #HUEGRAM
      </h1>
      <input
        type="text"
        placeholder="Search..."
        className="rounded-lg p-2 w-1/4 text-slate-800"
        style={{ maxWidth: '300px' }} // Optional: to ensure it doesn't get too large on wider screens
      />
    </div>
  )
};

export default Title;
