/**
 * Cùng logic giá với Booking.controller.calculatePriceBySeats
 */
function calculatePriceBySeats(seats, distance) {
  let basePrice = 0;
  let extraFee = 0;

  switch (seats) {
    case 4:
      basePrice = 1500000;
      extraFee = 10000;
      break;
    case 7:
      basePrice = 1800000;
      extraFee = 11000;
      break;
    case 9:
      basePrice = 2600000;
      extraFee = 12000;
      break;
    case 16:
      basePrice = 2000000;
      extraFee = 9000;
      break;
    case 29:
      basePrice = 3000000;
      extraFee = 11000;
      break;
    case 45:
      basePrice = 5700000;
      extraFee = 20000;
      break;
    default:
      basePrice = 1500000;
      extraFee = 10000;
  }

  const baseDistance = 100;
  if (distance <= baseDistance) {
    return basePrice;
  }
  return basePrice + (distance - baseDistance) * extraFee;
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

module.exports = { calculatePriceBySeats, haversineKm };
