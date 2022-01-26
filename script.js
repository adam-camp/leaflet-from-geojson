var map = L.map('mapid').setView([38.62,-90.99404], 9);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "House": "Camps",
        "Address": "7727 Jerome Ave"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.32763719558716,
          38.617708742410684
        ]
      }
    }
  ]
}

var feat = L.geoJSON(geojsonFeature).addTo(map);

feat.bindPopup("<b>Hello world! I'm the Camp's 1st  house</b><br>7727 Jerome Ave.").openPopup();

var myLines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "RiverName": "Missouri"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.54725646972656,
            38.681757748501546
          ],
          [
            -90.53146362304688,
            38.700515838688716
          ],
          [
            -90.53558349609375,
            38.72730457751627
          ],
          [
            -90.50262451171875,
            38.74605072069108
          ],
          [
            -90.4833984375,
            38.76586272164814
          ],
          [
            -90.47584533691406,
            38.78352824456894
          ],
          [
            -90.4566192626953,
            38.80868067783546
          ],
          [
            -90.44975280761719,
            38.82045110711473
          ],
          [
            -90.43327331542967,
            38.830614912420565
          ],
          [
            -90.4119873046875,
            38.829545106505996
          ],
          [
            -90.3955078125,
            38.8225909761771
          ],
          [
            -90.37971496582031,
            38.82205601494022
          ],
          [
            -90.36117553710938,
            38.8284752845139
          ],
          [
            -90.34881591796875,
            38.841846903808985
          ],
          [
            -90.34263610839844,
            38.853611850579966
          ]
        ]
      }
    }
  ]
}

var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

var Parks = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Parks": "Forest Park",
        "Has Baseball Field": "Yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.30057907104492,
              38.64744452237617
            ],
            [
              -90.30418395996094,
              38.63370121904403
            ],
            [
              -90.26461601257324,
              38.628672522795796
            ],
            [
              -90.26710510253906,
              38.63323188898502
            ],
            [
              -90.26556015014647,
              38.644025702937036
            ],
            [
              -90.30057907104492,
              38.64744452237617
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Parks": "Tower Grove Park",
        "Has Baseball Field": "No"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.24161338806152,
              38.607128949679286
            ],
            [
              -90.26818871498108,
              38.60976146863579
            ],
            [
              -90.26898264884949,
              38.605125152362284
            ],
            [
              -90.26677250862122,
              38.605183841782065
            ],
            [
              -90.24247169494629,
              38.60286976543856
            ],
            [
              -90.24161338806152,
              38.607128949679286
            ]
          ]
        ]
      }
    }
  ]
}

L.geoJSON(Parks, {
    style: function(feature) {
        switch (feature.properties.["Has Baseball Field"]) {
            case 'Yes': return {color: "#990000"};
            case 'No':   return {color: "#003DA5"};
        }
    }
}).addTo(map);

