var payment__cc_data = document.getElementById("ccinfo").innerHTML
function typeclick(id) {
    if (id == 'paylater') {
        document.getElementById(id).className = "payment__type payment__type--paylater active"
        document.getElementById("cc").className = "payment__type payment__type--cc"
        document.getElementById("ccinfo").innerHTML = '<div class="payment__cc" id="bnpltext"><div class="payment__title">Pay in 4 easy installments using your credit card. Click Place your order to setup.</div></div>'
    } else {
        document.getElementById(id).className = "payment__type payment__type--cc active"
        document.getElementById("paylater").className = "payment__type payment__type--paylater"
        document.getElementById("ccinfo").innerHTML = payment__cc_data
    }
}
