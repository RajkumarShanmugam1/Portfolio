import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import nasa from './nasa.json'

function Particlebg() {

    async function loadParticles(main) {
        await loadFull(main)
    }

    return (
        <div>
            <Particles
                id="tsparticles"
                init={loadParticles}
                options={nasa} // For the web like background
                // options={lines} // For the web like background
            />
        </div>
    )
}


export default Particlebg
