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


    // 做一个maker表示定位在这里并可以拖动
    const marker1 = L.marker([48.824564405482704, 2.2798541473356124], { draggable: true }).addTo(map);
    const marker2 = L.marker([48.84530304685853, 2.3280012997283848], { draggable: true }).addTo(map);
	
	marker1.bindPopup("NDL");
	marker2.bindPopup("NDC");

    const setZoom = () => {
      map.setZoom(15, {
        // animate: false
      }); //设置地图缩放到
    };

    const setZoomIn = () => {
      map.zoomIn(); //图层往里进一个图层，放大
    };

    const setZoomOut = () => {
      map.zoomOut(); //图层往里出一个图层，缩小
    };

    const panTo = () => {
      map.panTo([48.824564405482704, 2.2798541473356124], {
        animate: true,
      }); //地图平移，默认就是true，将地图平移到给定的中心。如果新的中心点在屏幕内与现有的中心点不同则产生平移动作。
    };

    const flyTo = () => {
      map.flyTo([48.824564405482704, 2.2798541473356124]); // 点到点的抛物线动画，平移加缩放动画
    };

    const fitBounds = () => {
      console.log(polygon.getBounds());
      map.fitBounds(polygon.getBounds()); //getBounds（获取边界）：返回地图视图的经纬度边界。
      //平移到一个区域上面，自动判断区域块的大小，合适缩放图层
    };

    const flyToBounds = () => {
      map.flyToBounds(polygon.getBounds()); //getBounds（获取边界）：返回地图视图的经纬度边界。
      //飞到这个多变形区域上面，自动判断区域块的大小，合适缩放图层，将地图视图尽可能大地设定在给定的地理边界内。
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
    ).addTo(map); //地图上绘制一个多边形

// 记录标记点的坐标和名称
var markers = [];

// 添加标记
function addMarker() {
  map.on('click', function(e) {
    var locationName = prompt('Entrer le nom de la place：');
    var marker = L.marker(e.latlng).addTo(map);
    marker.bindPopup(locationName).openPopup();

    // 将标记点的坐标和名称添加到数组中
    var newMarker = {
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      name: locationName,
      marker: marker
    };
    markers.push(newMarker);

    // 绑定删除标记点的事件
    marker.on('click', function() {
      deleteMarker(newMarker);
    });
  });
}

// 删除标记点
function deleteMarker(markerData) {
  // 从地图和数组中移除标记点
  map.removeLayer(markerData.marker);
  markers = markers.filter(function(marker) {
    return marker !== markerData;
  });
}