import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import image1 from '../img/iphone-12-blue.png';
import image2 from '../img/iphone-12-green.png';
import image3 from '../img/iphone-12-pro.png';
function GroupExample() {
  return (
    
    <CardGroup >

      <Card >
        <Card.Img variant="top" src={image1}/>
        <Card.Body text-center>
          <Card.Title >Apple Iphone 11</Card.Title>
          <Card.Text>
            $810-$910
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">INFO</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>Apple Iphone 11</Card.Title>
          <Card.Text>
          $810-$910
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">INFO</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title>Apple Iphone 11</Card.Title>
          <Card.Text>
          $810-$910
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">INFO</Button>
          
        </Card.Footer>
      </Card>
    </CardGroup>
   
  );
}

export default GroupExample;



