
    mapboxgl.accessToken = mapToken;
    console.log(mapToken);
    const map = new mapboxgl.Map({
    container: 'map', // container ID
     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 8 // starting zoom
    });
    

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');
    const marker1 = new mapboxgl.Marker({color:"red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset:20,'top-right': [0, 0]}).setHTML(`<h4>${listing.title}</h4><p>Exact location provided after booking.</p>`))
    .addTo(map);