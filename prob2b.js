//Name alphabetizer takes a random array of first-name last-name and returns an alphabetized array of last-name, fist-name.
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];
function alphabetizer(names) {
	for(var name in names)	{
		names[name] = names[name].trim();
		//locate the start of the last name and the end of the fist name; not necessarily the same because could be middle name or initial.
		var bpt = names[name].lastIndexOf(" ");
		var bptf = names[name].indexOf(" ");
		//grab the last name and make sure the case is intitial cap.
		var lastName = names[name].substr(bpt+1);
		lastName = lastName.substr(0,1).toUpperCase() + lastName.substr(1).toLowerCase();
		//grab the last name and make sure the case is intitial cap.
		var firstName = names[name].substr(0,bptf);
		firstName = firstName.substr(0,1).toUpperCase() + firstName.substr(1).toLowerCase();
		//Catenate the last name, first name string
		names[name] = lastName + ", " +firstName;
	}
	names.sort();
	return names;
}

console.log(alphabetizer(moonWalkers));