function check() {

    let cardNum = document.getElementById("cardNumber").value;
    let sum = 0;
    let cardType;
    let bank;

    for (let i = 1; i < cardNum.length; i += 2) {
        sum += parseInt(cardNum[i]);
    }
    //  console.log(cardNum.endsWith("10") || cardNum.endsWith("12"));
    if (cardNum.startsWith('50') && (cardNum.length === 10 || cardNum.length === 12 || cardNum.length === 16) && (sum % 2 === 0) && (cardNum.endsWith("010") || cardNum.endsWith("012"))) {
        if (!document.getElementById("invalid").classList.value.includes("hide")) {
            document.getElementById("invalid").classList.add("hide");
        }if (document.getElementById("cardNumber").classList.value.includes("is-invalid")) {
            document.getElementById("cardNumber").classList.remove("is-invalid");

        }


        cardType = (cardNum.endsWith("010")) ? "credit" : "depit";
        bank = (cardNum.length === 10) ? "cib" : ((cardNum.length === 12) ? "hsbc" : "qnb");
        console.log("assets/" + bank + "-" + cardType + ".jpg");
        console.log("assets/" + bank + ".png");
        document.getElementById("cardImg").src = "assets/" + bank + "-" + cardType + ".jpg";
        document.getElementById("bankImg").src = "assets/" + bank + ".png";
        document.getElementById("card").classList.remove("hide");
        document.getElementById("bank").classList.remove("hide");


    } else {
        if (!document.getElementById("card").classList.value.includes("hide")) {
            document.getElementById("card").classList.add("hide");
        } if (!document.getElementById("bank").classList.value.includes("hide")) {
            document.getElementById("bank").classList.add("hide");

        } 
            document.getElementById("invalid").classList.remove("hide");
        document.getElementById("cardNumber").classList.add("is-invalid");
    }

}