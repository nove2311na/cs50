    #include <stdio.h>

// Version 1
    // int main(void){
    //     // Get size of grid
    //     int n;
    //     do
    //     {
    //         n = get_int("Size: ");
    //     } while (n<1);
        
    //     // Print grid of bricks
    //     for (int i=0; i<n; i++)
    //     {
    //         for (int j=0; j<n; j++)
    //         {
    //             printf("#");
    //         };
    //         printf("\n");
    //     };
    //     printf("\n");
    // }

// Version 2
    // Get size of grid
    int get_size(void){
        int n;
        do
        {
            n = get_int("Size: ");
        } while (n<1);
        return n;
    }

    // Print grid of bricks
    int print_grid(int size){
        for (int i=0; i<size; i++)
        {
            for (int j=0; j<size; j++)
            {
                printf("#");
            };
            printf("\n");
        };
        printf("\n");
    }

    // Main running function
    int main(void){
        // Get size of grid
        int n = get_size();

        // Print grid of bricks
        print_grid(n);
    }

