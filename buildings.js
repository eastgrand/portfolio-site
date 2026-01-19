/**
 * Building configurations for the portfolio map
 * 
 * Each building has:
 * - id: unique identifier matching content.js
 * - name: display name
 * - coordinates: [lng, lat]
 * - icon: emoji for marker
 * - bearing: camera angle when focused (optional)
 * - pitch: camera tilt when focused (optional)
 * - zoom: camera zoom when focused (optional)
 */

const BUILDINGS = {
    // Michigan State Capitol - "What I Believe"
    // Civic values, democracy, transparency
    capitol: {
        id: 'capitol',
        name: 'What I Believe',
        coordinates: [-84.5553, 42.7336],
        icon: '🏛️',
        // Camera position when this building is selected
        camera: {
            center: [-84.5553, 42.7325],
            zoom: 17,
            pitch: 60,
            bearing: -20
        }
    },
    
    // The Fledge - "Who I Want to Work With"
    // Co-ops, community benefit, collective ownership
    // 1300 Eureka St, Lansing, MI
    fledge: {
        id: 'fledge',
        name: 'Who I Want to Work With',
        coordinates: [-84.5605, 42.7270],
        icon: '🤝',
        camera: {
            center: [-84.5605, 42.7260],
            zoom: 17.5,
            pitch: 55,
            bearing: 30
        }
    },
    
    // Cooley Law School Stadium (or alternative: a prominent downtown building)
    // "What I've Built" - the work, the demos
    // Using the stadium area as it's recognizable
    // Alternative: Could use Boji Tower or another downtown landmark
    stadium: {
        id: 'stadium',
        name: "What I've Built",
        coordinates: [-84.5522, 42.7330],
        icon: '🔧',
        camera: {
            center: [-84.5522, 42.7320],
            zoom: 16.5,
            pitch: 60,
            bearing: 45
        }
    }
};

// Initial map view - shows all three buildings
const INITIAL_VIEW = {
    center: [-84.5555, 42.7305],
    zoom: 15,
    pitch: 50,
    bearing: -10
};

// Map style - using dark style for dramatic effect
// Options: 'mapbox://styles/mapbox/dark-v11' or 'mapbox://styles/mapbox/navigation-night-v1'
const MAP_STYLE = 'mapbox://styles/mapbox/dark-v11';

// 3D building extrusion settings
const BUILDING_LAYER_CONFIG = {
    id: '3d-buildings',
    source: 'composite',
    'source-layer': 'building',
    filter: ['==', 'extrude', 'true'],
    type: 'fill-extrusion',
    minzoom: 14,
    paint: {
        'fill-extrusion-color': '#1a1a2e',
        'fill-extrusion-height': ['get', 'height'],
        'fill-extrusion-base': ['get', 'min_height'],
        'fill-extrusion-opacity': 0.8
    }
};

// Highlighted building style (when clickable buildings are shown)
const HIGHLIGHT_COLOR = 'rgba(74, 158, 255, 0.4)';

export { BUILDINGS, INITIAL_VIEW, MAP_STYLE, BUILDING_LAYER_CONFIG, HIGHLIGHT_COLOR };
