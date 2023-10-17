#include <stdio.h>

main(void)
{
    int counter = 3;
    
    while (/* condition */ counter>0)
    {
        printf("meow\n");
        counter--;
    };

    int i = 3;
    while (i>0)
    {
        printf("meow\n");
        i--;
    };

    int i = 1;
    while (i<=3)
    {
        printf("meow\n");
        i++;
    };

    for (int i = 0; i < 3; i++)
    {
        printf("meow\n");
    }; 
}
    