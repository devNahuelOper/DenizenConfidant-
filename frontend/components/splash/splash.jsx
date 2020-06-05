import React from 'react';

class SplashPage extends React.Component {
  render() {
    return (
     <div>
       <div className="splash-header-container">
        <img src="/assets/berlin-rave.png" id="berlin-rave"/>
       </div>
       <div className="splash-content-container">
          <nav className="main-banner">
            <h1>Denizen Confidant</h1>
          </nav> 
       </div>
     </div>
    )
  }
}

export default SplashPage;

{/* <nav className="denizen-confidant">
        <h1>Denizen C👽nfidant</h1>
    </nav> */}
