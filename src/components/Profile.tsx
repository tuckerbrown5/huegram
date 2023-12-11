import HueObject from '../HueObject';
import './Palette.css';
import { useState } from 'react';
interface Props {
  hues: HueObject[];
}


const Profile = ({hues}: Props) => {
  const newHues = hues.filter((hue) => hue.username === "tbrown");
  const [likes]= useState(0);
  const likeypoos = newHues.map((hue)=> (hue.isLiked ? likes + 1 : likes));
  const jynx = likeypoos.reduce((acc, curr) => acc + curr, 0);


  return (
    <div className='fixed top-32 right-0 bottom-1 flex flex-col p-4 items-center text-white w-1/6'>


        <div className="palette">
          {newHues.map((hue) => (
            <div
              className="color"
              style={{ backgroundColor: hue.color }}
            ></div>
          ))}
        </div>

        <h1 className="text-2xl font-bold">@tbrown</h1>

        <div className="text-center mt-6">
          <p className="font-semibold text-4xl">Likes:</p>
          <p className="text-3xl mb-8">{jynx}</p> 
        </div>

        <div className="text-center">
          <p className="font-semibold text-4xl">Hues:</p>
          <p className="text-3xl mb-4">{newHues.length}</p>
        </div>

    </div>
  );
}

export default Profile;
