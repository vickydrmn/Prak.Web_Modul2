function Tambah() {
  var a1 = document.getElementById("angka1").value;
  var a2 = document.getElementById("angka2").value;
  var hasil = Number(a1) + Number(a2);
  alert("Hasil penjumlahan: " + hasil);
}

function Ulang() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
}
