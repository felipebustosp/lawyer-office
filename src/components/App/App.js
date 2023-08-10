import Experience from '../Experience/Experience';
import Navbar from '../Navbar/Navbar';
import Presentation from '../Presentation/Presentation';
import Contact from '../contact/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className='App-main'>
        <Presentation />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;

