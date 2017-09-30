# [Pet A Puppy](https://mfullford.github.io/project1/)

My first project is a game that involves:

- A moving background
- A protagonist in the form of a floating hand
- Lots of puppies

The concept is simple: you're in a park and a bunch of puppies are running down the hill towards you. The protagonist moves to try and pet as many puppies as possible within the 30 second timeline. Once that 30 seconds is over, the game is over and you get an alert telling you to press the reset button to play again.

## To Do List
Here is a [link](https://trello.com/b/Jyiv5fzo/pet-a-puppy) to do my Trello to do list.

## Wireframe 
Here is a [link](https://wireframepro.mockflow.com/view/pet-a-puppy#/page/7415fa9fe4074b759cebc5fb93895e6f) to my wireframe.

### Mountains
The toughest part to this game was getting the dogs to drop down randomly from the top of the screen. Another big challenge was getting the cursor image to work correctly - it has to be the perfect size so I actually had to download and resize the image. 

### How I Accomplished This Game

Using math round and math random I made the puppies appear at the top of my container div. I used a url image to get my cursor to look like a hand. For the countdown, I used a basic timer I found online and switched it around a little to display on the div I created in HTML. I used a Jquery click function to add points to my score. I had to use a restart button to reset the score, but I got my timer to loop 30 seconds over and over again.

### Running Through the Six with My Woes

Initially I wanted to use a left/right moving protagonist with collision detection to add points. Unfortunately, I wasn't able to figure out how to detect every single position of all of my boxes (puppies) because there were a ton of them and math is hard so I pivoted to use my cursor instead. I also created a third page which was meant to be my scoreboard page, but I couldn't figure out how to locally store the scores and then populate the highest each time.

I have a graveyard in my js with my many attempts at collision detection, I'm going to try to go back and tinker with it to see if I can figure it out eventually!

### Thanks for playin'!

![giphy](https://user-images.githubusercontent.com/31824846/31026404-90162cbe-a503-11e7-96bf-f75058151302.gif)