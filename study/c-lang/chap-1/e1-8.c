#include <stdio.h>

int main()
{
  int n = 0;
  int c;

  while ( (c = getchar()) != EOF )
  {
    if (c == ' ' || c== '\t' || c == 'n') 
      n++;
  }

  printf("%d\n", n);
}
