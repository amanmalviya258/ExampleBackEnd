// Random String generator
const randomString = (length) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

module.exports.randomString = randomString;

// Random Number generator
const randomNumber = () => {
    let min = 10000;
    let max = 99999;
    return result = Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.randomNumber = randomNumber;