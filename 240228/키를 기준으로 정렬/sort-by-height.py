class Student: 
    def __init__(self, n, h ,w):
        self.n = n
        self.h = h
        self.w = w

n = int(input())
students = []

for _ in range(n):
    n, h, w = tuple(input().split())
    students.append(Student(n, h, w))

students.sort(key = lambda x: x.h)

for s in students:
    print(s.n, s.h, s.w)