console.log("made by emr");

const t = new Date();
const htmlTarih = document.querySelector('#gun-ay-yil');
const yil = t.getFullYear();

htmlTarih.innerHTML = yil;
