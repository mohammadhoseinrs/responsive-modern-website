
import './App.css';
import {Footer , Header , Blog  ,WhatGPT3 , Features} from './container'
import {Cta , Navbar ,Brand} from './components'
function App() {
  return (
    <div className='app'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>  
        <Brand />
        <WhatGPT3 />
        <Features />
        <Cta />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;
