import React from 'react';
import Hornedbeast from './Hornedbeast.js';

class Main extends React.Component {
  render(){
    let beast = [];
    this.props.data.map((animal, idx) => {
      return beast.push(
        <Hornedbeast
        title = {animal.title}
        image_url = {animal.image_url}
        key = {idx}
        description = {animal.description
        }
        />
        )
      });
      return(
        <main>
          {beast} 
        </main>
      );

}
}
export default Main;
