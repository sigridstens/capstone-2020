import React from 'react';
import '../App.css';
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";
import CallToParticipate from "../shared/call-to-participate/callToParticipate";


function Home() {
    return(
        <main>
            <section className="hero content-section">
                <h2>Everyone has lost experiences.</h2>
            </section>

            <section className="content-section">

            </section>

            <ExhibitPreview/>
            <CallToParticipate/>
        </main>
    )
}

export default Home;