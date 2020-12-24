// sebelum melangkah lebih jauh ke variable disini kita harus paham beberapa keyword : Expression,statement, block, function
// var
// nama variable tidak boleh dibuat sama dengan keyword yang dipakai javascript
// contoh : break, case, catch, class, const, dll. masih banyak lainnya, jika bingung silahkan dicek dengan perintah ctrl+spasi maka akan memunculkan semua keyword yang telah digunakan javascript, ketika nama variable yang kita buat sama dengan keyword yg telah dipakai js maka akan memeberi tahu dimana letak kesalahannya, so jangan khawatir.
// sejak javascript es6 banyak perubahan atau migrasi penulisan syntax yang bertujuan untuk mempersingkat penulisan statement, dan block, so jangan kaget jika dalam javascript banyak cara penulisannya, (banyak jalan menuju roma heheh)
// contoh dulu inisialisasi var harus dideklarasi satu per satu menggunakan tag variable seperti var/const
// set rules dalam js
// var x, y, z; // Declare Variables
// x = 5;
// y = 6; // Assign Values
// z = x + y; // Compute Values

// // real case deklarasi dan assign
// Tulis disini
var buttonCek = document.getElementById("cek");
buttonCek.addEventListener("click", function cek(e) {
    e.preventDefault();
    var nilaiBisnis = document.getElementById("nilaiBisnis").value;
    var nilaiAkuntansi = document.getElementById("nilaiAkuntansi").value;
    var nilaiMikro = document.getElementById("nilaiMikro").value;
    var nilaiMatematika = document.getElementById("nilaiMatematika").value;
    var nilaiDalamBis = document.getElementById("nilaiDalamBis").value;
    var ipSemester = [
        nilaiBisnis,
        nilaiAkuntansi,
        nilaiMikro,
        nilaiMatematika,
        nilaiDalamBis,
    ];
    console.log(ipSemester);

    var total = 0;
    for (var i = 0; i < ipSemester.length; i++) {
        total += parseFloat(ipSemester[i]);
        var hasil = total / ipSemester.length;
    }
    document.getElementById("demo").value = hasil.toFixed(2);
    console.log("IP, Kumulatif " + hasil.toFixed(2));
});
