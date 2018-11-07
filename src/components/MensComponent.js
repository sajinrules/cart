import React from 'react';



class MensComponent extends React.Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    const width = {
      width: '80%'
    };
    return (
      <div className="content container">
        <h3>Mens</h3>
        <div>
          <div className="product">
            <span className="offer">-20%</span>
            <img className="product-image" src="https://image.made-in-china.com/2f0j00dsfQOZLEZbzo/The-Wholesale-Mens-Dress-Shirts-Models-with-Mens-Casual-Shirts-Men-Wash-and-Wear.jpg" />
          </div>
          <div>
            <div class="ratings">
              <div class="empty-stars"></div>
              <div class="full-stars" style={width}></div>
            </div>
            <div>Brand Name</div>
            <div>
              <span className="new-price">$16.00</span>
              <span className="old-price">$20.00</span>
            </div>
          </div>
          
        </div>
        <div>

        </div>
      </div>

    )
  }
}

export default MensComponent
