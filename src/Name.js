import React from 'react';

import './App.css';

const Name = () => {
    return (
        <nav className="info-page">
            <div className="container">
                <h1 className="info-h1">Mi az a Nemzetközi Űrállomás?</h1>
            </div>

            <div className="info-center">
            <div className="info-wrapper">
                <div className="info left-column">
                        <p className="info-p">A Nemzetközi Űrállomás (angolul International Space Station, rövidítve: ISS, orosz rövidítése: MKSZ) egy alacsony Föld körüli pályán keringő űrállomás. Az egyik legdrágább és legnagyobb űreszköz az űrkutatás történelmében. A programban 16 ország vesz részt: Amerikai Egyesült Államok, Oroszország, Japán, Kanada, Brazília és az ESA 11 tagállama. Az űrállomás körülbelül 405 km magasságban, alacsony Föld körüli pályán kering. A légköri fékezőhatás és a pályamódosítások miatt a pályamagasság néhány kilométert változhat. Az űrállomás átlagosan 100 métert veszít naponta pályamagasságából. További infók az <a href="https://www.nasa.gov/mission_pages/station/main/index.html" target="_blank" rel="noreferrer">ISS oldalán</a> és a <a href="https://hu.wikipedia.org/wiki/Nemzetközi_Űrállomás" target="_blank" rel="noreferrer">Wikipédián.</a></p>
                </div>

                <div className="info right-column">
                    <div className="iss-image-1"></div>
                </div>

            </div>
            </div>

        </nav>
    );
}

export default Name;