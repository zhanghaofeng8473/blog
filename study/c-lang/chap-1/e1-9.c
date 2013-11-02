#include <stdio.h>

int main()
{
  int c;
  int ns = 0;

  while ((c = getchar()) != EOF)
  {
    if (c == ' ')
    {
      ns++;
      if (ns == 1) 
      {
        putchar(c);
      }
    } 
    else
    {
      putchar(c);
      ns = 0;
    } 
  }
}


