#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string first = get_string("What's your first name? ");
    string last = get_string("What's your last name? ");
    printf("hello, %s %s\n", first, last);

    string first_name = get_string("Hi, what's your first name? ");
    string last_name = get_string("Hi, what's your last name? ");
    printf("Hello, %n %n\n", first_name, last_name)
}