from random import random
n=int(input())
m=0
for i in range(n+1):
    print(int(m+(n+1-m)*random()),end=' ')