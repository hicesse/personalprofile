let nama = prompt('Siapa namamu? ');
let intro = document.getElementById('intro');
let kanan_2 = document.getElementById('kanan-2');
let body = document.getElementById('body');

while (nama === null || nama.trim() === '') {
    nama = prompt('Siapa namamu? (tolong isi ya, jangan kosong)');
}

intro.innerText = `Hello!! ${nama} it's Hiban here!`;

kanan_2.innerHTML = `I'm sorry ${nama} this website got re-building and still optimalization like the android preview, nav function (in android and desktop) and more, i'll add it soon, so please stay tuned and thank you for your understanding`;



