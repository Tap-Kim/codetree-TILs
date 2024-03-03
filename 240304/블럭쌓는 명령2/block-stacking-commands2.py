N, K = tuple(map(int, input().split()))

blocks = []
for _ in range(N):
    blocks.append(0)

for _ in range(K):
    a, b = tuple(map(int, input().split()))

    for i in range(a - 1, b):
        blocks[i] += 1

max_value = 0
for cnt in blocks:
    max_value = max(max_value, cnt)

print(max_value)