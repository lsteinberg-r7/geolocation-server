


export namespace Geometry {

  export function calculateDistance(lat1: string, lon1: string, lat2: string, lon2: string) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      let radlat1 = Math.PI * parseFloat(lat1) / 180;
      let radlat2 = Math.PI * parseFloat(lat2) / 180;
      let theta = parseFloat(lon1) - parseFloat(lon2);
      let radtheta = Math.PI * theta / 180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = Math.round(dist * 60 * 1.1515 * 1.609344);
      return dist;
    }
  }

}