import { RIDES } from '../data/rides'
import type { Ride } from '../types'

export function fetchRides(): Ride[] {
  return RIDES
}
