"use strict";


function addToCart(product) {
    
    const quantity = document.getElementById(product).value;
    
    document.getElementById(product).value = parseInt(quantity) + 1;
    updateTotalPrice(product); // Opdater totalsum
}

function removeFromCart(product) {
    
    const quantity = document.getElementById(product).value;
    
    if (quantity > 0) {
        document.getElementById(product).value = parseInt(quantity) - 1;
        updateTotalPrice(product); // Opdater totalsum
    }
}

function increaseQuantity(product, amount) {
    
    const quantity = document.getElementById(product).value;
    
    document.getElementById(product).value = parseInt(quantity) + amount;
    updateTotalPrice(product); // Opdater totalsum
}

function resetCart(product) {
    
    document.getElementById(product).value = 0;
    updateTotalPrice(product); // Opdater totalsum til 0
}

function updateTotalPrice(product) {
    
    const quantityElement = document.getElementById(product);
    const priceElement = document.getElementById(product + "-price");
    const totalElement = document.getElementById(product + "-total");

    if (quantityElement && priceElement && totalElement) {  // Tjek om elementerne findes
        const quantity = parseInt(quantityElement.value);
        const price = parseInt(priceElement.value);
        const total = quantity * price;
        
        totalElement.value = total;
        totalPrice('coffee', 'americano', 'espresso', 'latte');
    } 
}


function totalPrice(productA, productB, productC, productD) {
    
    const totalPriceElementA = document.getElementById(productA + "-total");
    const totalPriceElementB = document.getElementById(productB + "-total");
    const totalPriceElementC = document.getElementById(productC + "-total");
    const totalPriceElementD = document.getElementById(productD + "-total");

    const totalPriceA = parseInt(totalPriceElementA.value);
    const totalPriceB = parseInt(totalPriceElementB.value);
    const totalPriceC = parseInt(totalPriceElementC.value);
    const totalPriceD = parseInt(totalPriceElementD.value);

    const totalSum = totalPriceA + totalPriceB + totalPriceC + totalPriceD;
    const totalSumElement = document.getElementById("totalSum");
    totalSumElement.value = totalSum;
    console.log(totalSum);
}


