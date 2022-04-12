import App from './App.js';
import React from 'react';
class Hornedbeast extends React.Component
{
    render()
    {
        return(
            <>
            
            <h2>{this.props.title}</h2>
            <img src={this.props.imageUrl} alt='ImageURL Tag' title={this.props.title}></img>
            {/* help from Raul */}
            </>
        );
    }
}
export default Hornedbeast;