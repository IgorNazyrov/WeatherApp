export default async function ReverseGeocode (latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log("Reverse Geocoding data:", data)
    if (data && data.address) {
      return data.address.city || data.address.town || data.address.village || null
    } else {
      console.log("Reverse Geocoding: No address found")
      return null
    }
  } catch (error) {
    console.error("Reverse Geocoding error:", error)
    return null
  }
}