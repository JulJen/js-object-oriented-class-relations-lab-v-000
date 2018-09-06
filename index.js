// A driver has many trips, and has many passengers through trips.
//
// new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
// trips() - returns all of the trips that a driver has taken
// passengers() - returns all of the passengers that a driver has taken on a trip

let store = { drivers: [], passengers: [], trips: [] }

let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  passengers() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
}



let passengerId = 0

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  driver() {
    return store.drivers.filter(function(driver) {
      return driver.id === this.driverId
    })
  }
}



let tripId = 0

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId

    if(driver) {
      this.driverId = driver.id
    }
    if(passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }
  setDriver(driver){
    this.driverId = driver.id
  }
  setPassenger(passenger){
    this.passengerId = passengerId.id
  }
  driver() {
    return store.drivers.find(function(driver) {
      return driver.id === this.driverId
    })
  }
  passenger() {
    return store.passengers.find(function(passenger) {
      return passenger.id === this.passengerId
    })
  }
}


// A trip belongs to a driver and belongs to a passenger.
// new Trip() - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes id, driverId, and passengerId
// driver() - returns the driver associated with the trip
// passenger() - returns the passenger associated with the trip
