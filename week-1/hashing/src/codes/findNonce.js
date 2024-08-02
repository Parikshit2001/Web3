const crypto = require("crypto");

const input = {
  Harkirat: "Raman, Rs100",
  Ram: "Ankit, Rs10",
};

function findNonce(input, prefix) {
  let num = 0;
  while (true) {
    const inputStr = input + num.toString();
    const hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input, output: inputStr, hash, nonce: num };
    }
    num++;
  }
}

const result = findNonce(JSON.stringify(input), "00000");
console.log(result);
