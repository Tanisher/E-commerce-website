let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'sport quantity=5',
        image: '1.png',
        price: 10
    },
    {
        id: 2,
        name: 'flat shoes quantity=0',
        image: '2.png',
        price: 5
    },
    {
        id: 3,
        name: 'mans shoes quantity=10',
        image: '3.png',
        price: 20
    },
    {
        id: 4,
        name: 'high heels quantity=7',
        image: '4.png',
        price: 12
    },
    {
        id: 5,
        name: 'ladies shoes quantity=5',
        image: '5.png',
        price: 32
    },
    {
        id: 6,
        name: 'ladies cargo pants',
        image: '6.png',
        price: 15
    },
    {
        id: 7,
        name: 'cargo pants',
        image: '7.png',
        price: 7
    },
    {
        id: 8,
        name: ' pants',
        image: '8.png',
        price: 1
    },
    {
        id: 9,
        name: 'all black',
        image: '9.png',
        price: 120
    },
    {
        id: 10,
        name: 'his birthday',
        image: '10.png',
        price: 15
    },
    {
        id: 11,
        name: 'complete suite',
        image: '11.png',
        price: 16
    },
    {
        id: 12,
        name: 'half suite',
        image: '12.png',
        price: 7
    },
    {
        id: 13,
        name: 'Gift set',
        image: '13.png',
        price: 20
    },
    {
        id: 14,
        name: 'prided to go shirt',
        image: '14.png',
        price: 12
    },
    {
        id: 15,
        name: 'perfect gift',
        image: '15.png',
        price: 10
    },
    {
        id: 16,
        name: 'her smile',
        image: '16.png',
        price: 22
    },
    {
        id: 17,
        name: 'dress',
        image: '17.png',
        price: 5
    },
    {
        id: 18,
        name: 'jewellery',
        image: '18.png',
        price: 1
    },
    {
        id: 19,
        name: 'rings',
        image: '19.png',
        price: 2
    },
    {
        id: 20,
        name: 'shinny',
        image: '20.png',
        price: 5
    },
    {
        id: 21,
        name: 'her speciality',
        image: '21.png',
        price: 19
    },
    {
        id: 22,
        name: 'hairstyle1',
        image: '22.png',
        price: 12
    },
    {
        id: 23,
        name: 'hairstyle 2',
        image: '23.png',
        price: 25
    },
    {
        id: 24,
        name: 'hairsyle 3',
        image: '24.png',
        price: 12
    },
    {
        id: 25,
        name: 'hairstyle 4',
        image: '25.png',
        price: 50
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}