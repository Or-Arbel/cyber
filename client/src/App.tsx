import './App.css'
import Agenda from './components/pages/Agenda/Agenda'
import Chat from './components/pages/Chat/Chat'
import Files from './components/pages/Files/Files'
import Gallery from './components/pages/Gallery/Gallery'
import Participants from './components/pages/Participants/Participants'

function App() {

  return (
    <>
      <h1>כנס סייבר</h1>
      <Agenda />
      <Participants />
      <Chat />
      <Files />
      <Gallery/>
    
    </>
  )
}

export default App
