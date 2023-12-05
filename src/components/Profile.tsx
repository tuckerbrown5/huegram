import kaylee from '/kaylee.jpg';

const likes = 120; // Example number of likes
const huesPosted = 5; // Example number of hues posted

const Profile = () => {
  return (
    <div className='fixed top-32 right-0 bottom-1 flex flex-col border-2 p-1 items-center text-white'>

        <h1 className="text-2xl font-bold">@tbrown</h1>

        <div className="flex w-1/2 justify-center">
            <img src={kaylee} alt="Profile" className='rounded-full'/>
        </div>

        <div className="text-center mt-6">
          <p className="font-semibold text-4xl">Likes:</p>
          <p className="text-3xl mb-4">{likes}</p>
        </div>

        <div className="text-center">
          <p className="font-semibold text-4xl">Hues:</p>
          <p className="text-3xl">{huesPosted}</p>
        </div>

    </div>
  );
}

export default Profile;
