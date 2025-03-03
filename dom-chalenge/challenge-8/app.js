/**
 * Write your challenge solution here
 */
const cartItems = document.getElementById('cart-items')
const emptycart = document.getElementById('emptycart')
const cartTotal = document.getElementById('cart-total')

let cartArray = []

function addToCart(productName, price) {
    productObj = {
        productName: productName,
        price: price,
        quantity: 1,
        totalPrice: price.toFixed(2)
    }
    let cart = cartArray.find((item) => item.productName === productObj.productName)

    if (cart) {
        cart.quantity += 1
        cart.totalPrice = (cart.quantity * cart.price).toFixed(2);
    } else {
        cartArray.push(productObj)
    }
    printShopingCart();
    updateCartVisibility();
}

function printShopingCart() {
    let string = '';
    cartArray.forEach((item, i) => {
        string += `
          <div class="quantity-controls" data-index="${i}">
            <div class="cart-name">
              <p>${item.productName}</p>
            </div>
            <div class="controlsBtn">
              <button class="minus">-</button>
              <p>${item.quantity}</p>
              <button class="plus">+</button>
              <p id="price">$${item.totalPrice}</p>
              <button class="delete" >delete</button>
            </div>
          </div>
        `
    })

    let totalPrice = cartArray.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)
    cartTotal.innerHTML = `<h3>Total:$${totalPrice}</h3>`
    cartItems.innerHTML = string;

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', function () {
            cartArray.splice(this.dataset.index, 1)
            printShopingCart();
            updateCartVisibility();
        })
    })
    document.querySelectorAll('.minus').forEach(button => {
        button.addEventListener('click', function () {
            cart = cartArray.find((item) => item.productName === productObj.productName)
            if (cart) {
                if (cart.quantity > 1) {
                    cart.quantity -= 1
                    cart.totalPrice = (cart.quantity * cart.price).toFixed(2);
                } else {
                    cart = cartArray.find((item) => item.productName === productObj.productName)
                }
            }
            printShopingCart();
        })
    })
    document.querySelectorAll('.plus').forEach(button => {
        button.addEventListener('click', function () {
            cart = cartArray.find((item) => item.productName === productObj.productName)
            if (cart) {
                cart.quantity += 1
                cart.totalPrice = (cart.quantity * cart.price).toFixed(2);
            }
            printShopingCart();
        })
    })


}

function updateCartVisibility() {
    emptycart.style.display = cartArray.length === 0 ? cartItems.innerHTML = ` <div id="emptycart" class="empty-cart">Cart is empty</div>` : cartArray.innerHTML = ''
}
