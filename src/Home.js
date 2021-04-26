import React from 'react';
import issVid from './iss.mp4';


import './App.css';

class Home extends React.Component {
    
    render() {
       
        return (<nav className="nav-home">

            <video autoPlay loop muted>
                <source src={issVid} type="video/mp4" />
            </video>

            <div className="home-text">
            <p className="home-text-p">A Nemzetközi Űrállomás és a kapcsolódó ESA Columbus laboratórium átlagos sebessége 28.800 km/óra, <br /> átlagos keringési magassága 400 km. Az Űrállomás 90 perc alatt kerüli meg a Földet, <br /> így 16 napfelkeltét és naplementét követhetünk nyomon minden (földi) nap, 45 perces "nappalokkal" és 45 perces "éjszakákkal".</p>
            </div>
            
        </nav>
        )
    }
}

export default Home;





