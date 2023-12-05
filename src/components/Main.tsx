import Hue from './Hue'
import PostHue from './PostHue'
import Title from './Title'

interface HueObject {
    hex_code: string,
    username: string,
    likes: number
}
interface Props {
    hues: HueObject[],
    addHue: (color:string) => void
}

const Main = ({hues, addHue} : Props) => {
  return (
    <div className='flex flex-col flex-grow bg-slate-800'>
      <Title></Title>
      <div className="flex flex-wrap w-full justify-left gap-8 overflow-y-auto m-3">
          <div className='grid grid-cols-3 gap-6 overflow-y-auto'>
      

        <PostHue addHue={addHue}/>


        {hues.map( (hue) => ( 
            
            <Hue hue={hue}/>
        ))}

        </div>
      </div>
    </div>
  )
}

export default Main;