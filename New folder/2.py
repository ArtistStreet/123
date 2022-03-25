# bai 1
# import math
# chu_vi = int(input('chu vi hình tròn đáy: '))
# chieu_cao = int(input('chiều cao: '))
# ban_kinh_day = (chu_vi*math.pi)/(2*math.pi)
# the_tich = 1/3*int(ban_kinh_day)**2*int(chieu_cao)
# print('thể tích bằng' , int(the_tich) , 'pi')

#bai 3
# import math
# do_dai_canh_huyen = int(input('độ dài cạnh huyền: '))
# goc_nhon = int(input('góc nhọn: '))
# do_dai_canh_goc_vuong = math.radians(math.sin(int(goc_nhon))*int(do_dai_canh_huyen))
# dien_tich = 1/2*((math.sqrt(int(do_dai_canh_huyen)**2-int(do_dai_canh_goc_vuong)**2))*int(do_dai_canh_goc_vuong))
# print('diện tích: ', dien_tich)

# n = int(input())

# if (n%2!=0 and n<20):
#     print('Weird')
# if (n in range(2, 6) and n %2==0):
#     print('Not Weird')
# if (n in range(6, 21) and n% 2 ==0):
#     print('Weird')
# if (n>20 and n%2==0):
#     print('Not Weird')
# else:
#     print('Weird')
# for i in range(1, 6): #More than 2 lines will result in 0 score. Do not leave a blank line also
#     print((111111111//(10**(9-i)))**2)

print((111111111//(10**(9-2)))**2)