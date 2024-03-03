OFFSET = 100
MAX = 201

n = int(input())
segments = [
    tuple(map(int, input().split()))
    for _ in range(n)
]

checked = [0] * MAX

for a, b in segments:
    a, b = a + OFFSET, b + OFFSET

    for i in range(a, b):
        checked[i] += 1


print(max(checked))