// Định nghĩa một mảng các đối tượng
const objects: { name: string }[] = [];

// Sử dụng vòng lặp để tạo 25 đối tượng
for (let i = 1; i <= 25; i++) {
  const object = { name: `Object${i}` };
  objects.push(object);
}

// Tạo ra một bảng 5x5
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    // Lấy index tương ứng trong mảng objects
    const index = i * 5 + j;

    // Kiểm tra xem index có vượt quá độ dài của mảng không
    if (index < objects.length) {
      console.log(objects[index]);
    }
  }
}