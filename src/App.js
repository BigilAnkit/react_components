import './App.css';
import Footer from './Footer';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { blog } from './Data/blog';



function App() {
  let headerInfo={
    email:"wondercement@gmail.com",
    phone:"38293843223"
  }
  return (
    <div className="App">
      {/* <Header email='ankitgehlot' phoneNumberinWords="zeroonezeroonejablagojabband"/> */}
      {/* props d-structuring */}
      {/* <Header headerInfo={headerInfo}/> */}
      
      <Header headerInfo={headerInfo}>
        {/* child props */}
        <h1>Welcome to Ankit Full Stack journiy</h1>
      </Header>
      <Footer/>
      <div className='text-danger'>
        HEllo Ankit
      </div>
      <Container>
        <Row>
          { blog.map((v,i)=>{
            return (
              <ProductItems pitems={v}  key={i}/>
            )
          })}
        
          
        </Row>
      </Container>
    </div>
  );
}

export default App;


function ProductItems({pitems}){
  return(
    <>
  <div className='col-lg-3 mb-4'>  <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>
          {pitems.title}
        </Card.Title>
        <Card.Text>
         {pitems.body}
        </Card.Text>
        <Button variant="primary">{pitems.id}</Button>
      </Card.Body>
    </Card> 
    </div>

    </>
  )
}