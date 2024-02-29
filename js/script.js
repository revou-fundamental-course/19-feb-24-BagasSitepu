function replaceName(){
    let name = prompt("Halo siapa nama Anda?", "");
    document.getElementById("name").innerHTML = name;
}

document.getElementById('changeName').addEventListener("click", function(){
    replaceName()
});

document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Mendapatkan nilai dari inputan formulir
    const nama = document.getElementById("nama").value;
    const tgl_lahir = document.getElementById("tgl_lahir").value;
    const jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    const pesan = document.getElementById("pesan").value;

    // Mendapatkan tanggal saat ini
    const currentDate = new Date().toLocaleDateString();

    // Menampilkan data pada elemen-elemen di dalam data-container
    document.getElementById("current-date").textContent = currentDate;
    document.getElementById("nama").textContent = nama;
    document.getElementById("tgl_lahir").textContent = tgl_lahir;
    document.getElementById("jenis_kelamin").textContent = jenis_kelamin;
    document.getElementById("pesan").textContent = pesan;
});