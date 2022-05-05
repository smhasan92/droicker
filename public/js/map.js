
getLocations();
function loadMap(data) {
  L.mapquest.key = 'kB3z9OhJQGWY8bQmYfKSp19KGeepuFEb';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [24.8607, 67.0011],
    layers: L.mapquest.tileLayer('map'),

    zoom: 12
  });


  //// Generate the feature group containing markers from the geocoded locations
  var featureGroup = generateMarkersFeatureGroup(data);
  // Add markers to the map and zoom to the features
  featureGroup.addTo(map);
  map.fitBounds(featureGroup.getBounds());
}

function generateMarkersFeatureGroup(response) {
  var group = [];
  for (var i = 0; i < response.length; i++) {
    // var location = response[i].geometry.coordinates[0];
    var locationLatLng = [response[i].geometry.coordinates[0], response[i].geometry.coordinates[1]];

    // Create a marker for each location
    var marker = L.marker(locationLatLng, { icon: L.mapquest.icons.marker() }).bindPopup('it works')

    group.push(marker);
  }
  return L.featureGroup(group);
}


// Fetch locations from API

async function getLocations() {
  // const res = await fetch('/api/v1/stores');
  const res = await fetch('/api/v1/location');
  const data = await res.json();

  const stores = data.data.map(store => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          store.location.coordinates[0],
          store.location.coordinates[1]
        ]
      },
      properties: {
        storeId: store.storeId,
        icon: ''
      }
    };
  });

  loadMap(stores);
}