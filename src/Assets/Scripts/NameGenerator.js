#pragma strict

var currentName: String = "";

var firstNameSyllables: Array;
var lastNameSyllables: Array;
var nameSuffixes: Array;

function Start()
{
	firstNameSyllables = new Array();
	firstNameSyllables.Push("mon");
	firstNameSyllables.Push("fay");
	firstNameSyllables.Push("shi");
	firstNameSyllables.Push("zag");
	firstNameSyllables.Push("blarg");
	firstNameSyllables.Push("rash");
	firstNameSyllables.Push("izen");
	
	lastNameSyllables = new Array();
	lastNameSyllables.Push("malo");
	lastNameSyllables.Push("zak");
	lastNameSyllables.Push("abo");
	lastNameSyllables.Push("wonk");
	
	nameSuffixes = new Array();
	nameSuffixes.Push("son");
	nameSuffixes.Push("li");
	nameSuffixes.Push("ssen");
	nameSuffixes.Push("kor");
}

function OnGUI()
{
	if(GUI.Button(Rect(10,10,100,50), "New Name"))
	{
		CreateNewName();
	}

	GUI.Box(Rect(120,10,200,50), currentName);
}

function CreateNewName()
{
	//Creates a first name with 2-3 syllables
	var firstName: String = "";
	var numberOfSyllablesInFirstName: int = Random.Range(2, 4);
	for (var i: int = 0; i < numberOfSyllablesInFirstName; i++)
	{
		firstName += firstNameSyllables[Random.Range(0, firstNameSyllables.length)];
	}
	var firstNameLetter: String = "";
	firstNameLetter = firstName.Substring(0,1);
	firstName = firstName.Remove(0,1);
	firstNameLetter = firstNameLetter.ToUpper();
	firstName = firstNameLetter + firstName;
	
	//Creates a last name with 1-2 syllables
	var lastName: String = "";
	var numberOfSyllablesInLastName: int = Random.Range(1, 3);
	for (var j: int = 0; j < numberOfSyllablesInLastName; j++)
	{
		lastName += lastNameSyllables[Random.Range(0, lastNameSyllables.length)];
	}
	var lastNameLetter: String = "";
	lastNameLetter = lastName.Substring(0,1);
	lastName = lastName.Remove(0,1);
	lastNameLetter = lastNameLetter.ToUpper();
	lastName = lastNameLetter + lastName;
	
	//adds a suffix to the last name with a chance of 50%
	if(Random.Range(0,100) > 50)
	{
		lastName += nameSuffixes[Random.Range(0, nameSuffixes.length)];
	}

	//assembles the newly-created names
	currentName = firstName + " " + lastName;
}