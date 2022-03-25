#n=int(input())
#a=int(input())
#b=int(input())
#c=int(input())
#d=int(input())
'''
ans=0
for i in range(1,n+1):
    ans+=1/i
print(i)
'''
'''
ans1=1
for i in range(1,a+1):
    ans1*=i
ans2=1
for i in range(1,b+1):
    ans2*=i
ans3=1
for i in range(1,c+1):
    ans3*=i
ans4=1
for i in range(1,d+1):
    ans4*=i
print(ans1/ans2-ans3/ans4)
'''
n=int(input())
lst=[]
for i in range(n):
    lst.append(int(input()))
print(lst)
ans=0
for i in lst:
    if i>0:
        ans+=i
print(ans)