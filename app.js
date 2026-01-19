/**
 * Main application script for the portfolio map
 * 
 * SETUP: Replace YOUR_MAPBOX_TOKEN with your actual Mapbox access token
 * Get one free at: https://account.mapbox.com/
 */

// ============================================
// CONFIGURATION - UPDATE THIS
// ============================================
mapboxgl.accessToken = 'pk.eyJ1IjoicmVnaW9ucHVsc2UiLCJhIjoiY21kMGFjNThnMDEyNzJrb2hibTZ3YWhhZyJ9.RDMe4N-clK6FZ1EVODbpng';

// ============================================
// Building & Content Data (inline for simplicity)
// ============================================

const BUILDINGS = {
    capitol: {
        id: 'capitol',
        name: 'What I Believe',
        coordinates: [-84.5553, 42.7336],
        icon: '🏛️',
        camera: {
            center: [-84.5553, 42.7325],
            zoom: 17,
            pitch: 60,
            bearing: -20
        }
    },
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

const INITIAL_VIEW = {
    center: [-84.5555, 42.7305],
    zoom: 15,
    pitch: 50,
    bearing: -10
};

const CONTENT = {
    capitol: {
        title: 'What I Believe',
        location: 'Michigan State Capitol',
        html: `
            <div class="sidebar-header">
                <h2>What I Believe</h2>
                <div class="location">🏛️ Michigan State Capitol</div>
            </div>
            
            <div class="sidebar-section">
                <p>15+ years building geospatial intelligence platforms for federal agencies, research institutions, finance, real estate, politics, and community benefit.</p>
                
                <p>I am interested in building technology that <strong>empowers people</strong>, not surveils or exploits them—tools for transparency, equity, and democratic participation in civic life.</p>
            </div>
            
            <div class="sidebar-section">
                <h3>Core Values</h3>
                <div class="quote">
                    "I believe in collective ownership, worker autonomy, and creating community wealth rather than extracting it."
                </div>
                
                <div class="value-tags">
                    <span class="value-tag">Transparency</span>
                    <span class="value-tag">Democratic Participation</span>
                    <span class="value-tag">Collective Ownership</span>
                    <span class="value-tag">Worker Autonomy</span>
                    <span class="value-tag">Community Wealth</span>
                </div>
            </div>
            
            <div class="sidebar-section">
                <h3>Not Interested In</h3>
                <div class="value-tags">
                    <span class="value-tag negative">Surveillance Tech</span>
                    <span class="value-tag negative">Advertising</span>
                    <span class="value-tag negative">Extraction</span>
                    <span class="value-tag negative">Corporate Theater</span>
                </div>
            </div>
        `
    },
    
    stadium: {
        title: "What I've Built",
        location: 'Downtown Lansing',
        html: `
            <div class="sidebar-header">
                <h2>What I've Built</h2>
                <div class="location">🔧 15+ Years of Production Systems</div>
            </div>
            
            <div class="sidebar-section">
                <h3>Skills</h3>
                <div class="skills-chart">
                    <div class="skill-bar">
                        <div class="label">
                            <span>Geospatial Intelligence</span>
                            <span>15+ yrs</span>
                        </div>
                        <div class="bar"><div class="fill" style="width: 95%"></div></div>
                    </div>
                    <div class="skill-bar">
                        <div class="label">
                            <span>Full-Stack Development</span>
                            <span>12+ yrs</span>
                        </div>
                        <div class="bar"><div class="fill" style="width: 85%"></div></div>
                    </div>
                    <div class="skill-bar">
                        <div class="label">
                            <span>Machine Learning / AI</span>
                            <span>5+ yrs</span>
                        </div>
                        <div class="bar"><div class="fill" style="width: 70%"></div></div>
                    </div>
                    <div class="skill-bar">
                        <div class="label">
                            <span>Data Visualization</span>
                            <span>15+ yrs</span>
                        </div>
                        <div class="bar"><div class="fill" style="width: 90%"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="sidebar-section">
                <h3>Featured Projects</h3>
                
                <div class="project-card">
                    <h4>RegionPulse Intelligence Platform</h4>
                    <p>AI-powered geospatial platform for political campaigns, retail site selection, and civic applications. Neighborhood-level analysis across Michigan.</p>
                    <div class="tech-stack">
                        <span class="tech">React</span>
                        <span class="tech">Next.js</span>
                        <span class="tech">XGBoost</span>
                        <span class="tech">PostGIS</span>
                        <span class="tech">SHAP</span>
                        <span class="tech">NLP</span>
                    </div>
                    <a href="#" class="demo-link">View Demo →</a>
                </div>
                
                <div class="project-card">
                    <h4>Statewide Housing Placement System</h4>
                    <p>Web application helping case workers house mentally ill and developmentally disabled individuals—Zillow for supportive housing.</p>
                    <div class="tech-stack">
                        <span class="tech">JavaScript</span>
                        <span class="tech">Knack</span>
                        <span class="tech">Power Automate</span>
                        <span class="tech">GIS</span>
                    </div>
                </div>
                
                <div class="project-card">
                    <h4>Federal Research Systems</h4>
                    <p>Geospatial analysis tools for USDA, US Coast Guard, and Army Corps of Engineers. Food security, environmental analysis, housing stability research.</p>
                    <div class="tech-stack">
                        <span class="tech">Python</span>
                        <span class="tech">PostgreSQL</span>
                        <span class="tech">QGIS</span>
                        <span class="tech">R</span>
                    </div>
                </div>
            </div>
        `
    },
    
    fledge: {
        title: 'Who I Want to Work With',
        location: 'The Fledge',
        html: `
            <div class="sidebar-header">
                <h2>Who I Want to Work With</h2>
                <div class="location">🤝 The Fledge, Lansing</div>
            </div>
            
            <div class="sidebar-section">
                <p><strong>Organizations where mission matters more than margin.</strong></p>
                <p>Workers with voice in decisions. Expertise valued over credentials.</p>
            </div>
            
            <div class="sidebar-section">
                <h3>Organization Types</h3>
                <div class="org-types">
                    <div class="org-type">
                        <div class="icon">🌱</div>
                        <div class="name">Environmental Justice</div>
                    </div>
                    <div class="org-type">
                        <div class="icon">🏠</div>
                        <div class="name">Housing Equity</div>
                    </div>
                    <div class="org-type">
                        <div class="icon">🗳️</div>
                        <div class="name">Progressive Campaigns</div>
                    </div>
                    <div class="org-type">
                        <div class="icon">🏛️</div>
                        <div class="name">Civic Technology</div>
                    </div>
                    <div class="org-type">
                        <div class="icon">🤝</div>
                        <div class="name">Worker Cooperatives</div>
                    </div>
                    <div class="org-type">
                        <div class="icon">⚖️</div>
                        <div class="name">Democratic Workplaces</div>
                    </div>
                </div>
            </div>
            
            <div class="sidebar-section">
                <h3>About The Fledge</h3>
                <p>This marker sits on The Fledge—a Lansing makerspace and incubator focused on social enterprises and cooperative development. It represents the kind of organization I want to build with.</p>
                <a href="https://thefledge.com" target="_blank" class="demo-link">Learn about The Fledge →</a>
            </div>
            
            <div class="sidebar-section">
                <h3>Let's Talk</h3>
                <p>If your organization aligns with these values, I'd like to hear from you.</p>
                <div style="margin-top: 16px;">
                    <a href="mailto:m.voldeck@gmail.com" class="demo-link">m.voldeck@gmail.com →</a>
                </div>
                <div style="margin-top: 8px;">
                    <a href="https://linkedin.com/in/mark-voldeck-30b30164" target="_blank" class="demo-link">LinkedIn →</a>
                </div>
            </div>
        `
    }
};

// ============================================
// App State
// ============================================
let map;
let markers = {};
let activeBuilding = null;

// ============================================
// Initialize Map
// ============================================
function initMap() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v11',
        center: INITIAL_VIEW.center,
        zoom: INITIAL_VIEW.zoom,
        pitch: INITIAL_VIEW.pitch,
        bearing: INITIAL_VIEW.bearing,
        antialias: true
    });

    map.on('load', () => {
        // Add 3D buildings layer
        add3DBuildings();
        
        // Add building markers
        addMarkers();
        
        // Add navigation controls
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    });
}

