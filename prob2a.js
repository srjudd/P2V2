function getRelationship(x, y) {
    var NaNct = 0;
    var subjectArray = [];

    //getRelationship compares two numbers and returns the symbol
    //representing their relationship, or gives an error message if the inputs are
    //not two numbers.

    //The myNaNct function checks for inputs that are not numbers, counts them,
    //and puts them into an array for an error message.

    function myNaNct(z) {
            if (isNaN(z)) {
                NaNct++;
                subjectArray.push(z);
            }
        } //end myNanct

    myNaNct(x);
    myNaNct(y);

    if (NaNct === 0) {
        if (x === y) {
            return "=";
        } else {
            if (x > y) {
                return ">";
            } else {
                return "<";
            }
        }
    }

    //function ends if NaNct is 0, else givea error message
    else {
        if (NaNct === 1) {
            return "Can\'t compare relationships because " + subjectArray[0] + " is not a number";
        } else {
            return "Can\'t compare relationships because " + subjectArray[0] + " and " + subjectArray[1] + " are not numbers";
        }

    }
}