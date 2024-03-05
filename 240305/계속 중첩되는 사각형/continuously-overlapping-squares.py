MAX_R = 200
OFFSET = 100

n = int(input())
checked = [
    [0] * (MAX_R + 1)
    for _ in range(MAX_R + 1)
]

x1, y1, x2, y2 = [], [], [], []
for i in range(n):
    _x1, _y1, _x2, _y2 = tuple(map(int, input().split()))
    x1.append(_x1)
    y1.append(_y1)
    x2.append(_x2)
    y2.append(_y2)

    x1[i] += OFFSET
    y1[i] += OFFSET
    x2[i] += OFFSET
    y2[i] += OFFSET


for i in range(n):
    for x in range(x1[i], x2[i]):
        for y in range(y1[i], y2[i]):
            checked[x][y] = 1 if i % 2 == 0 else 2

area = 0
for x in range(MAX_R + 1):
    for y in range(MAX_R + 1):
        if checked[x][y] == 2:
            area += 1

print(area)