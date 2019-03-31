console.log('Functions for a Bookshop')

var harryPotter = {
    title: 'Harry Potter and the Chamber of secrets',
    price: 29.99,
    numberofCopies: 5
}

var lordOfTheRings = {
    title: 'The Fellowship of the Ring',
    price: 34.99,
    numberofCopies: 3
}

var ASongOfIceAndFire = {
    title: 'A Song of Ice and Fire',
    price: 27.99,
    numberofCopies: 8
}

var bookPurchased = []

var getPrice = function(name, copies) {
    var bookName = name.title;
    var bookPrice = name.price;
    var purchasedCopies = copies;
    var totalPriceBeforeTax = bookPrice * copies;
    var stockCount = name.numberofCopies - copies

    bookPurchased.push(bookName);
    bookPurchased.push(bookPrice);
    bookPurchased.push(purchasedCopies);
    bookPurchased.push(totalPriceBeforeTax);
    bookPurchased.push(stockCount);
}


var calculateTax = function() {
    var tax = (bookPurchased[3] * 10  ) / 100;
    var pricePlusTax = bookPurchased[3] + tax;
    return pricePlusTax.toFixed(2);
}

var checkoutInfo = function(customerName) {
    console.log(`Customer: ${customerName}`);
    console.log(`Purchasing: ${bookPurchased[0]}`);
    console.log(`Price: $${bookPurchased[1]}`);
    console.log(`Number of copies: ${bookPurchased[2]}`);
    console.log(`Price after 10% GST tax: $${calculateTax()}`)
    console.log(`Number of copies left in stock: ${bookPurchased[4]}`)
}



getPrice(lordOfTheRings, 2);
calculateTax();
checkoutInfo('Jordan Books')