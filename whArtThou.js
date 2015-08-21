
function where(collection, source) {

keys = Object.keys(source);
num_keys = keys.length;
var index = 0;

var arr = [];

while (index < num_keys){

	current_key = keys[index];
    for (var i = 0; i<collection.length; i++){

	if (collection[i].hasOwnProperty([current_key]) && collection[i][current_key] === source[current_key]){
    	
        	arr.push(collection[i]);
        
    }
    
}
    
index = index + 1;
}

return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });



