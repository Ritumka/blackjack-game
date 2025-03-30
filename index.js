// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let purchaseEl = document.getElementById("purchase-btn")
let errorEl = document.getElementById("error")

function writeError() {
    console.log("Something went wrong, please try again")
}