import React from 'react';
import News from './news/News';
import Metrics from './metrics/Metrics';
import Products from './products/Products';
import Categories from './categories/Categories';
import { Footer, TopBar } from '../../partials';

function Home () {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />

                    <div className="container-fluid">
                        <Metrics />
                        <div className="row">
                            <div className="col-lg-5">
                                <News />
                            </div>
                            <div className="col-lg-7">
                                <Categories />
                            </div>
                        </div>
                        <Products />
                    </div>

                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}

export default Home;
