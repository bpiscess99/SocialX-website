import './App.css';

import {
  Navbar, 
  Header, 
  Download, 
  Faq, 
  Features, 
  Subscribe,
  Footer 
} from './component'

function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar/>
        <Header/>
      </header>
        <Features/>
        <Download/>
        <Subscribe/>
        <Faq/>
        <Footer/>
      
    </main>
  );
}

export default App;
