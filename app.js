const principal = document.querySelector('.principal');
const rate = document.querySelector('.rate');
const time = document.querySelector('.yrs')
const calculate = document.querySelector('.btn');
const monthlyPayment = document.querySelector('.m-pay')
const totalPayment = document.querySelector('.t-pay')
const totalIntrest = document.querySelector('.t-int')


calculate.addEventListener("click", simpleInterest);

    function simpleInterest() {
        let tInt = (principal.value * (rate.value / 100) * time.value);
        totalIntrest.value = tInt;
        console.log(tInt);

        let tPay = tInt + parseInt(principal.value)
        totalPayment.value = tPay;
        console.log(tPay)

        let mPay = (tPay / (rate.value * 12)).toFixed(2);
        monthlyPayment.value = mPay;
        console.log(mPay)
    }
