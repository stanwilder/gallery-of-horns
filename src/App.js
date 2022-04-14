import './App.css';
import React from 'react';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';


class App extends React.Component {
  render() {
    return(
      <>

      <Header></Header>
      <Main>
        data={data}
      </Main>
        <Modal>
          show={this}
        </Modal>
      <SelectedBeast>     
      </SelectedBeast>
      <Footer></Footer>

      
      
    
      </>
  ); 
}
}

export default App;
