class Vehicles {
	wheels;
	engineCapacity;
	color;
	constructor(wheels, engineCapacity, color) {
		this.wheels = wheels;
		this.engineCapacity = engineCapacity;
		this.color = color;
	}
	getValues() {
		return `Our Vehicle have - ${this.wheels}wheels, and  engine capacity of - ${this.engineCapacity} one of the availble colors is ${this.color}`;
	}

	static AllVehicles(objectArray) {
		let engineLowestCapacity = 0;
		let LargestEngine;
		for (let i = 0; i < objectArray.length; i++) {
			if (objectArray[i].engineCapacity > engineLowestCapacity) {
				engineLowestCapacity = objectArray[i].engineCapacity;
				LargestEngine = objectArray[i];
			}
		}
		return LargestEngine;
	}
}

class Truck extends Vehicles {
	name;
	constructor(name, wheels, engineCapacity, color) {
		super(wheels, engineCapacity, color);
		this.name = name;
	}
	truckTake() {
		return `I have - ${this.name} and ${super.getValues()}`;
	}
	get Outcome() {
		return this.upperCaseValue();
	}
	upperCaseValue() {
		return this.name.toUpperCase();
	}
}
class SportCar extends Vehicles {
	name;
	constructor(name, wheels, engineCapacity, color) {
		super(wheels, engineCapacity, color);
		this.name = name;
	}
	SportCarTake() {
		return `I have - ${this.name} and ${super.getValues()}`;
	}
}
class Airplane extends Vehicles {
	name;
	constructor(name, wheels, engineCapacity, color) {
		super(wheels, engineCapacity, color);
		this.name = name;
	}
	AirplaneTake() {
		return `I have - ${this.name} and ${super.getValues()}`;
	}
}
const Truck1 = new Truck("truck", "4x4", 4000, "black");
const SportCar1 = new SportCar("SportCar", "bmx", 50, "blue");
const Airplane1 = new Airplane("Airplane", "50", 400000, "red");

console.log(Truck1.truckTake());
console.log(SportCar1.SportCarTake());
console.log(Airplane1.AirplaneTake());

const AllObjects = [Truck1, SportCar1, Airplane1];
console.log(AllObjects);
console.log(Vehicles.AllVehicles(AllObjects));
console.log(Truck1.Outcome);

let trIndex = 0;
function creatNewTableRow() {
	// console.log(nameId.value);
	// console.log(wheelsId.value);
	// console.log(engineCapacityId.value);
	// console.log(colorId.value);
	// console.log(selectId.value);
	const userChoice = creatUserObject(selectId.value);
	let trId = `trId${trIndex++}`;
	tableId.innerHTML += `<tr id="${trId}"></tr>`;
	for (const key in userChoice) {
		document.getElementById(trId).innerHTML += `<td>${userChoice[key]}</td>`;
	}
	document.getElementById(trId).innerHTML += `<td>${selectId.value}</td>`;
}

function creatUserObject(param) {
	switch (param) {
		case "Truck":
			return new Truck(
				nameId.value,
				wheelsId.value,
				engineCapacityId.value,
				colorId.value,
				selectId.value
			);
		case "SportCar":
			return new SportCar(
				nameId.value,
				wheelsId.value,
				engineCapacityId.value,
				colorId.value,
				selectId.value
			);
		case "Airplane":
			return new Airplane(
				nameId.value,
				wheelsId.value,
				engineCapacityId.value,
				colorId.value,
				selectId.value
			);
		default:
			break;
	}
}
