
//fetch data from site of the location of ISS space station
const initMap = async function(){
    let response = await fetch("http://api.open-notify.org/iss-now.json")
    let data = await response.json()
    // console.log(data)
  
    //find position of station
    let latPos = data.iss_position.latitude;
    let lonPos = data.iss_position.longitude;
  
    //transfer (lat, lon) positions into number (previously string) and save in variable
    let ISSStation = {
        lat: Number(latPos), 
        lng: Number(lonPos)
    };
    
  
    //pinpoint station on google maps
    let map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 4, 
            center: ISSStation
        }
        
    )
    
    //add marker
    let marker = new google.maps.Marker(
        {
            position: ISSStation, 
            map: map
        })
    

    // return data;
    // map.panTo([latPos, lonPos], animate=true)
  }
  initMap()
  