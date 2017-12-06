class Cart{
  constructor(){
    // if(!name) {
    //   throw new Error('name parameter is missing');
    // }
    this.items = [];
  }

  getItems(){
    return this.items;
  }
}

export default Cart;
