//all data store in array
const cart = [];
// products-cart

//displayProduct function create
function displayProduct() {
    //inilize totall price 0
    let totalPrice = 0;
    //total product id access
    const totalProducts = document.getElementById("total-products");
    //remove from html tag
    totalProducts.innerText = cart.length;

    //total product table body id access
    const cartContainer = document.getElementById("products-cart");

    //remove from extra line
    cartContainer.textContent = '';

    for (let i = 0; i < cart.length; i++) {
        //sum all product calculation 
        totalPrice += cart[i].pdPrice;

        //it show table body pdname and price.
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${cart[i].pdName}</td>
        <td>${cart[i].pdPrice}</td>
        `;

        //call appenChild
        cartContainer.appendChild(tr);
    }

    //it show table table total caluclation 
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th></th>
    <td>Total Price</td>
    <td>${totalPrice}</td>
    `;
    //call appenChild
    cartContainer.appendChild(tr);
}

//function call element and productname, price
function addToCart(element) {
    const pdName = element.parentNode.parentNode.children[0].innerText;
    const pdPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    //object create

    const pd = {
        pdName: pdName,
        pdPrice: parseInt(pdPrice)
    }

    //push all element
    cart.push(pd);

    //display show element.
    displayProduct();
}