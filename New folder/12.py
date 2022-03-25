
n=int(input())

def chinhphuong(n):
    s=0
    for i in range(n+1):
        if i**2==n:
            s+=1
    if s==1:
        return True
    else:
        return False
print(chinhphuong(n))
