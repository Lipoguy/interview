export type RideStatus = 'scheduled' | 'in_progress' | 'completed' | 'cancelled'

export type Coordinates = {
  lat: number
  lng: number
}

export type Place = {
  label: string
  coordinates: Coordinates
}

export type Ride = {
  id: string
  riderName: string
  time: string
  status: RideStatus
  source: Place
  destination: Place
  driverName: string
  vehicleId: string
}
