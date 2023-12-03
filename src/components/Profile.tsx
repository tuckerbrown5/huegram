import kaylee from '/kaylee.jpg'

const Profile = () => {
  return (
    <div className='fixed top-0 right-0 flex flex-col border-2 p-4 items-center text-white'>

        {/* Styled h1 tag */}
        <h1 className="text-2xl font-bold">@tbrown</h1>

        <div className="flex w-1/2 justify-center">
            <img src={kaylee} alt="" className='rounded-full'/>
        </div>

    </div>
  )
}

export default Profile;




