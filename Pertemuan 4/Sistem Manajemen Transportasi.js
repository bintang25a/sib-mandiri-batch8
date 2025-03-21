//Superclass kendaraan
class kendaraan {
    constructor(merek, model, harga) {
        this.merek = merek;
        this.model = model;
        this.hargaSewa = harga;
    }

    disewa() {
        return `${this.merek} ${this.model}, dengan harga Rp ${this.hargaSewa}`;
    }
}

//subclass kendaraan mobil
class mobil extends kendaraan {
    constructor(merek, model, harga, pintu) {
        super(merek, model, harga);
        this.pintu = pintu;
    }

    getMobilInfo() {
        return `
            <td>${this.merek}</td>
            <td>${this.model}</td>
            <td>${this.pintu} Pintu</td>
            <td>Rp ${this.hargaSewa}</td>
        `
    }
}

//subclass kendaraan motor
class motor extends kendaraan {
    constructor(merek, model, harga, jenisRangka) {
        super(merek, model, harga);
        this.jenisRangka = jenisRangka;
    }

    getMotorInfo() {
        return `
            <td>${this.merek}</td>
            <td>${this.model}</td>
            <td>Rangka ${this.jenisRangka}</td>
            <td>Rp ${this.hargaSewa}</td>
        `
    }
}

//class untuk pelanggan penyewa kendaraan
class pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewa(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }

    getPelangganInfo() {
        let sewa = this.kendaraanDisewa ? this.kendaraanDisewa : "NOT RENT";

        return `
            <td>${this.nama}</td>
            <td>${this.nomorTelepon}</td>
            <td>${sewa}</td>
        `
    }
}

//array untuk menampung data kendaraan dan data pelanggan
let daftarKendaraan = [];
let daftarPelanggan = [];

//membuat daftar mobil yang tersedia
let [mobil1, mobil2, mobil3, motor1, motor2] = [];
daftarKendaraan.push(mobil1 = new mobil("Honda", "Brio", 5000000, 4));
daftarKendaraan.push(mobil2 = new mobil("Lamborgini", "Aventador", 10000000, 2));
daftarKendaraan.push(mobil3 = new mobil("Toyota", "Avanza", 3000000, 4));

//membuat daftar motor yang tersedia
daftarKendaraan.push(motor1 = new motor("Yamaha", "Grand Filano", 1000000, "Metal"));
daftarKendaraan.push(motor2 = new motor("Honda", "Beat", 800000, "eSaf"));

//membuat daftar pelanggan penyewa
let [pelanggan1, pelanggan2, pelanggan3, pelanggan4] = [];
daftarPelanggan.push(pelanggan1 = new pelanggan("Bintang Al Fizar", "22040700020"));
daftarPelanggan.push(pelanggan2 = new pelanggan("Jean", "0833-1234-5555"));
daftarPelanggan.push(pelanggan3 = new pelanggan("Dino", "0819-1111-3381"));
daftarPelanggan.push(pelanggan4 = new pelanggan("Akbar", "0812-9839-1176"));

//memanggil pelanggan yang menyewa mobil
pelanggan1.sewa(mobil2.disewa());
pelanggan2.sewa(mobil1.disewa());
pelanggan4.sewa(motor1.disewa());

//menampilkan data kendaraan pada HTML DOM
const tampilDOMKendaraan = () => {
    const table = document.querySelector(".kendaraan table tbody");

    daftarKendaraan.forEach(kendaraan => {
        const baris = document.createElement("tr");
        baris.innerHTML = kendaraan.getMobilInfo ? kendaraan.getMobilInfo() : kendaraan.getMotorInfo();
        table.appendChild(baris);
    });
}

//menampilkan data pelanggan pada HTML DOM
const tampilDOMPelanggan = () => {
    const table = document.querySelector(".pelanggan table tbody");

    daftarPelanggan.forEach(pelanggan => {
        const baris = document.createElement("tr");
        baris.innerHTML = pelanggan.getPelangganInfo()
        table.appendChild(baris);
    });
}

tampilDOMKendaraan();
tampilDOMPelanggan();