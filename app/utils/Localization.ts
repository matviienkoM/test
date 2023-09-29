import * as Location from 'expo-location'

export type City = {
  name: string;
  latitude: number;
  longitude: number;
  region: string;
  id: number;
};

export const cities: City[] = [
  { id: 0, name: 'Dubai', latitude: 25.276987, longitude: 55.296249, region: 'UAE' },
  { id: 1, name: 'Miami', latitude: 25.7617, longitude: -80.1917902, region: 'USA' },
  { id: 2, name: 'Abu Dhabi', latitude: 24.4539, longitude: 54.3773, region: 'UAE' },
  { id: 3, name: 'Sharjah', latitude: 25.3463, longitude: 55.4209, region: 'UAE' },
];

export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
};

export const findClosestCity = async (): Promise<City | null> => {
  let closestCity: City | null = null;
  let minDistance = Infinity;

  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission not granted...');
      return closestCity;
    }

    const location = await Location.getCurrentPositionAsync({});
    for (const city of cities) {
      const distance = calculateDistance(
        location.coords.latitude,
        location.coords.longitude,
        city.latitude,
        city.longitude
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestCity = city;
      }
    }
    return closestCity;
  } catch (error) {
    console.error('Error getting location:', error);
    return closestCity;
  }
};
