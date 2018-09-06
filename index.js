// A driver has many trips, and has many passengers through trips.
// new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
let store = {drivers: [], passengers: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
}

class Passenger {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.passengers.push(this)
  }
}




// A trip belongs to a driver and belongs to a passenger.
// new Trip() - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes id, driverId, and passengerId
// driver() - returns the driver associated with the trip
// passenger() - returns the passenger associated with the trip
