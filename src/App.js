import './App.css';
import { Brand, CTA, Navbar} from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGpt3} from './containers';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
