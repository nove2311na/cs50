// Hàm thực hiện phép cộng
function sum(a, b) {
    return a + b;
  }
  
  // Hàm nhân kết quả của sum với 10
  async function multiplyBy10() {
    // Nhập giá trị a và b từ bàn phím
    const a = parseFloat(prompt("Nhập giá trị a:"));
    const b = parseFloat(prompt("Nhập giá trị b:"));
  
    // Gọi hàm sum và đợi kết quả (không cần await vì sum không trả về Promise)
    const result = sum(a, b);
  
    // Nhân kết quả với 10
    const multipliedResult = result * 10;
  
    // In kết quả ra console
    console.log(`Kết quả nhân ${result} * 10 là: ${multipliedResult}`);
  }
  
  // Gọi hàm nhân kết quả của sum với 10
  multiplyBy10();
  