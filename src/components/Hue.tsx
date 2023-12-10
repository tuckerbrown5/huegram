import { FaHeart } from "react-icons/fa";

import HueObject from "../HueObject";

interface Props {
  hue: HueObject;
  toggleLike?: (id?:number)=> void
}

const Hue = ({hue, toggleLike}: Props) => {
  const getTextColor = (hexCode: string) => {
    const r_num = parseInt(hexCode.slice(1, 3), 16);
    const g_num = parseInt(hexCode.slice(3, 5), 16);
    const b_num = parseInt(hexCode.slice(5, 7), 16);

    const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;

    return hue_intensity > 186 ? "#000000" : "#FFFFFF";
  };

  const textColor = getTextColor(hue.color);

  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-center items-center mx-0.5 my-0.5 relative"
      style={{ backgroundColor: hue.color, color: textColor }}
    >
      <button
        onClick={() => toggleLike && toggleLike(hue.id)}
      >
        
        <FaHeart
        className= {hue.isLiked ? "text-red-600 text-2xl": "text-2xl"}
        />

      </button>

      <div className="flex flex-col justify-center items-center flex-grow">
        <p className="text-2xl opacity-80">{hue.color}</p>
      </div>

      <div className="bg-black text-white flex w-full justify-center p-3 rounded-b-2xl">
        <p className="text-xl">{hue.username}</p>
      </div>
    </div>
  );
};

export default Hue;
