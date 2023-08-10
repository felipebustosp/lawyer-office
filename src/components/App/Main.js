import Experience from '../Experience/Experience';
import Navbar from '../Navbar/Navbar';
import Presentation from '../Presentation/Presentation';
import Contact from '../Contact/Contact';
import { Route, Routes } from 'react-router-dom';

function Main() {


  return (
      <div className="Main">
        <header className="Main-header">
          <Navbar />
        </header> 
        <main className='Main-main'>
          <Routes>
            <Route path='/' element={<Presentation />}></Route>
            <Route path='/experience' element={<Experience />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </main>
      </div>

  );
}

export default Main;

