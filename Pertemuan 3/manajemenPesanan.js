console.log("Nama: Bintang Al Fizar");
console.log("Universitas Muhammadiyah Jakarta");
console.log("");

const produkToko = [
	{id: 1, nama: "Laptop", harga: 7000000, stok: 5},
   {id: 2, nama: "Mouse", harga: 200000, stok: 10},
   {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

//fungsi untuk menambahkan produk toko
let lastId = 3; //untuk menyimpan id terakhir
const tambahProduk = (nama, harga, stok) => {
	produkToko.push({id: ++lastId, nama, harga, stok});
}

//fungsi untuk menghapus produk toko
const hapusProduk = (id) => {
	let idxDelete = produkToko.findIndex(produk => produk.id === id);
	
	if (idxDelete !== -1) {
		produkToko.splice(idxDelete, 1);
	}
}

//fungsi untuk menampilkan semua produk
const tampilkanProduk = () => {
	console.log("Daftar Produk: ")
	produkToko.forEach((produk) => {
		console.log(
			`ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp ${produk.harga}, Stock: ${produk.stok}`
		);
	});
}

//menambahkan 3 produk baru
tambahProduk("Monitor", 1000000, 3);
tambahProduk("Headphone", 200000, 12);
tambahProduk("Speaker", 500000, 4);

//menghapus produk dengan yang memiliki id = 2
hapusProduk(2);

//menampilkan produk
tampilkanProduk();