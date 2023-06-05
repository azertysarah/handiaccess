const map = L.map('mapDiv', {
      crs: L.CRS.EPSG3857,
      zoomControl: true,
      minZoom: 1,
      attributionControl: true,
    }).setView([48.824564405482704, 2.2798541473356124], 15);
    let Baselayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker1 = L.marker([48.824564405482704, 2.2798541473356124], { draggable: true }).addTo(map);
    const marker2 = L.marker([48.84530304685853, 2.3280012997283848], { draggable: true }).addTo(map);
	
    marker1.bindPopup("NDL");
    marker2.bindPopup("NDC");

    const setZoom = () => {
      map.setZoom(15, {
        // animate: false
      });
    };

    const setZoomIn = () => {
      map.zoomIn();
    };

    const setZoomOut = () => {
      map.zoomOut();
    };

    const panTo = () => {
      map.panTo([48.824564405482704, 2.2798541473356124], {
        animate: true,
      });
    };

    const flyTo = () => {
      map.flyTo([48.824564405482704, 2.2798541473356124]); // 点到点的抛物线动画，平移加缩放动画
    };

    const fitBounds = () => {
      console.log(polygon.getBounds());
      map.fitBounds(polygon.getBounds());
    };

    const flyToBounds = () => {
      map.flyToBounds(polygon.getBounds()); 
    };

    // 绑定一个监听事件
    map.on('zoomend', function (e) {
      console.log(e.target._zoom);
    });

    let polygon = L.polygon(
      [
        [37, -109.05],
        [41, -109.03],
        [41, -102.05],
        [37, -102.04],
      ],
      [40.774, -74.125],
      {
        color: 'green',
        fillColor: '#f03',
        fillOpacity: 0.5,
      }
    ).addTo(map);

var markers = [];

function addMarker() {
  map.on('click', function(e) {
    var locationName = prompt('Entrer le nom de la place：');
    var marker = L.marker(e.latlng).addTo(map);
    marker.bindPopup(locationName).openPopup();

    var newMarker = {
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      name: locationName,
      marker: marker
    };
    markers.push(newMarker);

    marker.on('click', function() {
      deleteMarker(newMarker);
    });
  });
}

function deleteMarker(markerData) {
  map.removeLayer(markerData.marker);
  markers = markers.filter(function(marker) {
    return marker !== markerData;
  });
}