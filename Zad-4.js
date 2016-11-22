

let param1 = 5;
let param2 = 20;

console.log(random(param1, param2));

function random(param1, param2) {

    return (!check(param1, param2) ? 'false input' :
        (Math.random() * (param2 - param1) + param1) | 0);

}

function check(param1, param2) {

    if ((param1 !== 'number' && (param1 | 0) === 0) ||
        (param2 !== 'number' && (param2 | 0) === 0)) {
        return false;
    }
    if (param1 > param2) {
        return false;
    }
    return true;
}
