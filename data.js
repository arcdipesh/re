var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room-night",
      "name": "Living Room (NIght)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4035938092030337
      },
      "linkHotspots": [
        {
          "yaw": -1.6769523405462365,
          "pitch": 0.07130077082170061,
          "rotation": 1.5707963267948965,
          "target": "2-kitchen-day"
        },
        {
          "yaw": -0.005396263913885591,
          "pitch": 0.03098070500223926,
          "rotation": 6.283185307179586,
          "target": "1-living-room-day"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room-day",
      "name": "Living Room (Day)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4035938092030337
      },
      "linkHotspots": [
        {
          "yaw": -0.01423946795426545,
          "pitch": 0.027517100425937357,
          "rotation": 1.5707963267948965,
          "target": "0-living-room-night"
        },
        {
          "yaw": -1.7098063342065366,
          "pitch": -0.01838389289410003,
          "rotation": 1.5707963267948965,
          "target": "2-kitchen-day"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-day",
      "name": "Kitchen (day)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.05707617716132951,
        "pitch": -0.008575929587795627,
        "fov": 1.4035938092030337
      },
      "linkHotspots": [
        {
          "yaw": 0.9690546918659919,
          "pitch": 0.06665818053380512,
          "rotation": 4.71238898038469,
          "target": "1-living-room-day"
        },
        {
          "yaw": -0.8020499933595833,
          "pitch": -0.10105357824481942,
          "rotation": 0,
          "target": "3-kitchen-night"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-night",
      "name": "KItchen (Night)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.10791866086686852,
        "pitch": 0.013361168095318731,
        "fov": 1.4035938092030337
      },
      "linkHotspots": [
        {
          "yaw": 0.9658150562614391,
          "pitch": 0.07416457397640386,
          "rotation": 4.71238898038469,
          "target": "1-living-room-day"
        },
        {
          "yaw": -0.7898436250458296,
          "pitch": -0.07259330378765938,
          "rotation": 0,
          "target": "2-kitchen-day"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "R3E-Rendered 3d Environment",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
