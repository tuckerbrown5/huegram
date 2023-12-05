//import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'
import axios from 'axios'


interface Hues {
  hex_code: string;
  username: string;
  likes: number;
}

function App() {

  const [hues, setHues] = useState<Hues[]>([]);

  const [currentUser] = useState({
    username: "kavery",
    likes: 58,
    hues: [ {id:36, color:'#ffa510', username:"kavery", likes: 15}]
  });

  useEffect(() => {
    axios
      .get<Hues[]>("https://greenegunnar.pythonanywhere.com/api/hues/")
      .then((result) => setHues(result.data));
  }, []);

  const addNewHue = (hex_code:string ) => 
  {
      const newHue = {hex_code, username: currentUser.username, id: length+1, likes:0, isLiked: false};
      setHues( [newHue, ...hues ] );
  }

  return (
    <div className='flex bg-slate-800 h-screen'>
      {/* <Menu /> */}

      <Main hues={hues} addHue = {addNewHue} />

      <Profile />
    </div>
  )
}

export default App
