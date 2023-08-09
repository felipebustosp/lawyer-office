import Experience from '../Experience/Experience';
import Navbar from '../Navbar/Navbar';
import Presentation from '../Presentation/Presentation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className='App-main'>
        <Presentation />
        <Experience />
      </main>
    </div>
  );
}

export default App;

