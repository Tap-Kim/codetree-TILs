# 키 - 오름차순
# 키 동일 - 몸무게 내림차순

class Person:
    def __init__(self, n, h, w):
        self.n, self.h, self.w = n, h, w

n = int(input())
persons = []

for _ in range(n):
    n,h,w = tuple(input().split())
    persons.append(Person(n,int(h),int(w)))

persons.sort(key=lambda x: (x.h, -x.w) )

for person in persons:
    print(person.n, person.h, person.w)