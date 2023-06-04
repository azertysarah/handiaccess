import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css',"./lib/Flat-UI-master/dist/css/flat-ui.css",'./lib/Flat-UI-master/dist/css/flat-ui.min.css','./lib/Flat-UI-master/dist/css/vendor/bootstrap/css/bootstrap.min.css','./lib/leaflet/leaflet.css']
})
export class MapComponent implements OnInit {
	
	map: any;
	markers: any[] = [];
	  ngOnInit() {
	    this.initializeMap();
	  }
	  ngDropdown = 1;
		
	  initializeMap() {
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

			
		//做一个maker表示定位在这里并可以拖动
		  const marker1 = L.marker([48.824564405482704, 2.2798541473356124], { draggable: true }).addTo(map);
		  const marker2 = L.marker([48.84530304685853, 2.3280012997283848], { draggable: true }).addTo(map);
		  const marker3 = L.marker([48.85816323776277, 2.2943909159992586], { draggable: true }).addTo(map);
		  const marker4 = L.marker([48.84096095104411, 2.320300001825558], { draggable: true }).addTo(map);
		  const marker5 = L.marker([48.86089490600574, 2.336374421220796], { draggable: true }).addTo(map);
		  const marker6 = L.marker([48.873707306639915, 2.295073142504748], { draggable: true }).addTo(map);
		  const marker7 = L.marker([48.859990560256506, 2.3265806679551417], { draggable: true }).addTo(map);
		  const marker8 = L.marker([48.85292525249167, 2.3500265537090854], { draggable: true }).addTo(map);
		  const marker9 = L.marker([48.85650972997763, 2.352576766074719], { draggable: true }).addTo(map);
		  const marker10 = L.marker([48.8662532051589, 2.3124166624875215], { draggable: true }).addTo(map);
		  const marker11 = L.marker([48.85578880153179, 2.312539668180733], { draggable: true }).addTo(map);
		  
		
		marker1.bindPopup("NDL");
		marker2.bindPopup("NDC");
		marker3.bindPopup("Effel Tower");
		marker4.bindPopup("Gare Montpanrnasse");
		marker5.bindPopup("Louvre Museum");
		marker6.bindPopup("Arc de Triomphe");
		marker7.bindPopup("Museum of Orsay");
		marker8.bindPopup("Cathedral of Notre Dame");
		marker9.bindPopup("Hôtel de Ville");
		marker10.bindPopup("Grand Palais");
		marker11.bindPopup("Les Invalides");
		
		
		
		
	
	    // 其他地图初始化代码...
	  }
	  
	
}




