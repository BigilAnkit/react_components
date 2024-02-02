import './App.css';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Card/>
    </div>
  );
}

export default App;


function Card(){
  return(
    <h1 className='cardItems'>Card is here</h1>
  );
}