function updateProductNumber(product, price, isAdd)
{
    const productInput = document.getElementById(product + '-number');
     let productNumber = productInput.value;
     if(isAdd == true)
     {
         productNumber = parseInt(productNumber) + 1;
     }
     else if(productNumber>0)
     {
        productNumber = parseInt(productNumber) - 1;
     }
     productInput.value = productNumber;
     const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber*price;

    calculateTotal();
}

function getInputValue(product)
{
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone')*1219;
    const caseTotal = getInputValue('case')* 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal/10;
    const totalPrice = taxAmount + subTotal;
 //update on the html
 document.getElementById('sub-total').innerText = subTotal;
 document.getElementById('tax-amount').innerText = taxAmount;
 document.getElementById('total-price').innerText = totalPrice;

}
//handle phone increase and decrease values
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true);
}) 
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, false);
}) 



//handle increase and decrease values
//increment by 1 function 
document.getElementById('case-plus').addEventListener('click', function(){

    //  const increment = document.getElementById('increase-by1');
    //  const incrementValue = increment.value;
    //  const incrementNumber = parseInt(incrementValue) + 1;
    //  increment.value = incrementNumber;
    updateProductNumber('case', 59, true);
});





//decrement by 1 function 
document.getElementById('case-minus').addEventListener('click', function(){
    // const decrement = document.getElementById('increase-by1');
    // const decrementValue = decrement.value;
    // const decrementNumber = parseInt(decrementValue) - 1;
    // decrement.value = decrementNumber;
    updateProductNumber('case', 59, false);
})