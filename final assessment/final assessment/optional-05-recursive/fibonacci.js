// Fungsi untuk menghasilkan deret Fibonacci hingga elemen ke-n menggunakan rekursi
function fibonacci(n) {
    if (n <= 0) return []; // Basis rekursi untuk n <= 0
    if (n === 1) return [0]; // Basis rekursi untuk n === 1
    if (n === 2) return [0, 1]; // Basis rekursi untuk n === 2
  
    const sequence = fibonacci(n - 1); // Rekursi
    const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextValue);
    return sequence;
  }
  
  export default fibonacci;
  