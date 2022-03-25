a=[4,4,4,2,4]
k=4
m=3
e=a.index(k)
b=a.index(k,1)
c=a.index(k,2)
d=a.index(k,3)
a[e]=m
a[b]=m
a[c]=m
a[d]=m

print(a)
