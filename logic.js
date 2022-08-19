// chatbot's logic!
function IsEnter()
{
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.

	// If enter key is pressed then only respond.
	if (TextBox_val != "")
	{
		if (event.keyCode == 13)
			main();
	}
}

function main()
{
	// the main logic will be coded here.
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.
	var ResponseText_val = document.getElementById("ResponseText"); // Get all the data from the response text.

	var FormatInput = TextBox_val.toLowerCase().trim(); // convert our given input to lowercase.
	// For example "Apple" -> "apple".

	// Code the Logic for chatting...
	if (FormatInput.includes("hi") || FormatInput.includes("hello") || FormatInput.includes("greet"))
		ResponseText_val.innerHTML = "Hello!";

	else if (FormatInput.includes("how are you"))
		ResponseText_val.innerHTML = "I'm fine! Thanks for asking!";

    else if (FormatInput.includes("old"))
        ResponseText_val.innerHTML = "Very Old";
    
    else if (FormatInput.includes("age"))
        ResponseText_val.innerHTML = "My age is a mystery";

    else if (FormatInput.includes("name"))
        ResponseText_val.innerHTML = "My name is Mr. ChatBot!";

    else if (FormatInput.includes("food"))
        ResponseText_val.innerHTML = "Pasta!";

    else if (FormatInput.includes("dessert"))
        ResponseText_val.innerHTML = "Strawberry Ice Cream!";

    else if (FormatInput.includes("who are"))
        ResponseText_val.innerHTML = "I am the creation of Joshua Park!";

    else if (FormatInput.includes("what are"))
        ResponseText_val.innerHTML = "I am a robot name ChatBox!";

    else if (FormatInput.includes("fun"))
        ResponseText_val.innerHTML = "I enjoy surfing the web";

    else if (FormatInput.includes("music"))
        ResponseText_val.innerHTML = "I enjoy korean r&b";
    
    else if (FormatInput.includes("where are you"))
        ResponseText_val.innerHTML = "I am from the Internet";

    else if (FormatInput.includes("color"))
        ResponseText_val.innerHTML = "I like blue";

    else if (FormatInput.includes("fact"))
        ResponseText_val.innerHTML = "A fact about me is that I am a robot";
    
    else if (FormatInput.includes("joke"))
        ResponseText_val.innerHTML = "Did you hear about the claustrophobic astronaut? He just needed a little space!";

	// Open websites!
	else if (FormatInput.includes("open google"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("open youtube"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

	else
		ResponseText_val.innerHTML = "Sorry, I can't understand you 😔";
}