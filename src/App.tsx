import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'

function App() {

  return (
    <div className='flex bg-slate-800 h-screen'>
      <Menu />

      <Main />

      <Profile />
    </div>
  )
}

export default App
