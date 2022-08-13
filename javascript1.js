var jsonResponse = {"name": "sidik hadiwijaya", "orderNumber" : "76542019", "courier" : "JNE", "product" :[{"item" : "laptop asus", "price" : 12000000 },{"item" : "laptop acer", "price" : 10000000 },{"item" : "Macbook pro", "price" : 30000000}],"total" : 52000000, "code" : 200, "success":true}
var Actual = 0
var expected = jsonResponse.total
var orderNumber = typeof jsonResponse.orderNumber
for(i = 0; i < jsonResponse.product.length; i++) {
    Actual = Actual + jsonResponse.product[i].price
}

function assertTotal(expected, Actual) {
    if (expected == Actual) {
        console.log("Test Passed, Total is, Rp."+Actual);
    }else {
        console.log("Test Failed, Total Rp."+jsonResponse.total+" is false, total is must be Rp."+Actual);
    }
}

function assertDatatype(orderNumber) {
    if (orderNumber == "number") {
        console.log("Test Passed, Data Type is "+orderNumber);
    }else {
        console.log("Test Failed, Data Type is "+orderNumber);
    }
}

assertDatatype(orderNumber)
assertTotal(expected, Actual);
