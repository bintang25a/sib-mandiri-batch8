console.log("Nama: Bintang Al Fizar");
console.log("Universitas Muhammadiyah Jakarta");
console.log("");

//list produk awal
let produkList = [
	{id: 1, nama: "Laptop", harga: 12000000, stok: 5},
	{id: 2, nama: "Smartphone", harga: 5000000, stok: 8},
   {id: 3, nama: "Mouse", harga: 200000, stok: 10},
   {id: 4, nama: "Keyboard", harga: 350000, stok: 7},
   {id: 5, nama: "Monitor", harga: 1000000, stok: 4}
];

//fungsi untuk menambahkan produk toko
let lastId = 5; //untuk menyimpan id terakhir
const tambahProduk = (nama, harga, stok) => {
    const newProduct = {id: ++lastId, nama, harga, stok}
    produkList = [...produkList, newProduct];
}

//fungsi untuk menghapus produk toko
const hapusProduk = (id) => {
	produkList = [...produkList.filter(produk => produk.id !== id)];
}

//fungsi untuk menampilkan semua produk
const tampilkanProdukDOM = () => {
	const table = document.querySelector(".list-product table tbody");

    table.innerHTML = [...produkList]
    .map(produk => `
        <tr>
            <td>${produk.id}</td>
            <td>${produk.nama}</td>
            <td>Rp ${produk.harga}</td>
            <td>${produk.stok}</td>
        </tr>
    `).join("");
}

//fungsi event untuk mengganti warna background
let isChange = true;
document.querySelector(".input-product button").addEventListener("click", () => {
    active = () => {
        document.querySelector("body").style.backgroundColor = "lime";
    }

    deactive = () => {
        document.querySelector("body").style.backgroundColor = "white";
    }

    isChange ? active() : deactive();
    isChange = !isChange;
});

//menambahkan 3 produk baru
tambahProduk("Monitor X", 2000000, 3);
tambahProduk("Headphone", 200000, 12);
tambahProduk("Speaker", 500000, 4);

//menghapus produk dengan yang memiliki id = 2 an id = 6
hapusProduk(2);
hapusProduk(6);

//menampilkan produk
tampilkanProdukDOM();
