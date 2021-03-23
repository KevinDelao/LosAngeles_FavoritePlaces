function goWiki(term) {

      //let term = userInput.value();
      let url = searchUrl + term;
      return url;
    
  }
function initMap() 
{

    // Map option, this sets the map to a certain location
    //in this case it is Culver City
    var options = {
        center: { lat: 34.0211224, lng: -118.3964665 },
        zoom: 11,
        minZoom:11,
        maxZoom:11,
        draggable: true,
        streetViewControl:false,
        zoomControl:false,
        fullscreenControl:false
        // mapTypeId:google.maps.mapTypeId.HYBRID
    }
 
    //New Map, creates it based on options location
    map = new google.maps.Map(document.getElementById("map"), options)

    //listen for clicks on map, uses map object above
    //each click calls add Marker function
    //not saved, need database for that
    // google.maps.event.addListener(map,"click",(event)=>{
    //     //add marker
    //     addMarker({location:event.latLng});
    // })
    //custom icons


    //~Add Markers to Array
    let MarkerArray = [ 
        {
            location: { lat: 34.0099, lng: -118.4960},
            // imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
            content: 'Santa Monica Pier'
        },
        {
            location: { lat: 34.0170, lng: -118.4010 }, 
             
            content: 'Sony Pictures Studios'
        },
        {
            location:{lat:33.9655675,lng:-118.4450779},
            content: "Ballona Wetlands"
        },
        {
            location:{lat:33.9850,lng:-118.4695},
            content: "Venice Beach"
        },
        {
            location:{lat:34.0093,lng:-118.2848},
            content: "California Science Center"
        },
        {
            location:{lat:34.04157862985507, lng:-118.4278502},
            content: 'The Apple Pan'
        },
        {
            location:{lat:34.0689, lng:-118.4452},
            content: 'UCLA'
        },
        {
            location:{lat:34.1184, lng:-118.3004},
            content: 'Griffith Observatory'
        },
        {
            location:{lat:34.0739, lng:-118.2400},
            content: 'Dodger Stadium'
            
        },
        {
            location:{lat:34.0082, lng:-118.4145},
            content: "Tito's Tacos"
        }
    ]
    //loop to add markers in array
    for (let i = 0; i < MarkerArray.length; i++) {
        addMarker(MarkerArray[i]);
    }

    function addMarker(property) 
    {
       
        const marker = new google.maps.Marker({
            position: property.location,
            map: map,
        });

        // Check for custom Icon

        if (property.imageIcon) {
            // set image icon
            marker.setIcon(property.imageIcon)
        }

        if (property.content) 
        {

           
            temp = "<h4>"+property.content+"</h4>"
            const detailWindow = new google.maps.InfoWindow({
                
                content: temp
            });

            marker.addListener("mouseover", () => {
                detailWindow.open(map, marker);
                handleSubmit(property.content)
    
            })

        }

    }
}