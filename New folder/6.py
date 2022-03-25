a=[1,2,3,5]
b=[1,2,3,0]
c=[]
'''
for i in range(0,len(b)):
    c.append(a[i]+b[i])
'''
c=[a[i]+b[i] for i in range(len(a))]
print(c)