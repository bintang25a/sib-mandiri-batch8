import users from "./data.js"; //ambil data dari file js users

//menampilkan data pada HTML
const index = () => {
    const table = document.querySelector(".users table tbody");

    table.innerHTML = [...users]
    .map((user, i) => `
        <tr>
            <td>${i+1}</td>
            <td>${user.nama}</td>
            <td>${user.umur} tahun</td>
            <td>${user.alamat}</td>
            <td>${user.email}</td>
        </tr>
    `).join("");
}

//menambahkan data baru
const store = (user) => {
    users.push(...user);
}

//menghapus data berdasarkan nama
const destroy = (nama) => {
    let idxDelete = users.findIndex(produk => produk.nama.toLocaleLowerCase() === nama);
	
	if (idxDelete !== -1) {
		users.splice(idxDelete, 1);
	}
}

export { index, store, destroy };