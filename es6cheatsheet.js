//********************
//	VARIABLE TYPES
//********************


var width = 100;
//can be updated or redefined
//function scoped; will bleed out of condition blocks 
//dont throw error when accessed before definition; returns undefined

let height = 200;
//can be updated 
//block scoped
//throw error when accessed before definition


const key = 'abc123';
//cannot be updated
//properties of a const object CAN be updated
//throw error when accessed before definition

//Basically, dont use var


//********************
//	ARROW FUNCTIONS
//********************


	const names = ['wes', 'kait', 'lux'];


	//The map() method creates a new array with the results of calling a provided function on every element in this array.
	const fullNames = names.map(function(name){
		return name + 'bos';
	});

	//is equivalent to:
	const fullNames = names.map((name) => {
		return name + 'bos';
	});

	//and (if you have one param)
	const fullNames = names.map(name => {
		return name + 'bos';
	});

	//implicit return (remove brackets)
	const fullNames = names.map(name =>  name + 'bos');

	//no params
	const fullNames = names.map(() => 'bos');

	//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

	const ages = [10,20,24,80,62,70];

	const old = ages.filter(age => age >= 60);

	//swapping 

	let first = 'opening';
	let second = 'open';

	[first, second] = [second, first];


	//default arguments

	function calculateBill(total, tax = 0.13, tip = 0.15) {
		return total + (total * tax) + (total * top);
	}

	//when NOT to use arrow functions
		//when you really need this
		// 'this' key word does NOT get rebound; its inherited from parent scope

		const box = document.querySelector('.box');
		box.addEventListener('click', () => {
			console.log(this);
		});
		// >>window
		const box = document.querySelector('.box');
		box.addEventListener('click', function() {
			console.log(this);
		});
		// >> box

		//use arrow functions WITHIN nonglobal scopes instead of passing this down to nested functions

		//when you need to bind a method to object (kinda same as above)
		const person = {
			points: 23,
			score: function() {
				this.points++;
			}
		}

		//when you need to add a prototype method (again, 'this')
		Car.prototype.summarize = function () {
			return `This car is a ${this.make} in the color ${this.color}`;
		}

		//when you need arguments object
		const orderChildren = function() {
			const children = Array.from(arguments);
		}


//********************
//	TEMPLATE STRINGS
//********************

	const sentence = 'My dog ' + name + ' is ' + age + 'years old.';
	//is equivalent to:
	const sentence = `My dog ${name} is ${age} years old.`;
	//straight JS (functions etc) can be run withing the braces

	//multiple lines

	const markup = `
		<div class='person'>
			<h1> Hi There</h1>
		</div>
	`;

	//nesting
	const dogs = [
		{name: 'Snickers', age: 2},
		{name: 'Hugo', age: 7}
	];

	const markup = `
		<ul class='dogs'>
			${dogs.map(dog => `<li>${dog.name} is ${dog.age} years old</li>`)}
		</ul>
	`;

	//including conditionals
	const markup = `
		<div class="song">
			<p>
				${song.name} - ${song.artist}
				${song.featuring ? `Featuring ${song.featuring}`}
			</p>
		</div>
	`;

	//React-like rendering
	const beer = {
		name = 'Belgian Wit', 
		keywords = ['pale','cloudy', 'spiced']
	};

	function renderKeywords(keywords){
		return `
			<ul>
				${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
			</ul>
		`;
	}

	const markup = `
		<div class='beer'>
			<h2>${beer.name}</h2>
			${renderKeywords(beer.keywords)}
		</div>
	`

	//tagging with function names; can be used for front end sanitization

	function highlight(strings, ...values) {
		let str = '';

		strings.forEach((string, i) => {
			str += `${string} <span class="hl">${values[i] || ''}</span>`;
		});

		return str;
	}

	const name = 'Snickers';
	const age = 100;
	const sentence = highlight`My dogs name is ${name} and he is ${age} years old`;


//********************
//	STRING METHODS
//********************

	.startsWith(args);
	//is case sensitive
	//takes string, and optional arg to ignore first n characters.
	'hello'.startsWith('ll', 2);
	//>> true

	.endsWith(args);
	//same as above, except second arg is n characters to use

	.includes();
	//self explanatory 

	.repeat();
	'hello '.repeat(3);
	//>>hello hello hello

