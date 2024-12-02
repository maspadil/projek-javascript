// Fungsi untuk menghitung faktorial menggunakan rekursi
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // Basis rekursi
    }
    return n * factorial(n - 1); // Rekursi
  }
  
  export default factorial;
  