// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('#grocery-form');
const productInput = document.querySelector('#product');
const quantityInput = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log('Form submitted');
    const productName = productInput.value;
    const quantity = quantityInput.value;
    const newLI = document.createElement("LI");
    newLI.innerHTML = `${quantity} ${productName}`;
    list.appendChild(newLI);
    productInput.value = "";
    quantityInput.value = "";
});