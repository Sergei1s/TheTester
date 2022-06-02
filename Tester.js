import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import TestingCard from '../Components/TestingCard';
import Slider from '../Components/Slider';
import Header from '../Components/Header';
import ProgressShower from '../Components/ProgressShower';
import { Container, Card, CardImg, CardProps, CardGroup,CarouselItem, Col, Row } from 'react-bootstrap';

export const Tester =() => (

    <Container>
        <div class="mx-auto">
        <Header/>
        <ProgressShower/>

        <Container className='mt-4 mb-5 px-5 text-center'>
                <Row >
                    <Col >
                        <Button variant="secondary" size="md" >Вернуться в меню</Button>
                    </Col>
                    <Col >
                        <Button variant="primary" size="md" >Завершить тест</Button>{' '}
                    </Col>
                </Row>
        </Container>

        <TestingCard/>
        
        <div class="text-center mt-4  mb-5">
        <Button variant="primary" className="mt-4  mb-5" size="lg">
            Завершить работу
        </Button>{' '}
        </div>
        
        
        </div>
    </Container>
    
)