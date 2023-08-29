import React from 'react'
import {CardGroup, CardImg , Button, Card, CardBody, CardText,  } from 'reactstrap';

function Cards() {
  return (
    <div>
     <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://assetscdn1.paytm.com/images/cinema/Bhola-Shankar-705x750-6c2e9a30-2afd-11ee-b34d-05fa8644d6a7.jpg?format=webp"
      top
      width="50%"
    />
    <CardBody>   
      <CardText>
       <h4>Bhola Shankar</h4>
       <p>U/A</p>
       <ul><li>Telugu</li></ul>
      </CardText>
      <Button>
       Book Ticket
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://assetscdn1.paytm.com/images/cinema/Jailer-705x750-d6366ef0-2b00-11ee-a540-ef1242eadacd.jpg?format=webp"
      top
      width="50%"
    />
    <CardBody>
        <CardText>
        <h4>Jailer</h4>
       <p>U/A</p>
       <ul><li>Telugu</li></ul>
      </CardText>
      <Button>
       Book Ticket
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://assetscdn1.paytm.com/images/cinema/BRO---705x750-87368a40-2913-11ee-9529-c5ea4c63a555.jpg?format=webp"
      top
      width="100px"
    />
    <CardBody>     
      <CardText>
      <h4>Jailer</h4>
       <p>U/A</p>
       <ul><li>Telugu</li></ul>
      </CardText>
      <Button>
       Book Ticket
      </Button>
    </CardBody>
  </Card>
</CardGroup>
<Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    
  </CardBody>
  <img
    alt="Card cap"
    src="https://assetscdn1.paytm.com/images/cinema/The-Meg-2--The-Trench-705x750-Recovered-63b5cda0-2c57-11ee-b121-0f19bf020313.jpg?format=webp"
    width="100%"
  />
  <CardBody>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <CardLink href="#">
      Card Link
    </CardLink>
    </CardBody>
</Card>
<Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    </CardBody>
  <img
    alt="Card cap"
    src="https://picsum.photos/318/180"
    width="100%"
  />
  <CardBody>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
      <CardLink href="#">
    Book Ticket
    </CardLink>
  </CardBody>
</Card>
<Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>    
  </CardBody>
  <img
    alt="Card cap"
    src="https://picsum.photos/318/180"
    width="100%"
  />
  <CardBody>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    
    <CardLink href="#">
      Book Ticket
    </CardLink>
  </CardBody>
</Card>
    </div>
  )
}

export default Cards;

// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Cards from './cards';
// function App() {
//   return (
//       <Cards></Cards>
//   );
// }

// export default App;

