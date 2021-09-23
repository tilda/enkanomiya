base = [2.7, 3.1, 3.5, 3.8]

def calculate(n: int):
    return [n+2.7, n+3.1, n+3.5, n+3.8]

def solve(n: list):
    result = []

    for roll in n:
        for numeral in calculate(roll):
            result.append(round(numeral, 1))
    
    return list(dict.fromkeys(result))

print(solve(base))