const isConfirmed1 = confirm("вивести результат 1-го завдання??");
if (isConfirmed1) {
    console.log(makeTransaction(5, 3000));
    console.log(makeTransaction(3, 459));
    console.log(makeTransaction(6, 1999));
}
function makeTransaction(quanity, pricePerDroid) {
    let string = "You ordered " + quanity + " droids worth " + quanity * pricePerDroid + " credits!";
    return string
}