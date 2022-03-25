a=[]
b=c=int(input())

for i in range(b):
    
    d=[]
    for j in range(c):
        e=int(input(j+1))
        d+=[e]
    a.append(d)
for r in a:
    print(r)

A=[]
B=C=int(input())

for i in range(B):
    
    D=[]
    for j in range(C):
        E=int(input(j+1))
        D+=[E]
    A.append(D)
for R in A:
    print(R)
    

result = [[0,0],
         [0,0]]
for i in range(len(a)):
   for j in range(len(a[0])):
       result[i][j] = a[i][j] - A[i][j]
for r in result:
   print("      ",r)
   

