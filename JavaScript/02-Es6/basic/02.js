function breakfast() {
    return ['🍉', '🍔', '🍕'];
}

var temp = breakfast();
console.log(temp[0], temp[1], temp[2]);

let [a, b, c] = breakfast();
console.log(a, b, c);
