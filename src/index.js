import React from 'react';
import ReactDOM from 'react-dom';

// const hello = <h1>Helle reactjs</h1>;
// const product = 'product 1';
const product = {
      name: 'product 1',
      price: 20,
      status: true
}

ReactDOM.render(
  //<h1> Hello Reactjs </h1>,
  product.name.price,
  document.getElementById('root')
);
//tất cả phần tử được render ra DOM đều là đối tượng của React tạo ra
