import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import Script from './js/script'

const StateSection = () => {


    return (
        <div>

            <section class="section bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 my-lg-0 my-3">
                            <div class="counter-content text-center bg-light py-4 rounded">
                                <i class="fa fa-smile-o d-block"></i>
                                <span class="counter my-2 d-block" data-count="2314">0</span>
                                <h5>Happy Customers</h5>
                                {/* </script> */}
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 my-lg-0 my-3">
                            <div class="counter-content text-center bg-light py-4 rounded">
                                <i class="fa fa-user-o d-block"></i>
                                <span class="counter my-2 d-block" data-count="1013">0</span>
                                <h5>Active Members</h5>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 my-lg-0 my-3">
                            <div class="counter-content text-center bg-light py-4 rounded">
                                <i class="fa fa-bookmark-o d-block"></i>
                                <span class="counter my-2 d-block" data-count="2413">0</span>
                                <h5>Verified Ads</h5>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 my-lg-0 my-3">
                            <div class="counter-content text-center bg-light py-4 rounded">
                                <i class="fa fa-smile-o d-block"></i>
                                <span class="counter my-2 d-block" data-count="200">0</span>
                                <h5>Happy Customers</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

            <script src="js/script.js"></script>

        </div >
    )
};

export default StateSection;

