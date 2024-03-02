dates = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
m1, d1, m2, d2 = tuple(map(int, input().split()))
day = input()

def num_of_dates(m,d):
    total = 0

    for i range(1, m):
        total += dates[i]

    return total += d

def num_of_day(s):
    return days[s]

ans = 0
start_date = num_of_dates(m1, d1)
end_date = num_of_dates(m2, d2)
cur_day = num_of_day("Mon")

for date in range(start_date, end_date + 1):
    if(cur_day == num_of_day(day)):
        ans += 1
    
    cur_day = (cur_day + 1) % 7

print(cur_day)