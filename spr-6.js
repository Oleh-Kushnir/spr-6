// Основний клас автомобіля
class Car {
  constructor() {
    this.description = "Unknown Car";
  }

  getDescription() {
    return this.description;
  }

  cost() {
    return 0;
  }
}

// Конкретні типи автомобілів
class Sedan extends Car {
  constructor() {
    super();
    this.description = "Sedan";
  }

  cost() {
    return 20000;
  }
}

class SUV extends Car {
  constructor() {
    super();
    this.description = "SUV";
  }

  cost() {
    return 30000;
  }
}

// Декоратори (додаткове обладнання)
class CarDecorator extends Car {
  constructor(car) {
    super();
    this.car = car;
  }

  getDescription() {
    return this.car.getDescription();
  }
}

class LeatherSeats extends CarDecorator {
  constructor(car) {
    super(car);
  }

  getDescription() {
    return this.car.getDescription() + ", Leather Seats";
  }

  cost() {
    return this.car.cost() + 1500;
  }
}

class GPSNavigation extends CarDecorator {
  constructor(car) {
    super(car);
  }

  getDescription() {
    return this.car.getDescription() + ", GPS Navigation";
  }

  cost() {
    return this.car.cost() + 1200;
  }
}

let sedan = new Sedan();

console.log(sedan.getDescription() + " $" + sedan.cost());

let suv = new SUV();
suv = new LeatherSeats(suv);
suv = new GPSNavigation(suv);

console.log(suv.getDescription() + " $" + suv.cost());
