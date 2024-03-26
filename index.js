// "Console"
let message = "";
let decode = "";

//Heart
const secrets = [
    ['00101110', 'sadcat.gif '],
    ['00100001', ':D '],
    ['00101100', 'but... '],
    ['00111111', 'wah.. '],
    ['0000', 'helo '],
    ['0001', 'o '],
    ['0010', 'wawa '],
    ['0011', 'wuhh '],
    ['0100', 'wah '],
    ['0101', 'hi '],
    ['0110', 'yaya '],
    ['0111', 'hai '],
    ['1000', 'gm '],
    ['1001', 'gn '],
    ['1010', 'hru '],
    ['1011', 'idk '],
    ['1100', '? '],
    ['1101', 'oh '],
    ['1110', 'STFU '],
    ['1111', 'undertale '],
];

//Santehsize
function yaya(wuhh) {
    const binary = wuhh.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
    let guhh = '', i = 0;
    while (i < binary.length) {
        let yuhuh = false;
        for (let [bin, secret] of secrets) {
            if (binary.startsWith(bin, i)) {
                guhh += secret;
                i += bin.length;
                yuhuh = true;
                break;
            }
        }
        if (!yuhuh) i++;
    }
    return guhh.trim();
}

//Betterify
function zaza(wuhh) {
    let binary = wuhh.split(' ').reduce((mreow, mrrp) => {
        for (let [binary, secret] of secrets) {
            if (mrrp + ' ' === secret) {
                return mreow + binary;
            }
        }
        return mreow;
    }, '');
    let owo = '';
    for (let i = 0; i < binary.length; i += 8) {
        let byte = binary.slice(i, i + 8);
        owo += String.fromCharCode(parseInt(byte, 2));
    }
    return owo;
}

//Skibidis
message.length < 1 ? void(0) : console.log(yaya(message));
decode.length < 1 ? void(0) : console.log(zaza(decode));
