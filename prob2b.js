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
    "Charles bob duKe",
    "Eugene Cernan",
    "Harrison Schmitt"
];

function alphabetizer(names) {
        //The alphabetizer takes a random array of first-name last-name 
        //and returns an alphabetized array of last-name, fist-name.
        //It correctly handles given names such as "Billy Bob".
        //It does not correctly handle suffixes such as Jr. or Ph.D.

        var sepNames = [];

        function capitalizer(nmStr) {
            //The capitalizer takes a string of random-case letters and 
            //returns it with initial caps.
            //It does not accurately handle names such as O'Reilley.
            nmStr = nmStr.substr(0, 1).toUpperCase() + nmStr.substr(1).toLowerCase();
            return nmStr;
        }

        for (var name in names) {
            names[name] = names[name].trim();
            sepNames.push(names[name].split(" "));
            var lg = sepNames[name].length;
            var firstName = "";
            for (var i = 0; i < lg; i++) {
                sepNames[name][i] = capitalizer(sepNames[name][i]);
                if (i < (lg - 1)) {
                    firstName = firstName + " " + sepNames[name][i];
                }

            }
            names[name] = sepNames[name][lg - 1] + "," + firstName;

        }

        names.sort();
        return names;


    } //end function alphabetizer



console.log(alphabetizer(moonWalkers));