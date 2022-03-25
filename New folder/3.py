n=int(input())
def oddnum(n):
    for i in range(n+1):
        yield i*2
def gen(n):
    for num in range(2,n):
        if all (num%i!=0 for i in range(2,num)):
            print(num)
gen(n)
  