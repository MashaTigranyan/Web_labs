const str = 'aabb';

function polindrom(str) {
    const obj = {};
    let hasOdd = false;

    str.split('').forEach(char => obj[char] === undefined ? obj[char] = 1 : obj[char]++);

    for (let letter of Object.keys(obj)) {
        if (obj[letter] % 2 === 1) {
            if (!hasOdd) {
                hasOdd = true;
            } else {
                return false;
            }
        }
    }

    if (str.length % 2 === 0) {
        return !hasOdd;
    } else {
        return hasOdd;
    }
}

console.log(polindrom(str));