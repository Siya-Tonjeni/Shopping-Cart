
// Add total orders
function calculateTotalCost(){
    const iteamPrice = document.querySelectorAll('.item-price');
    const itemQuantity =  document.querySelectorAll('.item-quantity');
    let subTotal = 0;
    let totalCost = 0;
    const deliveryEligible = document.getElementById('delivery-eligible');
    const checkDeliveryFee = document.getElementById('check-delivery-fee');
    let deliveryFee = 0;

    // Calculate total costs
    iteamPrice.forEach((priceElement, index) => {
        const price = parseFloat(priceElement.textContent);
        const quantity = parseInt(itemQuantity[index].value, 10);

            subTotal += price * quantity;
        
    });

    // Check if eligible for free delivery
        if(subTotal >= 500){
            totalCost = subTotal;
            deliveryEligible.textContent = "You've Earned";
            checkDeliveryFee.textContent = "Free";
        }
        else{
            totalCost = subTotal + deliveryFee;
            const remainder = 500 - subTotal;
            deliveryEligible.textContent = "Spend R"+remainder+" more for";
            checkDeliveryFee.textContent = deliveryFee;
        }

        document.getElementById('sub-total').textContent = subTotal.toFixed(2);
        document.getElementById('total-cost').textContent = totalCost.toFixed(2);
    }

        //EventListener for when quantity changes, so it will recalculate
        document.querySelectorAll('.item-quantity').forEach(select =>{
            select.addEventListener('change', calculateTotalCost)
        });

        calculateTotalCost();
    


    
