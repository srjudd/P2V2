function getRelationship(x, y) {
	var	NaNct = 0;
	var subject = "";
	if (isNaN(x)) {
		NaNct++;
		subject = x;
	}
	if (isNaN(y)) {
		NaNct++;
		if (NaNct > 1) {subject = subject + " and " + y;}
			else {subject = y;}
	}
	if (NaNct === 0) {
		if (x === y) {return "=";}
		if (x > y) {return ">";}
		if (x < y) {return "<";}
	}
	else {
		var compop = "Can\'t compare relationships because ";
		var verb = "";
		if (NaNct === 1) {verb = " is not a number";}
		else {verb = " are not numbers";}
		return compop + subject + verb;
	}
}