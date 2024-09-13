"use strict";

// Old 
// function addToCart(product) {
//     let quantity = document.getElementById(product).value;
//     document.getElementById(product).value = parseInt(quantity) + 1;
// }

function addToCart(product) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + 1;
    updateTotalPrice(product); // Opdater totalsum
}

// old
// function removeFromCart(product) {
//     let quantity = document.getElementById(product).value;
//     if (quantity > 0) {
//         document.getElementById(product).value = parseInt(quantity) - 1;
//     }
// }

function removeFromCart(product) {
    let quantity = document.getElementById(product).value;
    if (quantity > 0) {
        document.getElementById(product).value = parseInt(quantity) - 1;
        updateTotalPrice(product); // Opdater totalsum
    }
}

// old
// function increaseQuantity(product, amount) {
//     let quantity = document.getElementById(product).value;
//     document.getElementById(product).value = parseInt(quantity) + amount;
// }

function increaseQuantity(product, amount) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + amount;
    updateTotalPrice(product); // Opdater totalsum
}

// old
// function resetCart(product) {
//     document.getElementById(product).value = 0;
// }

function resetCart(product) {
    document.getElementById(product).value = 0;
    updateTotalPrice(product); // Opdater totalsum til 0
}


function updateTotalPrice(product) {
    let quantityElement = document.getElementById(product);
    let priceElement = document.getElementById(product + "-price");
    let totalElement = document.getElementById(product + "-total");

    if (quantityElement && priceElement && totalElement) {  // Tjek om elementerne findes
        let quantity = parseInt(quantityElement.value);
        let price = parseInt(priceElement.value);
        let total = quantity * price;

        totalElement.value = total;
    } else {
        console.error("Elementer med ID'et " + product + " blev ikke fundet.");
    }
}
