MAX_DIGIT = 30

a, b = tuple(map(int, input().split()))
n = input()
digits = []

num = 0
for ch in n:
    num = num * a + (ord(ch) - ord("0"))

while True:
    if num < b:
        digits.append(num)
        break

    digits.append(num % b)
    num //= b

for digit in digits[::-1]:
    print(digit, end="")