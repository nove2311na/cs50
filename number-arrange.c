#include <stdio.h>

int main(void)
{   
    int x = ("What's your first number? ");
    int y = ("What's your second number? ");
    if (x<y)
    {
        printf("x is less than y\n");
    }
    else 
    {
        if (x>y)
        {
            printf("x is greater than y\n");
        }
        else
        {
            printf("x is equal to y\n");
        }
    }
}