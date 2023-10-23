function daftar() {
  var nama = document.getElementById("Nama").value;
  var email = document.getElementById("Email").value;
  var alamat = document.getElementById("alamat").value;

  if (nama == "" || email == "" || alamat == "") {
    alert("Anda harus mengisi data dengan lengkap");
  } else {
    alert("terisi");
  }
}
