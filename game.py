"""A number-guessing game."""

# Put your code here
import random

print("Hiya, welcome to the guessing game!")
player_name = input("What's your name? ")
print(f"{player_name}, I'm thinking of a number 1 - 100. Try to guess my number.")
rand_num = random.randint(1,100)
guess = 0
counter = 0

def error_handle(guess):
    """ Checks whether value is a valid integer between 1 and 100. """
    while(True):
        try:
            str_guess = input("Please choose a number between 1 and 100: ")
            guess = int(str_guess)
            while not (guess >= 1 and guess <= 100):
                try:
                    str_guess = input("Or maybe try... a number between 1 and 100? : ")
                    guess = int(str_guess)
                except:
                    print("Try numbers, like we practiced. \n")
            break
        except:
            print("Your entry needs to be an integer value.")
            print("But don't worry, dumb guesses aren't counted. \n")

    if guess < rand_num:
        print("Too low. Try again.")
    elif guess > rand_num:
        print("Too high. Try again.")

    return guess

while guess != rand_num:
    guess = error_handle(guess)
    counter += 1

print(f"Congrats! You guessed it in {counter} tries.)")
    