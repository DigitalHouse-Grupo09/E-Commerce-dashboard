import React from 'react';
import SideBar from './partials/SideBar';
import Home from './pages/home/Home';

function App() {
    return (
        <React.Fragment>
            <div id="wrapper">
                <SideBar />
                <Home />
            </div>
        </React.Fragment>
    );
}

export default App;
