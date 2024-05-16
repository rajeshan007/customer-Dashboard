function count(str) {

    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    return count
}
let a = count('hello world')
console.log(a);


// or 
function count(str) {
    const vowels = 'aeiou';
    let count = 0;
    str.split('').forEach((char) => {
        if (vowels.includes(char)) {
            count++;
        }
    });
    return count;
}

let b = count('hello world');
console.log(b);
