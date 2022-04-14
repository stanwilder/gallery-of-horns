import React from 'react';
import Card from 'react-bootstrap/Card';
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
    render() {
        return (
            <Card>
                <Card.Img
                    src={this.props.image_url}
                    alt={this.props.description}
                    title={this.props.title}
                    onClick={this.handleLikes}
                />
                <Card.Body>
                    <Card.Title>
                        {this.props.title}
                    </Card.Title>
                </Card.Body>

<p>{this.props.description}</p>
<p>{this.state.likes}Like this? Click here!❤️</p>
            </Card>
            // help from Raul

        );
    }
}
export default Hornedbeast;

