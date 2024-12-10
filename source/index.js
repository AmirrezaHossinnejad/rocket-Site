console.log(square(5))

function square(n) {
    return n * n;
}


import {getCartItems} from "./cart/cart.js"

function sumOFNums() {
    // چه موقعی از این حالت استفده میشه؟
    return new Promise();
}

async function functionAsync() {
    // چه موقعهایی از این دستور استفاده میشه؟
    // await
}


// callback <-----
// فرق این دوتا چیه؟
getCartItems().then(function (value) {
    // do the job
})

// Arrow Function
getCartItems().then((result) => {
    if (result.status === "ok") {
        alert("Response is OK")
    }
})


// Arrow Function
const testFn = () =>{}

// این چه کاربردی دارد؟
    testFn()

// زیاد استفاده میشود



// Anonymous Function vs Named Function
// Arrow Anonymous Function
const fn1 = () => {
}
// Normal Anonymous Function
const fn2 = function () {
}

// Named Function
function getItem() {
}

// Arrow function name?

