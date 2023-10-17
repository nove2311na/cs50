#include <stdio.h>

// int main(void)
// {
//     long x = get_int("x: ");
//     long y = get_int("y: ");

//     printf("%li\n", x + y);
// }

int main(void)
{
    long x, y;

    // Nhập giá trị x từ người dùng
    printf("x: ");
    scanf("%li", &x);

    // Nhập giá trị y từ người dùng
    printf("y: ");
    scanf("%li", &y);

    // Tính tổng và in ra màn hình
    // printf("%li\n", x + y);

    // Tính thương và in ra màn hình
    printf("%f\n", (float) x / (float) y);
    
    return 0;
}
