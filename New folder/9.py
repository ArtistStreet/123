a=[[1,2,3],
[4,5,6],
[7,8,9]]
b=[[1,2,3],
[4,5,6],
[7,8,9]]
result=[[0,0,0],
[0,0,0],
[0,0,0]]
for i in range(len(a)):
    for j in range(len(a[0])):
        for k in range(len(b)):
            result[i][j]+=a[i][k]*b[k][j]
for r in result:
    print(r)