/**
 * Sidebar content for each building
 * Returns HTML strings for the sidebar panel
 */

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

export { CONTENT };
