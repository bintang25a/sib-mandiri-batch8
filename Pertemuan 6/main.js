import { index, store, destroy } from "./controller.js"; //mengambil fungsi dari file controller

//user baru yang akan ditambahkan
const user = [
    {nama: "Jaenal", umur: 15, alamat: "JL Bayam 5", email: "jaenal@bmail.com"},
    {nama: "Jenap", umur: 16, alamat: "JL Bayam 5", email: "jenap@bmail.com"}
]

//fungsi yang akan dijalankan pada HTML
const main = () => {
    store(user);
    destroy("arul");
    index();
}

main();