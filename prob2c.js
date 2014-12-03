//PSI Challenge
var psiResults;

psiResults = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleImpact": 0.0
   },

   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.1417,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },


       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },


   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}

//my code has two major functions that operate on the page speed results JSON.


function totalBytes(results) {
    //totalBytes looks for the string "Bytes" in page states
    //and sums the Bytes for such entries.
    var btot = 0;
    for (var prop in results.pageStats) {
        if (prop.search("Bytes") != -1) {
          btot = btot + Number(results.pageStats[prop]);
            }
      }
  return(btot);
}//end totalBytes

totalBytes(psiResults);

function ruleList(results) {
  //ruleList returns the rule recommendations from the page results JSON.
  var rulesStrings = [];
  var ruleCt = 0;
  function noRules() {
    //If there are no recommendations to iterate through,
    //noRules can be called to report this result.
    rulesStrings.push("There are no rule recommendations to report.");
  }//end noRules
  for (var ruleName in results.formattedResults.ruleResults) {
    var ruleEntry = results.formattedResults.ruleResults[ruleName];
    rulesStrings.push(ruleEntry.localizedRuleName);
    ruleCt ++;
  }
  if (ruleCt === 0) {
    noRules();
  }
  return rulesStrings;
}//end ruleList
ruleList(psiResults);