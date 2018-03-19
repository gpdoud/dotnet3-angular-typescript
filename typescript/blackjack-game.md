# Blackjack dealer

You are a Blackjack dealer at the casino. As they dealer, you have specific rules on when you take a card and when you must stay. The rules are:

  If the total is 16 or less, take a card; otherwise don't take a card.

Write a program that plays with a single deck of cards. There are 52 of them.

  A King, Queen, Jack, and 10 are worth 10.
  Numbers 9 thru 2 are worth their face value.
  An Ace is worth 1 or 11 (dealer's choice)

Shuffle the cards three times.

For each game:

  - Deal the top 2 cards
  - Calculate the total
  - If the total is 17 to 21; you win
  - Continue this until you win or lose:
    - If the total is less than 17, draw another card
    - If the total is 17 to 21; you win
    - If the total is over 21; you lose
    - If the total is still lesss than 17, draw another card
  - If you draw 5 cards and the total remains less than 21; you win
