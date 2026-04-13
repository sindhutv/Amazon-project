export const orders = JSON.parse (localStorage.getItem('orders')) || [];

export function addOrder(order){
  orders.unshift(order)
  saveToStorage(); //this will add the latest iorder on top
}

function saveToStorage(){
  localStorage.setItem('orders',JSON.stringify(orders));
}