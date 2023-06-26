import React from 'react'
import fisica from '../assets/images/fisica.jpg'
import informatica from '../assets/images/informatica.webp'
import math from '../assets/images/math.jpg'
import science from '../assets/images/science.jpg'


function Contactscreen() {
    return (
        <>
            {/*<!-- Page Header-->*/}
            <header class="masthead" >
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="page-heading">
                                <h1>I miei servizi</h1>
                                <span class="subheading">Hai bisogno di aiuto in materie scientifiche? Sono qui per te.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*<!-- Main Content-->*/}
            <main class="mb-4">
                <div class="container px-4 px-lg-5">
                    <h1>Ripetizioni di:</h1>
                    <br></br>
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="card" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">Informatica</h5>
                            </div>
                            <img src={informatica} class="card-img-bottom mb-6" alt="..." />
                        </div>
                        <div class="card" style={{ width: "18rem" }}>
                            
                            <div class="card-body">
                                <h5 class="card-title">Matematica</h5>
                            </div>
                            
                            <img src={math} class="card-img-bottom mb-9" alt="..." />
                            
                        </div>
                        <div class="card" style={{ width: "18rem" }}>
                            
                            <div class="card-body">
                                <h5 class="card-title">Fisica</h5>
                            </div>
                            <img src={fisica} class="card-img-bottom mb-5" alt="..." />
                        </div>
                        <div class="card" style={{ width: "18rem" }}>
                            
                            <div class="card-body">
                                <h5 class="card-title">Scienze</h5>
                            </div>
                            <img src={science} class="card-img-bottom mb-8" alt="..." />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contactscreen