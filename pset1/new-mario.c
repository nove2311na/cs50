#include <stdio.h>

// Function to get size of grid
int get_size(void) {
    int n;
    do {
        printf("Size: ");
        scanf("%d", &n);
    } while (n < 1);
    return n;
}

// Function to print grid of bricks
void print_grid(int size) {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            printf("#");
        }
        printf("\n");
    }
    printf("\n");
}

// Main running function
int main(void) {
    // Get size of grid
    int n = get_size();

    // Print grid of bricks
    print_grid(n);

    return 0; // Added for good practice, indicating successful program execution
}
