x = [[12,7],
    [4 ,5],
    [3 ,8]]
result=[[x[i][j]for i in range(len(x))]for j in range(len(x[0]))]
for r in result:
    print(r)