
function initMap() 
{

    // Map option, this sets the map to a certain location
    //in this case it is Culver City
    // here various features in Google Maps can be turned off or on
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

    //Add Markers to Array based on lat and long
    let MarkerArray = [ 
        {
            location: { lat: 34.0099, lng: -118.4960},
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
    //loop to add markers in array to map
    for (let i = 0; i < MarkerArray.length; i++) {
        addMarker(MarkerArray[i]);
    }

    //this function will contain functionality for the markers
    function addMarker(property) 
    {
       
        //sets location based on lat and long from array
        const marker = new google.maps.Marker({
            position: property.location,
            map: map,
        });

        //if want to use custom icon for the markers will be done here
        if (property.imageIcon) {
            // set image icon
            marker.setIcon(property.imageIcon)
        }

        //this if statement relates to event handling for the markers
        if (property.content) 
        {
            //used h4 to make the display window small
            temp = "<h4>"+property.content+"</h4>"
            const detailWindow = new google.maps.InfoWindow({
                
                content: temp
            });

            //if mouse hovers over marker then display info window and search name with Wikipedia
            marker.addListener("mouseover", () => {
                detailWindow.open(map, marker);
                handleSubmit(property.content)
    
            })

        }

    }
}