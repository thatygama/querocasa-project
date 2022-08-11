import { Button, Card } from "react-bootstrap";

export interface ICardImovelProps {
    title: string,
    body: string
}

const CardImovel: React.FunctionComponent<ICardImovelProps> = (props) => {
    return (
        <Card style={{ width: '18rem', marginTop: '10px' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.body}
            </Card.Text>
            <Button variant="secondary">Quero!</Button>
        </Card.Body>
        </Card>
    );
}

export default CardImovel;