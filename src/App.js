import './styles/App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
   <div className='relative'>
    <Navbar/>
    <Form/>
    <Footer/>
   </div>
  );
}

export default App;
