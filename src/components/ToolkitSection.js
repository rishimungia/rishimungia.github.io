import React from "react"

import techStack from '../data/assets/tech-stack.png';
import creativeApps from '../data/assets/creative-apps.png';

const ToolkitSection = () => {
    return ( 
        <section className="toolkit-container" id="toolkit">
            <h1>My Toolkit</h1>
            <div className="toolkit-grid">
                <div className="pixel" data-aos="fade-up" ><p>Pixel Perfect Code</p></div>
                <div className="tech-apps" data-aos="fade-up" style={{backgroundImage: `url(`+techStack+`)`}}><p>And Expanding</p></div>
                <div className="creative-apps" data-aos="fade-up" style={{backgroundImage: `url(`+creativeApps+`)`}}></div>
                <div className="pallet" data-aos="fade-up"><p>Creative Pallet</p></div>
            </div>
        </section>
    );
}
 
export default ToolkitSection;