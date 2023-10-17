#include <stdio.h>

int sum(int num){
    int sum = 0;
    while (num>0)
    {
        sum += num%10;
        num /= 10;
    }
    return sum;
}

int main(void){
    int number = 1;
    while (sum(number)<=10)
    {
        number++;
    }
    printf("The smallest postive integer whose digit sum to more than 10 is %i\n", number);
    return 0;
}