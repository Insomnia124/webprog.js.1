const isConfirmed2 = confirm("вивести результат 2-го завдання??");
if (isConfirmed2) {
    console.log(getShipingMessage("France", 3500, 250));
    console.log(getShipingMessage("Italy", 5000, 500));
    console.log(getShipingMessage("United States", 15000, 2000));
}
function getShipingMessage(country, price, deliveryFee) {
    let message = "Shipping to " + country + " will cost " + (price + deliveryFee) + " credits";
    return message;
}