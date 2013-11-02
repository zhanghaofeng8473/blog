#include <stdio.h>

int main()
{
    float celsius, fahr;

    printf("Celsius\tFahr\n");

    for(celsius = -20; celsius <= 150; celsius += 10)
    {
        fahr = celsius * 9.0 / 5.0 + 32;
        printf("%6.0f\t%6.2f\n", celsius, fahr); 
    }
}

