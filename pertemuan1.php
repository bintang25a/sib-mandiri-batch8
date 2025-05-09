<!DOCTYPE html>
<html>
<head>
    <title>Form Nilai Ujian</title>
</head>
<body>

<h2>Form Nilai Ujian</h2>

<form method="post" action="">
    Nama: <input type="text" name="nama" required><br><br>
    Email: <input type="email" name="email" required><br><br>
    Nilai Ujian: <input type="number" name="nilai" min="0" max="100" required><br><br>
    <input type="submit" value="Kirim">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $nilai = $_POST["nilai"];

    echo "<h3>Hasil:</h3>";
    echo "Nama: $nama<br>";
    echo "Email: $email<br>";
    echo "Nilai Ujian: $nilai<br>";

    // Struktur kendali untuk menentukan hasil
    if ($nilai > 70) {
        echo "<h4>Status: Lulus</h4>";
    }
    else if ($nilai == 70) {
        echo "<h4>Status: Lulus dengan nilai pas</h4>";
    } 
    else {
        echo "<h4>Status: Remedial</h4>";
    }
}
?>

</body>
</html>
