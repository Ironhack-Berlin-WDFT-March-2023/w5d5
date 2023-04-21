mapboxgl.accessToken = "<your access token>"

// Create map
const map = new mapboxgl.Map({
	container: "map", // Container id
	style: "mapbox://styles/mapbox/streets-v11", // Map-style: https://docs.mapbox.com/api/maps/styles/
	center: [13.404954, 52.520008], // Starting position [lng, lat]
	zoom: 9, // Starting zoom
	projection: "globe" // Display map as 3d globe. Alternatives: equalEarth, naturalEarth
})

// Add navigation
const nav = new mapboxgl.NavigationControl()
map.addControl(nav, "top-left")

// Add popup
const popup = new mapboxgl.Popup({
	closesButton: true
})
popup.setLngLat([13.453281, 52.5329816])
	.setHTML("<h1>Popup text</h1>")
	.addTo(map)

// Add marker
new mapboxgl.Marker({
	color: "red",
	draggable: true
}).setLngLat([13.453281, 52.5329816])
	.addTo(map)
	//.on("dragend", event => console.log(event.target._lngLat))

// Add marker on click on map
// function addMarker(event) {
// 	new mapboxgl.Marker({
// 		color: "blue",
// 	}).setLngLat(event.lngLat)
// 		.addTo(map)
// }

// map.on("click", addMarker)

// Add multiple markers
const coordinates = [
	[13.405, 52.52],
	[13.6, 52.6]
]

coordinates.forEach(coordinate => {
	new mapboxgl.Marker({
		color: "green"
	}).setLngLat(coordinate)
		.addTo(map)
})
