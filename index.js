// A driver has many trips, and has many passengers through trips.
//
// new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
}

let passengerId = 0

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
}

let tripId = 0

class Trip {
  constructor(name, user) {
    this.id = ++tripId
    this.name = name
    if(user) {
      this.userId = user.id
    }
    store.trips.push(this)
  }
  setUser(user){
    this.userId = user.id
  }
  user() {
    return store.users.find(function(user) {
      return user.id === this.userId
    })
  }
}


// A trip belongs to a driver and belongs to a passenger.
// new Trip() - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes id, driverId, and passengerId
// driver() - returns the driver associated with the trip
// passenger() - returns the passenger associated with the trip
