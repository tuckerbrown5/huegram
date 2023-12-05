interface HueObject {
  hex_code: string;
  username: string;
  likes: number;
}

interface Props {
  hue: HueObject;
}

const Hue = (props: Props) => {
  return (
    // Assuming the margin is to be adjusted horizontally, using mx-2 as an example
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between mx-0.5 my-0.5"
      style={{ backgroundColor: props.hue.hex_code }}
    >
      <p className="text-white text-2xl opacity-80">{props.hue.hex_code}</p>

      <div className="bg-black text-white flex w-full justify-center p-3 rounded-b-2xl">
        <p className="text-xl">{props.hue.username}</p>
      </div>
    </div>
  );
};

export default Hue;
