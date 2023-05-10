import { useRef } from 'react';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Navdetail from './Pages/Navbar/Navdetails';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Github from './components/Github/Github';
import { Contact } from './components/Contacts/Contacts';


function App() {
  let home = useRef();
  let about = useRef();
  let skill = useRef();
  let contact = useRef();
  let project = useRef(); 
  return (
    <div className="App">
      <div className="container"></div>
      <Navbar />
      <Navdetail  home={home} about={about} skill={skill} contact={contact} project={project} />
      <Home home={home}/>
      <About about={about} />
      <Skills skill={skill} />
      <Github />
      <Contact contact ={contact} />
    </div>
  );
}

export default App;