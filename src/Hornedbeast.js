import {Button, Card} from 'react-bootstrap';
import React from 'react';
import './Hornedbeast.css';

class Hornedbeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
    }
    handleLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        });

    }
    handelModal = () => {
        this.props.openModal(this.props.description, this.props.image_url, this.props.title)
    }
    
    render() {
        return (
            <Card className="card">
                <Card.Img
                    src={this.props.image_url}
                    alt={this.props.description}
                    title={this.props.title}
                    onClick={this.handelModal}
                    />
                <Card.Body>
                    <Card.Title>
                        {this.props.title}
                    </Card.Title>
                    <Card.Text>
                    {this.state.likes}Like this? Click here!❤️
                    </Card.Text>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button
                    onClick={this.handleLikes}>
                        Click ME
                    </Button>
                </Card.Body>


            </Card>
            // help from Raul

        );
    }
}
export default Hornedbeast;