def generate_2d_square(size):
    square = [[' ' for _ in range(size)] for _ in range(size)]
    for x in range(size):
        for y in range(size):
            square[x][y] = '*'
    return square

def print_2d_square(square):
    result = ""
    for x in range(len(square)):
        for y in range(len(square[x])):
            result += square[x][y] + " "
        result += "\n"
    return result

size = 3  # Change the size as needed
square = generate_2d_square(size)
print(print_2d_square(square))
