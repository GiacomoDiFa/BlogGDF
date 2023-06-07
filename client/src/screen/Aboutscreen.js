import React from 'react'
import aboutimg from '../assets/images/about.jpg'

function Aboutscreen() {
    return (
        <>
            {/*<!-- Page Header-->*/}
            <header class="masthead" >
            <img className='imgback' src={aboutimg}></img>
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="page-heading">
                                <h1>About Me</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*<!-- Main Content-->*/}
            <main class="mb-4">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <p>Ciao a tutti! Sono uno studente
                                <strong> appassionato di informatica</strong>,
                                pronto a esplorare il mondo digitale con
                                <strong> curiosità e determinazione</strong>.
                                Ho completato la <em><u>laurea triennale in informatica applicata </u></em>
                                 e ora sto frequentando la <em><u>magistrale in informatica applicata</u></em>,
                                per approfondire le mie conoscenze e diventare un vero esperto nel mio campo.</p>
                            <p><br /></p><p><strong><u>Ma la mia vita non è solo composta da codice e algoritmi!</u>
                            </strong><br/>
                                Fuori dall'università, ho un sacco di passioni che mi tengono in movimento e mi fanno
                                sorridere. Il nuoto e la danza sono due dei miei hobby preferiti.</p>
                            <p><br /></p><p>La musica è un'altra parte essenziale della mia vita. Mi riempie di gioia
                                e ispirazione. È come una colonna sonora che accompagna le mie giornate, donandomi
                                energia e emozioni in ogni nota.</p><p><br /></p><p>Sono una persona socievole che
                                    ama trascorrere del tempo con le persone care. Frequentare gli amici, organizzare serate
                                    divertenti o semplicemente sedersi attorno a un tavolo a ridere e condividere storie è uno dei
                                    modi migliori per rilassarmi e creare legami speciali.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Aboutscreen