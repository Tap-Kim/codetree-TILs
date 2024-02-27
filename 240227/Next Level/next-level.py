class User:
    def __init__(selft, id="codetree", lv=10):
        selft.id = id
        selft.lv = lv

user1 = User()

user2_id, user2_lv = tuple(input().split())
user2 = User(user2_id, int(user2_lv))

print(f"user {user1.id} lv {user1.lv}")
print(f"user {user2.id} lv {user2.lv}")