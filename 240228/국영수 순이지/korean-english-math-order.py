class Student: 
    def __init__(self, n, k, e, m):
        self.n = n
        self.k = k
        self.e = e
        self.m = m

n = int(input())
students = []

for _ in range(n):
    n, k, e, m = tuple(input().split())
    students.append(Student(n, int(k), int(e), int(m)))

students.sort(key = lambda x: (-x.k, -x.e, -x.m))

for s in students:
    print(s.n, s.k, s.e, s.m)