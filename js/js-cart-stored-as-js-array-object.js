"use strict";

// Opret et objekt til at holde styr på bestillingen
let cart = {
    coffee: {
        quantity: 0,
        price: 10,
        total: 0
    },
    americano: {
        quantity: 0,
        price: 12,
        total: 0
    },
    espresso: {
        quantity: 0,
        price: 15,
        total: 0
    },
    latte: {
        quantity: 0,
        price: 18,
        total: 0
    }
};

// Funktion til at tilføje til kurven
function addToCart(product) {
    cart[product].quantity += 1;
    updateTotalPrice(product);
}

// Funktion til at fjerne fra kurven
function removeFromCart(product) {
    if (cart[product].quantity > 0) {
        cart[product].quantity -= 1;
        updateTotalPrice(product);
    }
}

// Funktion til at øge kvantiteten af en bestemt vare
function increaseQuantity(product, amount) {
    cart[product].quantity += amount;
    updateTotalPrice(product);
}

// Funktion til at nulstille kurven for et bestemt produkt
function resetCart(product) {
    cart[product].quantity = 0;
    updateTotalPrice(product);
}

// Opdaterer totalprisen for et produkt
function updateTotalPrice(product) {
    cart[product].total = cart[product].quantity * cart[product].price;
    
    // Opdater input felter i HTML
    document.getElementById(product).value = cart[product].quantity;
    document.getElementById(product + "-total").value = cart[product].total;

    // Opdater den samlede pris for hele kurven
    totalPrice();
}

// Beregner den samlede pris for alle produkter i kurven
function totalPrice() {
    const totalSum = cart.coffee.total + cart.americano.total + cart.espresso.total + cart.latte.total;
    document.getElementById("totalSum").value = totalSum;
    console.log(cart); // Udskriv objektet til konsollen for at se kurvens indhold
}