//********************
//	DESTRUCTURING OBJECTS AND ARRAYS
//********************

	//extracts properties from object or items in array to its own object
	const person = {
		first: 'Wes',
		last: 'Bos',
		country: 'Canada'
	};

	const { first, last, country } = person;
	console.log(first);
	//>> Wes

	//renaming variables
	const { first:foist, last:lahst} = person;
	console.log(foist);
	//>> Wes

	//setting defaults/fallbacks
	const { width= 100, height = 100 } = settings;

	//for arrays
	const details = ['Wes', 123, 'wesbos.com'];
	const [ name, id, website ] = details;

	//for strings
	const data = "basketball, sports, 90210,23";
	const [itemName, category, sku, inventory] = data.split(',');

	//'the rest'
	const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];
	const [captain, assistant, ...players] = team;
	console.log(players);
	//>> ['Sarah', 'Keegan', 'Riker']

	//swapping
	let inRing = 'Hulk';
	let onSide = 'Rock';

	[inRing, onSide] = [onSide, inRing];

	//destructuring functions
	function convertCurrency(amount) {
		const converted = {
			USD: amount * 0.76,
			GPD: amount * 0.53,
			MEX: amount * 13.30
		}

		return converted;
	}

	//note order doesnt matter with objects
	const {MEX, USD, GPD} = convertCurrency(100);

	//destructuring arguments
	function tipCalc({total, tip = 0.15, tax = 0.13}) {
		return total + (tip * total) + (tax * total);
	}

	tipCalc({total: 200, tip: 0.20, tax: 0.13});


//********************
//	LOOPS
//********************


	//for-of
	const cuts = ['chuck', 'brisket', 'shank'];

	for (const cut of cuts) {
		console.log(cut);
	}

	// avoids pitfalls of forEach, for-in: doesn't access additions to the prototype, allows break/continue

	//array iterator
	for (const[i, cut] of cuts.entries()) {
		console.log(`${cut} is the ${i+1} item`);
	}

	//for-of can iterate over the arguments object, which is array-ish, but doesnt have array prototype methods. Also return of querySelectorAll (NodeList)

	//CANNOT iterate over an object

//********************
//	ARRAY METHODS
//********************


	//Array.from() - turns something array-ish into true array
	const people = document.querySelectorAll('. people p');
	const peopleArray = Array.from(people);

	const names = peopleArray.map(person => person.textContent);

	//Array.of() - creates an array from arguments
	const ages = Array.of(12, 15, 215, 22);

	//.find() - returns the item in array that matches query
	const posts = [{code: 123}, {code: 124}, etc];
	const code = '123mfnsdjnf';
	const post = posts.find(post => post.code === code);

	//.findIndex() - same as above but returns index

	//.some()
	const ages = [32, 15, 18, 12];

	//returns true if at least one element passes conditional
	const adultPresent = ages.some(age => age >= 18);

	//.every() - self explanatory

//********************
//	SPREAD AND REST
//********************

	//spread - takes every item in an iterable and apply it to the containing element
	const string = 'wes';
	const spread = [...'wes'];
	console.log(spread);
	//>> ['w', 'e', 's']

	//can be an alternative to Array.from
	const people = document.querySelectorAll('. people p');
	const peopleArray = Array.from(people);
	//or
	const peopleArray = [...document.querySelectorAll('. people p')];

	const deepDish = {
		pizzaName: 'Deep Dish',
		size: 'Medium',
		ingredients: ['Marinara', 'Sausage', 'Dough', 'Cheese']
	};

	const shoppingList = ['Milk', 'Flour', ...deepDish.ingredients];

	//spreading into a function
	const inventors = ['Einstein', 'Newton', 'Galileo'];
	const newInventors = ['Musk', 'Jobs'];

	inventors.push(...newInventors);

	//rest - the opposite of spread. takes multiple things and packs them into a single array
	//useful if you cant use the arguments object (one arg needs to be applied to the 'rest' of the args)

	function convertCurrency(rate, ...amounts){
		return amounts.map(amount => amount * rate);
	}

	const amounts = convertCurrency(1.54, 10, 23, 52, 1, 56);

