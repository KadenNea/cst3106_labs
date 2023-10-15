# Yatzy Game Project

## Overview
Welcome to the Yatzy Game project! This digital version of the classic Yatzy game allows players to roll dice, score points, and compete against each other. It's a fun and strategic game that tests your luck and decision-making skills.

## Rules
Here are the basic rules of the Yatzy game:

- **Objective**: The goal is to score as many points as possible over several rounds.
- **Equipment**: The game is played with five dice and a scorecard.
- **Gameplay**:
  1. Players take turns rolling five dice.
  2. After each roll, they can choose which dice to keep and which to re-roll, for a maximum of three rolls per turn.
  3. Players must select a scoring category for their roll, such as "Ones," "Twos," "Three of a Kind," etc.
  4. The score is calculated based on the chosen category and the dice values.
  5. Once a category is used, it cannot be selected again in future turns.
  6. The game consists of 13 rounds, and the player with the highest total score at the end wins.

Detailed rules and scoring categories can be found [here](https://en.wikipedia.org/wiki/Yatzy).

## Design System Documentation

### Color Scheme
- Primary Color: #FF5733 (Orange)
- Secondary Color: #3498DB (Blue)

**Rationale**: We chose these colors to provide a visually appealing and engaging gaming experience. Orange signifies excitement, while blue provides a calming effect, creating a balanced atmosphere for the game.

### Fonts
- Heading Font: "Raleway", sans-serif
- Subheading Font: "Open Sans", sans-serif
- Body Text Font: "Roboto", sans-serif

**Rationale**: These fonts were selected for their readability and modern appearance, enhancing the overall user experience.

## Dice Design

### Dice Appearance
- Size: 50px x 50px
- Color: White
- Dots (Pips): Black circles with a white background

**Rationale**: The dice are designed to be clear and easily readable. Black dots on a white background provide high contrast for better visibility.

### Digital Representation
![Digital Dice](dice.png)

## Game Mock-ups

### HTML/CSS Code
Here's a simplified mock-up of the game's HTML structure and CSS styles:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Yatzy Game</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header>
        <h1>Yatzy Game</h1>
    </header>
    <main>
        <div class="game-board">
            <!-- Dice, scorecard, and other game components go here -->
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>
