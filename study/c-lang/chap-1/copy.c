#include <stdio.h>

int main()
{

    printf("EOF is %d\n", EOF);
    printf("getchar() return %d\n", getchar());
    printf("getchar() != EOF ? %d\n", getchar() != EOF);

    int c;

    while((c = getchar()) != EOF)
        putchar(c);
}


