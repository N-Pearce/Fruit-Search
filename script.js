const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 
'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 
'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 
'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 
'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 
'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 
'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 
'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	return fruits.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));
}

function searchHandler(event) {
	showSuggestions(search(event.target.value));
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	if (results.length !== 0){
		suggestions.classList.add('has-suggestions');
	} else {
		suggestions.classList.remove('has-suggestions');
	}

	for (let result of results){
		const newSuggestion = document.createElement('li');
		newSuggestion.innerText = result;
		suggestions.appendChild(newSuggestion);
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);