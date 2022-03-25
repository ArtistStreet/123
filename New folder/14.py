import time
start_time = time.time()
n = 6
def F(n):
    if n==1 or n==2:
        return 1
    else:
        return(F(n-1))

print(F(n))
#print((time.time() - start_time))
#[1,1,2,3,5,8,13]