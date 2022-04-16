import './App.css';
import React from 'react';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import Forms from './Forms.js';
// import { Modal } from 'react-bootstrap';



class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
    showModal: false,
    title: '',
    image_url: '',
    description: '',
    name: '',
    howToSort: '',
    filteredData: data, 
      
  };
}

openModal = (description, image, title) => {
  this.setState({
    showModal: true,
    title: title,
    image_url: image,
    description: description

  })
}

hideModal = () => {
  this.setState({
    showModal: false
});
}      
      
  render() {
    return(
      <>

      <Header/>
      <Main
        data={data} 
        // filteredData={data}
        openModal={this.openModal}
      />
      <Footer/>
      <SelectedBeast
        title={this.state.title}
        image_url={this.state.image_url}
        description={this.state.description}
        hideModal={this.hideModal} 
        showModal={this.state.showModal}
        />
        <Forms>
        
        </Forms>
      </>

  ); 
}

}

export default App;
