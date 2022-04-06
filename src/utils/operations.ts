var EARTH_RADIUS = 6378.137; // radio de la Tierra  
// Convertir el ángulo expresado en grados a un ángulo aproximadamente igual expresado en radianes java Math.toRadians  
function rad(d) {
  return d * Math.PI / 180.0;
}

export const getDistance = (start, end) => {
  console.log(start, end)

  const rad = function (x) {
    return x * Math.PI / 180;
  }

  var R = 6378.137;//Radio de la tierra en km
  var dLat = rad(end.lat - start.lat);
  var dLong = rad(end.lon - start.lon);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(start.lat)) * Math.cos(rad(end.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d.toFixed(3);//Retorna tres decimales

} 