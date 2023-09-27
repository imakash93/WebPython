import time
import pygame

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 600
EXPLOSION_SIZE = 100

# Colors
WHITE = (255, 255, 255)

# Create a screen
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption('Explosion Animation')

# Load explosion images (replace with your own images)
explosion_images = [pygame.image.load(f'explosion{i}.png') for i in range(1, 6)]
explosion_index = 0
explosion_animation_speed = 10

# Explosion position
explosion_x = (WIDTH - EXPLOSION_SIZE) // 2
explosion_y = (HEIGHT - EXPLOSION_SIZE) // 2

# Clock for controlling animation speed
clock = pygame.time.Clock()

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill(WHITE)

    # Display the current explosion frame
    screen.blit(explosion_images[explosion_index], (explosion_x, explosion_y))

    # Increment the explosion index for animation
    explosion_index += 1
    if explosion_index >= len(explosion_images):
        running = False

    pygame.display.flip()
    clock.tick(explosion_animation_speed)

# Quit Pygame
pygame.quit()
