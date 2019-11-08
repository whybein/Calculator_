function add(char) {
    var display = document.getElementById('display');
    display.value = display.value + char;
}

function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    document.getElementById('result').value = result;
}

function reset() {
    document.getElementById('display').value = '';
    document.getElementById('result').value = '';
}

function back() {
    var value = document.getElementById('display').value;
    document.getElementById('display').value = value.substr(0, value.length - 1);
}

var numberClicked = false;

function add(char) {
    if (numberClicked === false && isNaN(char) === false) {
        document.getElementById('display').value += char;
    } else {
        document.getElementById('display').value += char;
    }

    if (isNaN(char) === true) {
        numberClicked = false;
    } else {
        numberClicked = true;
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




// var commaOnNumber = Array.from(document.querySelectorAll('input'))[0];

// for (var i in commaOnNumber) {
//     input.addEventListener('input', function() {
//         this.value = this.value.replace(/[^0-9 \,]/, '');
//     });
// }