// ============================================
// Add 3D Buildings
// ============================================
function add3DBuildings() {
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
    )?.id;

    map.addLayer(
        {
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
                'fill-extrusion-opacity': 0.85
            }
        },
        labelLayerId
    );
}

// ============================================
// Add Markers
// ============================================
function addMarkers() {
    Object.entries(BUILDINGS).forEach(([key, building]) => {
        // Create marker element
        const el = document.createElement('div');
        el.className = 'building-marker';
        el.innerHTML = `
            <div class="marker-icon">${building.icon}</div>
            <div class="marker-label">${building.name}</div>
        `;
        
        // Add click handler
        el.addEventListener('click', () => selectBuilding(key));
        
        // Create and add marker
        const marker = new mapboxgl.Marker(el)
            .setLngLat(building.coordinates)
            .addTo(map);
        
        markers[key] = { marker, element: el };
    });
}

// ============================================
// Building Selection
// ============================================
function selectBuilding(buildingId) {
    const building = BUILDINGS[buildingId];
    if (!building) return;
    
    // Update active state
    if (activeBuilding) {
        markers[activeBuilding].element.querySelector('.marker-icon').classList.remove('active');
    }
    activeBuilding = buildingId;
    markers[buildingId].element.querySelector('.marker-icon').classList.add('active');
    
    // Fly to building
    map.flyTo({
        ...building.camera,
        duration: 1500,
        essential: true
    });
    
    // Update sidebar content
    showSidebar(buildingId);
    
    // Hide hint
    document.getElementById('hint').classList.add('hidden');
}

// ============================================
// Sidebar Management
// ============================================
function showSidebar(buildingId) {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('sidebar-content');
    
    // Update content
    content.innerHTML = CONTENT[buildingId].html;
    
    // Show sidebar
    sidebar.classList.remove('hidden');
    
    // Animate skill bars if showing "What I've Built"
    if (buildingId === 'stadium') {
        setTimeout(() => {
            document.querySelectorAll('.skill-bar .fill').forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }, 300);
    }
}

function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('hidden');
    
    // Remove active state from marker
    if (activeBuilding) {
        markers[activeBuilding].element.querySelector('.marker-icon').classList.remove('active');
        activeBuilding = null;
    }
    
    // Return to initial view
    map.flyTo({
        ...INITIAL_VIEW,
        duration: 1500,
        essential: true
    });
}

// ============================================
// Event Listeners
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize map (only on desktop)
    if (window.innerWidth > 768) {
        initMap();
    }
    
    // Sidebar close button
    document.getElementById('sidebar-close')?.addEventListener('click', hideSidebar);
    
    // Close sidebar on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideSidebar();
        }
    });
    
    // Close sidebar when clicking on map (not markers)
    document.getElementById('map')?.addEventListener('click', (e) => {
        if (e.target.id === 'map' || e.target.classList.contains('mapboxgl-canvas')) {
            // Only close if sidebar is open and click was on the map itself
            if (activeBuilding && !e.target.closest('.building-marker')) {
                hideSidebar();
            }
        }
    });
});

// ============================================
// Handle window resize
// ============================================
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 768 && !map) {
            initMap();
        }
    }, 250);
});
