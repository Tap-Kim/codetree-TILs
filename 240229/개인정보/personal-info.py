class Student:
    def __init__(self, n, h, w):
        self.n, self.h, self.w = n, h, w

students = []
for _ in range(5):
    n, h, w = tuple(input().split())
    students.append(Student(n, int(h), float(w)))

students.sort(key = lambda x: x.n)

print("name")
for student in students:
    print(student.n, student.h, student.w)

print()

students.sort(key = lambda x: -x.h)

print("height")
for student in students:
    print(student.n, student.h, student.w)