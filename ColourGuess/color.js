var colours = [
		"rgb(255, 0, 0)",
		"rgb(255, 255, 0)",
		"rgb(0, 255, 0)",
		"rgb(0, 255, 255)",
		"rgb(0, 0, 255)",
		"rgb(255 ,0 ,255)"
	];

var msgDisplay = document.querySelector("#msgDisplay");

var chosenColour = colours[3];

var colourChoice = document.querySelector("#colourChoice");//Selecting the colourChoice id in the span tag of h1 element.
colourChoice.textContent = chosenColour;
var	box = document.querySelectorAll(".box");

/*loops through the "box" class elements and also loops through colours array
  assigning corresponding values in array to each element cycled through*/
for (var i = 0; i < box.length; i++) {
	box[i].style.background = colours[i];
	//adding click event listener to each box.
	box[i].addEventListener("click", function()
	{
		//get the colour of selected square
		var colourClicked = this.style.background;
		//compare the colour to the picked colour
		if(colourClicked === chosenColour)
			{	
				msgDisplay.textContent = "Correct!";
			}else{
				this.style.background = "#487A21"; // changes selected box colour to match the background colour of the body
				msgDisplay.textContent = "Try Again!";
			}
	});
}