days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

m1,d1,m2,d2 = tuple(map(int, input().split()))

def num_of_days(m,d):
    total = 0

    for i in range(1, m):
        total += days[i]
    
    total += d

    return total

total_dates = num_of_days(m2, d2) - num_of_days(m1, d1) + 1
print(total_dates)