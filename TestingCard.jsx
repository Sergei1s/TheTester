import { Carousel } from 'bootstrap';
import { Container, Card, CardImg, CardProps, CardGroup,CarouselItem, Col, Row, FormGroup } from 'react-bootstrap';
import Slider from './Slider';
import Answer from './Answer';

const TestingCard = () => {
    return (

    <Container >
        <div class="d-block w-75 mx-auto mt-4">
            <Card >
                    <Card.Body >
                        <div  class="mx-3 pt-3 mb-4">
                            <div class="px-4 pt-1">
                                <Card.Title>
                                    <h3 class="mb-3 ">Вопрос 1</h3>
                                </Card.Title>
                                
                                <Slider/>
                            </div>
                           
                            <div class="pt-4 mx-4">
                                <Card.Text  className='blockquote' >
                                    Текст вопроса - Какой тип/вид класс тестирования имеет смысл автоматизировать?
                                </Card.Text>
                            
                                <Answer/>
                                <Answer/>
                                <Answer/>
                                
                                
                            </div>
                        </div>
                    </Card.Body>
                </Card>
        </div>
      
        
    </Container>
   
    );
    }
    
    export default TestingCard;

    