n = input("Enter a number: ")
r = "Valid" if n == str(int(n) ** 2)[::-1][:len(n)][::-1] else "Not valid"
print(r)