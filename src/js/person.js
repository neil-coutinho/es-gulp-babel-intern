import Cart from './cart.js';

class Person extends Cart{
  constructor(){
    super();
  }

  print(){
    console.log(this.items);
  }
}

export default Person;
