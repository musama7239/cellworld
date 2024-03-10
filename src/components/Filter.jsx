import React from 'react'
// import Image from 'public/images'



export default function Filter() {
    return (


        <>
            <div className='  bg'>
                <div className="px-5 pt-3 text-center border-bottom ">

                    <div className="px-4 py-5 my-5 text-center">
                        <h1 className="display fw-bold" style={{ color: "white" }}>Find Used Cellphone in Pakistan</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4" style={{ color: "white" }}>With thousands of cars, we have just the right one for you.</p>

                            <div className="container-fluid">
                                <div className='row'>


                                    <img src="/public/images/banner.jpg" alt="" />
                                    
                                        <form className="d-flex mx-5 " role="search">
                                        <div className='row  blocks'>
                                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                                <input className="form " style={{ width: "152px", height: "50px"}}  type="search for mobile" placeholder="Mobile " />

                                            </div>
                                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                                <select style={{ width: "152px", height: "50px" }} >
                                                    <input className="form  " type="search for city" placeholder="City" />
                                                    <option >City</option>
                                                    <option >Multan</option>
                                                    <option >Lahore</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-3 col-md-6 col-sm-12' >
                                                <input className="form " style={{  height: "50px" }} type="search for price" placeholder="Price Range" />
                                            </div>
                                            <div className='col-lg-3'>
                                            <i className="fa fa-search"  aria-hidden="true"></i>
                                            </div>
                                            </div>
                                        </form>
                                    
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>

        </>


    )
}