//********************
//	OBJECT LITERALS
//********************

	//if the property name and variable name are the same, no need to repeat
	const first = 'snickers';
	const last = 'bos';
	const age = 2;

	const dog = {
		first, 
		last, 
		age
	};

	//method definitions inside an object - can leave out 'function' and the colon
	const modal = {
		create() {

		},
	};

	// using javascript within property name
	const key = 'pocketColor';
	const value = '#ffc600';

	const tShirt =  {
		[key]: value,
		[`${key}Opposite`]: invertColor(value);
	};

	//another example
	const keys = ['size', 'color', 'weight'];
	const values = ['Medium', 'red', 100];

	const shirt = {
		[keys.shift()]: values.shift();
		[keys.shift()]: values.shift();
		[keys.shift()]: values.shift();
	}


//********************
//	PROMISES
//********************

	//a promise is something that will happen later
	const postsPromise = fetch(url);

	console.log(postsPromise); // will return immediately with no data

	postsPromise.then(data => {
		console.log(data); //waits til response, then returns
	});

	//.then() fires only on success. use .catch() to deal with failures

	postsPromise
		.then(data => data.json())
		.then(data => { console.log(data)})
		.catch((err) => {
			console.error(err);
		})

	//promise constructor
	const p = new Promise( (resolve, reject) => {
		setTimeout(() => {
			resolve('Hi there');
		}, 1000);

		setTimeout(() => {
			reject('Screw you!');
		}, 1000);
	});

	p
		.then(data => {
			console.log(data);
		})
		.catch(err => {
			console.error(err);
		})


	//chaining promises
	//a simulated database:
	const posts = [
		{title: 'I love JS', author: 'Wes Bos', id: 1},
		{title: 'CSS!', author: 'Chris Coyier', id: 2},
		{title: 'Dev tools tricks', author: 'Addy Osmani', id: 3},
	];

	const authors = [
		{name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Dev'}, 
		{name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS tricks'},
		{name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Google'},
	];

	function getPostsById(id) {
		//create a new promise
		return new Promise ((resolve, reject) => {
			//find the post we want
			const post = posts.find(post => post.id === id);

			if(post) {
				resolve(post); //send the post back
			} else {
				reject( Error('No post found'));
			}
		})
	}

	function hydrateAuthor(post) {
		//returns the author object rather than just the author name string
		return new Promise(( resolve, reject) => {
			const authorDetails = authors.find (person => person.name === post.author);

			if(authorDetails) {
				post.author = authorDetails;
				resolve(post);

			} else {
				reject ( Error('No author found'));
			}

		})
	}

	getPostsById(2)
		.then(post => {
			console.log(post);
			return hydrateAuthor(post);
		})
		.then( post => {
			console.log(post);
		})
		.catch(err => {
			console.error(err);
		});

	//simultaneous promises, for when responses dont depend on each other

	const weather = new Promise (etc);
	const tweets = new Promise (etc);

	Promise
		.all([weather, tweets]);
		.then(responses => {
			console.log(responses);
		})

	//.all will return everything after the slowest response returns

//********************
//	SYMBOLS
//********************

	//a new primitive type
	//a unique descriptor that helps to avoid naming collisions
	//NOT iterable

	const wes = Symbol('wes');
	const person = Symbol('wes');

	console.log(wes === person);
	//>> false


//********************
//	CLASSES
//********************


	//class declarations
	class Dog {

	};

	//class expression
	const Dog = class{

	};

	//constructor method is required - NOTE: no commas between methods
	class Dog {
		constructor(name, breed){
			this.name = name;
			this.breed = breed;
		} 

		bark(){
			console.log('Bark!');
		}

		//static method - can only be called on the prototype, not instances 
		static info(){
			console.log('A dog is a mammal');
		}

		//getters and setters
		get description (){
			return this.name;
		}

		set nicknames(value) {
			this.nick = value;
		}
	}

	//extending classes
	class Animal {
		constructor(name) {
			this.name = name;
			this.thirst = 100;
		}
		drink(){
			this.thirst -= 10;
			return this.thirst;
		}
	}

	const rhino = new Animal('rhino');

	class Dog extends Animal {

		constructor(name, breed){
			//super() calls the class being extended
			super(name);
			//without super, 'this' is not bound within the child class
			this.name = name;
			this.breed = breed;
		}

	}

	const snickers = new Dog('snickers');

	//extending arrays
	class MovieCollection extends Array {
		constructor(name, ...items){
			super(...items);
			this.name = name;
		}

		add(movie){
			this.push(movie);
		}

		topRated(limit = 10){
			return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
		}
	}

	const movies = new MovieCollection('Fave movies', 
		{ name: 'Star Wars', stars: 10},
		{ name: 'Indiana Jones', stars: 9},
		{ name: 'Mad Max', stars: 7},
	);

//********************
// GENERATORS
//********************

	//a generator is a function that you can start and stop and can pass additional arguments at a later point
	function* listPeople () {
		yield 'Wes';
		yield 'Kait';
		yield 'Snickers';
	}
	//will return 'Wes' the first time called, 'Kait' the second time called, etc

	//invoke and store generator in a variable
	const people = listPeople();
	//>>people
	//>>listPeople {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window, [[GeneratorLocation]]: Object}

	//>>people.next()
	//>>Object {value: "Wes", done: false}
	//returns done: false until all yields have been returned

	//use case: alternative to loops
	const inventors = [
		{first: 'Albert', last: 'Einstein', year: 1879},
		{first: 'Isaac', last: 'Newton', year: 1643},
		{first: 'Galileo', last: 'Galilei', year: 1564},
	];

	function* loop(arr) {
		for (const item of arr) {
			yield item;
		}
	}

	const inventorGen = loop(inventors);

	//generators return 'undefined' once all values are yielded

	//use case: waterfall-like ajax requests

	function ajax(url) {
		fetch(url).then(data => data.json()).then(data => dataGen.next(data));
	}


	//responses are stored in variables, so can be used in subsequent yields
	function* steps() {
		const url1Info = yield ajax(url1);
		const url2Info = yield ajax(url2 + url1Info[0]);
		const url3Info = yield ajax(url3);

	}

	const dataGen = step();
	dataGen.next(); //kicks off the waterfall

	//looping through a generator
	function* lyrics() {
		yield 'dont tell my heart';
		yield 'my achey breaky heart';
		yield 'i just dont think hed understand';
	}

	const achy = lyrics();

	for(const line of achy){
		console.log(line);
	}

//********************
// PROXIES
//********************

	//proxies allow you to overwrite or hijack default actions of objects
	const person = { name: 'Wes', age: 100};
	const personProxy = new Proxy(person, {
		get(target, name){
			console.log('someone is asking for ', target, name);
			return "nahhhh";
		}
	});

	personProxy.name = 'Wesley';
	personProxy.name
	//>>someone is asking for  Object {name: "Wesley", age: 100} name
	//>>"nahhhh"

	//allow you to set limitations on data types etc
	const personProxy = new Proxy(person, {
		set(target, name, value) {
			if(typeof value === 'string') {
				target[value] = value.trim();
			}
		}
	});

	personProxy.last = 99;
	//>> Proxy {name: "Wes", age: 100}

//********************
//	SETS
//********************


	//sets are unique arrays - you can only add the same item once
	//CANNOT access by index
	//loop over with .next() or for-of like generators
	//can be populated by using .add(value), or by passing it an array on creation
	const dogs = ['snickers', 'sunny'];

	const dogSet = new Set(dogs);

	dogSet.add('spot');

	//can search with .has()

	// WeakSets are the same as above, but can only contain objects, not primitives. They also CANNOT be iterated over. WeakSets do not have a .clear() method - they are automatically garbage collected. If they contain a variable that is later deleted, it is deleted within the set as well

//********************
// MAPS
//********************

	//like Sets but for objects
	const dogs = new Map ();

	dogs.set('snickers', 3);
	dogs.set('sunny', 2);
	dogs.set('hugo', 10);

	//can be iterated like so:
	dogs.forEach((val, key) => console.log(vale, key));

	//or
	for (const dog of dogs){
		console.log(dog);
	}

	//an object can be a key in a map - useful for storing metadata
	const clickCounts = new Map();
	const buttons = document.querySelectorAll('button');

	buttons.forEach(button => {
		clickCounts.set(button, 0);
		button.addEventListener('click', function() {
			const val = clickCounts.get(this);
			clickCounts.set(this, val + 1);
		})
	});

	//WeakMaps have the same properties as WeakSets above


