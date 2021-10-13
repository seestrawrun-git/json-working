let url = "http://api.open-notify.org/astros.json";
let data;

function preload(){
	data = loadJSON(url);
}

function setup() {
	createCanvas(400, 300);
	console.log(data.people[0].name);
}

function draw() { 
	push();
	for(let i = 0; i<data.people.length; i++) {
		text(data.people[i].name, 10, i * 10 + 20);
	}

}