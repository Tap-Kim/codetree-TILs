class Student:
    def __init__(self, name, a, b, c):
        self.name = name
        self.a = a
        self.b = b
        self.c = c

n = int(input())
students = []

for _ in range(n):
    name, a, b, c = tuple(input().split())
    students.append(Student(name, int(a), int(b), int(c)))

students.sort(key = lambda x: x.a + x.b + x.c)

for s in students:
    print(s.name, s.a, s.b, s.c)