const isConfirmed3 = confirm("вивести результат 3-го завдання??");
if (isConfirmed3) {
    console.log(getElementWidth("50px", "8px", "4px"));
    console.log(getElementWidth("60px", "12px", "8.5px"));
    console.log(getElementWidth("200px", "0px", "0px"));
}

function getElementWidth(content, padding, border) {
    let contentWidth = parseFloat(content);
    let paddingWidth = parseFloat(padding) * 2;
    let borderWidth = parseFloat(border) * 2;
    return contentWidth + paddingWidth + borderWidth;
}