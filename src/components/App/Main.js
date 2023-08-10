import Experience from '../Experience/Experience';
import Navbar from '../Navbar/Navbar';
import Presentation from '../Presentation/Presentation';
import Contact from '../contact/Contact';

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <Navbar />
      </header>
      <main className='Main-main'>
        <Presentation />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default Main;

