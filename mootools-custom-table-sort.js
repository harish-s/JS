/*
Context and additional details - http://harish2s.wordpress.com/2009/11/03/custom-sorting-using-mootools/
*/

var securities;
var parsedSec;
function parseSecuritiesHeld(){
  securities = this.get('text');

	if(securities.charAt(0)=='<'){
		parsedSec = parseInt( securities.replace(''){
		parsedSec = parseInt( securities.replace('>','') );
		return parsedSec+0.01;
	}

	var index = securities.indexOf('-');
	if(index>0){
		//This is a range.
		//As we will only have whole numbers, replace hyphen with dot.
		parsedSec = parseFloat( securities.replace(' - ','.') );
		return parsedSec;
	}

	//This is just a number.
	return parseInt( securities);
}

//make sure that the length is equal to the number of columns.
//Leave null for columns that you want Mootools to decipher.
var customParsers = [null, null, null, parseNumberofSecurities];

var myTable = new HtmlTable({
  properties: {
    border: 1,
    cellspacing: 3
  },
  rows: [
    ['apple', 'red'],
    ['lemon', 'yellow']
  ],
  parsers: customParsers,
  sortable: true
});
myTable.inject($('someContainer'));