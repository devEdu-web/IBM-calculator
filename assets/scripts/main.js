const user_height = document.getElementById('height');
const user_weight = document.getElementById('weight');
const calculate = document.getElementById("calculate");
const show_ibm = document.getElementById("ibm-result");
let result;


function calculate_ibm(height, weight) {
        if(user_height.value == '' && user_weight.value == '') {
            show_ibm.innerHTML = `Please, fill out the blank spaces`
        } else {
            user_height.value.replace(',', '.')
            user_weight.value.replace(',', '.')

            result = ((user_weight.value / Math.pow(user_height.value, 2))).toFixed(2)
            show_ibm.innerHTML = `Your IBM: ${result}`
        }


}


/* Peso / (altura * altura) */