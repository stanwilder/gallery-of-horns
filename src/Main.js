import React from 'react';
import Hornedbeast from './Hornedbeast.js';
// import Forms from './Forms.js';
import './Main.css';


class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <main>
        {this.props.filteredData.map((animal, idx) => {
          return (
            <div key={idx}>
              

              <Hornedbeast
                title={animal.title}
                image_url={animal.image_url}
                description={animal.description}
                openModal={this.props.openModal}
              />
              {/* <Forms */}
                {/* Data={this.state.filteredData} */}

              {/* /> */}
            </div>
          )
        }
        )
        }
      </main>
    )
  }
}
export default Main;
