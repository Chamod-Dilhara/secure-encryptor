function caesarCipher(str, key, decrypt = false) {
  if (decrypt) key = (26 - key) % 26;
  return str
    .split('')
    .map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code >= 97 ? 97 : 65;
        return String.fromCharCode(((code - base + key) % 26) + base);
      }
      return char;
    })
    .join('');
}

function encrypt() {
  const message = document.getElementById('message').value;
  const key = parseInt(document.getElementById('key').value);
  document.getElementById('output').value = caesarCipher(message, key);
}

function decrypt() {
  const message = document.getElementById('message').value;
  const key = parseInt(document.getElementById('key').value);
  document.getElementById('output').value = caesarCipher(message, key, true);
}

function copyText() {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  alert('Text copied to clipboard!');
}
// Mobile Navbar Toggle
const toggleBtn = document.getElementById("navbar-toggle");
const menu = document.getElementById("navbar-menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
