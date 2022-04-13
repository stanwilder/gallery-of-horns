import React from 'react';
import Hornedbeast from './Hornedbeast.js';
import data from './data.json';
class Main extends React.Component {
  render(){
    let beast = [];
    data.forEach((animal, idx) => {
      beast.push(
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
