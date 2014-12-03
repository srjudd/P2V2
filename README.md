P2V2
====

Udacity Frontend Nanodegree Project 2 Version 2
This work is currently in progress and is being shared for comments. All versions that do not have "working" in the title pass the auto-grader.

Challenge 1 is in the prob2a.js file, with surrounding code to allow it to be tested. prob2a.html links the javascript file to provide a console for testing. The required getRelationship function includes a nested myNaNct function that screens input variables to see if they are numbers and puts them into an array for use in an error message if they are not numbers, maintining a count of the number of bad inputs to use in constructing the error message.

Challenge 2 is in the prob2b.js file with surrounding code, including a list of astronauts, to allow testing. prob2b.html links the javascript file to provide a console for testing. The function "alphabetizer" includes an internal  "capitalizer" function as a subroutine to provide simple intitial capitalization of single name, whether given or family. The alphabetizer-extracted first name supports situations of first and middle names being used together as a given name, such as "Billie Jean". Prefixes such as "Dr." are supported. Suffixes such as ", Ph.D. or Jr." are not supported.

Challenge 3 is in the prob3c.js with surrounding code to allow testing, including the page speed JSON given in the problem. "totalBytes" and "rulesList" are the majro functions The "noRules" subroutine handles the event of there being no rules recommendation.

Reference Used: 
Front-End Web Developer Nanodegree P2: JavaScript Challenge and also the Javascript Basics course.
MDN JavaScript Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
MDN JavaScript Reference Strings https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
W3 Schools Javascript Arrays http://www.w3schools.com/js/js_arrays.asp
W3 Schools JavaScript String Reference http://www.w3schools.com/jsref/jsref_obj_string.asp
http://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
The Sublime 3 editor was used for JavaScript and HTML files. jsbeautifier.org was used for standardizing code formatting of some files. SublimeLiter was installed but did not turn up even deliberate errors, so I'm not giving it any credit!