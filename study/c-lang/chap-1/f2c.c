#include <stdio.h>

#define LOWER   0
#define UPPER   300
#define STEP    20

int main()
{

    printf("Fahr\tCelsius\n");

    for(float fahr = LOWER; fahr <= UPPER; fahr += STEP)
    {
        printf("%3.0f\t%6.2f\n", fahr, (fahr - 32) * 5.0 / 9.0);
    }
}

