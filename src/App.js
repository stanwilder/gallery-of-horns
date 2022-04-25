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
      filteredData: data

    };
  }

  openModal = (description, image, title) => {
    // console.log(description)
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
  handleSelect = (e) => {
    let horns = e.target.value;
    // console.log(horns)
    if (horns === 'two') {
      let filtered = data.filter(number => number.horns % 2 === 0)
      this.setState({ filteredData: filtered });
    } else if (horns === 'one') {
      let filtered = data.filter(number => number.horns % 2 !== 0);
      // console.log(filtered)
      this.setState({ filteredData: filtered });
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    let choice = event.target.select.value;
    this.setState({
      name: event.target.name.value,
      howToSort: choice
    })
  }

  render() {
    return (
      <>

        <Header />
        <Forms
          handleSubmit={this.handleSubmit}
          handleSelect={this.handleSelect}
        />
        <Main
          data={data}
          filteredData={this.state.filteredData}
          openModal={this.openModal}

        />
        <Footer />
        <SelectedBeast
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          hideModal={this.hideModal}
          showModal={this.state.showModal}
        />


      </>

    );
  }

}

export default App;
