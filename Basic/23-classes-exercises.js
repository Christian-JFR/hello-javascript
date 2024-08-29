/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Crea una clase que reciba dos propiedades

class User {
	constructor(name = "", mail = "") {
		this.name = name;
		this.mail = mail;
	}

	// 2. Añade un método a la clase que utilice las propiedades
	welcome() {
		console.log(`Welcome ${this.name} -- Mail: ${this.mail}`);
	}
	// 4. Añade un método estático a la primera clase
	static staticWelcome() {
		console.log("Welcome this is the User Class");
	}
}

const christian = new User("Christian", "chris@mail.com");
console.log(christian);
// 3. Muestra los valores de las propiedades e invoca a la función
console.log(christian.name);
console.log(christian.mail);
christian.welcome();

// 5. Haz uso del método estático
User.staticWelcome();

// 6. Crea una clase que haga uso de herencia
class SuperUser extends User {
	constructor(name, mail, mod = true) {
		super(name);
		super(mail);
		this.mod = mod;
	}
}

// 7. Crea una clase que haga uso de getters y setters
class Enemy {
	// 8. Modifica la clase con getters y setters para que use propiedades privadas
	#name;
	#hp;
	#atk;
	#spd;

	constructor(name = "enemy", hp = 0, atk = 0, spd = 0) {
		this.#name = name;
		this.#hp = hp;
		this.#atk = atk;
		this.#spd = spd;
	}

	set name(newName) {
		this.#name = newName;
	}
	set hp(newHp) {
		this.#hp = newHp;
	}
	set atk(newAtk) {
		this.#atk = newAtk;
	}
	set spd(newSpd) {
		this.#spd = newSpd;
	}

	get name() {
		return this.#name;
	}
	get hp() {
		return this.#hp;
	}
	get atk() {
		return this.#atk;
	}
	get spd() {
		return this.#spd;
	}

	encounter() {
		console.log(`a ${this.#name} appears`);
	}
}

// 9. Utiliza los get y set y muestra sus valores
const enemy1 = new Enemy("golem", 100, 15, 5);
console.log(enemy1);
console.log(enemy1.name);
console.log(enemy1.hp);
console.log(enemy1.atk);
console.log(enemy1.spd);
enemy1.encounter();

const enemy2 = new Enemy();
console.log(enemy2);
enemy2.name = "goblin";
console.log(enemy2.name);
enemy2.hp = 30;
console.log(enemy2.hp);
enemy2.atk = 20;
console.log(enemy2.atk);
enemy2.spd = 10;
console.log(enemy2.spd);
enemy2.encounter();

// 10. Sobrescribe un método de una clase que utilice herencia
class Boss extends Enemy {
	constructor(name = "Boss", hp = 0, atk = 0, spd = 0) {
		super(name, hp, atk, spd);
	}

	encounter() {
		console.log(`The Boss ⭐${this.name}⭐ appears`);
	}
}

const boss1 = new Boss("Black Dragon", 500, 50, 30);
console.log(boss1);
boss1.encounter();
