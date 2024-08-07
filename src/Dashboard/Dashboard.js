import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCrosshairs, faArrowUp, faArrowDown, faArrowRight, faEnvelope, faCog, faBell, faUser, faShoppingCart, faTruck, faBan, faUserCircle, faStar, faBurger, faBowlFood, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ActivityCard from './ActivityCard';


function Dashboard() {
    
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center p-3">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faSearch} />
                            <input type="text" className="form-control ms-2" placeholder="Search" />
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <FontAwesomeIcon icon={faCog} className="mx-2" />
                            <FontAwesomeIcon icon={faBell} />
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>

                    {/* <Header/> */}
{/* header */}


                    <div className="row  ">
                        <div className="col-12 mb-3">
                            <h1 className="mb-3">Dashboard</h1>
                        </div>
                        <div className="col-md-2 mb-3">
                            <div className="card p-3 h-100 " style={{ backgroundColor: 'darkslategray', textAlign:'left' }}>
                            <FontAwesomeIcon  icon={faShoppingCart} className="mb-3" style={{color:'cyan'}} />
                                <h5 className="mb-2">Total Orders</h5>
                                <h2 className="mb-0">75</h2>
                                <span className="text-success"><FontAwesomeIcon icon={faArrowUp} /> 3%</span>
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <div className="card p-3 h-100  " style={{ backgroundColor: 'darkslategray', textAlign:'left' }}>
                                <FontAwesomeIcon icon={faTruck} className="mb-3" style={{color:'lightgreen'}}/>
                                <h5 className="mb-2">Total Delivered</h5>
                                <h2 className="mb-0">70</h2>
                                <span className="text-danger"><FontAwesomeIcon icon={faArrowDown} /> 3%</span>
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <div className="card p-3 h-100 " style={{ backgroundColor: 'darkslategray', textAlign:'left' }}>
                                <FontAwesomeIcon icon={faBan} className="mb-3" style={{color:'red'}} />
                                <h5 className="mb-2">Total Cancelled</h5>
                                <h2 className="mb-0">5</h2>
                                <span className="text-success"><FontAwesomeIcon icon={faArrowUp} /> 3%</span>
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <div className="card p-3 h-100 " style={{ backgroundColor: 'darkslategray', textAlign:'left' }}>
                                <FontAwesomeIcon icon={faUserCircle} className="mb-3" style={{color:'pink'}}/>
                                <h5 className="mb-2">Total Revenue</h5>
                                <h2 className="mb-0">$12K</h2>
                                <span className="text-danger"><FontAwesomeIcon icon={faArrowDown} /> 3%</span>
                            </div>
                        </div>
                        {/* Added row for Net Profit card */}
                        <div className="col-md-3 mb-3 ">
                            <div className="card p-3 h-100 w-100 " style={{ backgroundColor: 'darkslategray', textAlign:'left' }}>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="mb-0">Net Profit</h5>
                                    <div className="d-flex align-items-center">
                                        <span className="text-success"><FontAwesomeIcon icon={faArrowUp} /> 3%</span>
                                        <h2 className="mb-0 ms-2">$6759.25</h2>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                                <small className="text-muted mt-2">* The values here have been rounded off.</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row " >

                    <div className="col-lg-6 mb-3">
                        <div className="card p-3 h-100 w-100 " style={{ backgroundColor: 'darkslategray', paddingBlock:'25%' }}>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="mb-0">Activity</h5>
                                <button className="btn btn-sm btn-secondary" type="button"  style={{borderRadius:'2rem'}}>
                                    Weekly
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </button>
                        
                            </div>
                            <ActivityCard/>
                        </div>
                    </div>
                   
                    <div className="col-lg-6 mb-3 ">
                        <div className="card p-3 mb-3 h-100 w-40 rem pt-5 "  style={{ backgroundColor: 'darkslategray' }}>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                            <button className="btn btn-sm btn-danger" type="button"  style={{borderRadius:'2rem'}}><FontAwesomeIcon icon={faCrosshairs}  /></button>
                                <h5 className="mb-0">Goals</h5>
                                <button className="btn btn-sm btn-secondary" type="button"  style={{borderRadius:'2rem'}}><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                            <button className="btn btn-sm btn-primary" type="button"  style={{borderRadius:'2rem'}}><FontAwesomeIcon icon={faBurger}  /></button>
                                <h5 className="mb-0">Popular Dishes</h5>
                                <button className="btn btn-sm btn-secondary" type="button"  style={{borderRadius:'2rem'}}><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                            <button className="btn btn-sm btn-info" type="button"  style={{borderRadius:'2rem'}}><FontAwesomeIcon icon={faBowlFood}  /></button>
                                <h5 className="mb-0">Menus</h5>
                                <button className="btn btn-sm btn-secondary" type="button"  style={{borderRadius:'2rem'}}><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                    </div>
                    

                </div>

                <div className="row" >

            <div className="col-lg-6 mb-3" > 
                            <div className="card p-3 h-100" style={{backgroundColor:'darkslategray', alignContent:'center'}}>
                                <h5 className="mb-3">Recent Orders</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Order No.</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle me-2" />
                                                    <span>Wade Warren</span>
                                                </div>
                                            </td>
                                            <td>15478256</td>
                                            <td>$124.00</td>
                                            <td>
                                                <span className="text-success">Delivered</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle me-2" />
                                                    <span>Jane Cooper</span>
                                                </div>
                                            </td>
                                            <td>48965786</td>
                                            <td>$365.02</td>
                                            <td>
                                                <span className="text-success">Delivered</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle me-2" />
                                                    <span>Guy Hawkins</span>
                                                </div>
                                            </td>
                                            <td>78958215</td>
                                            <td>$45.88</td>
                                            <td>
                                                <span className="text-danger">Cancelled</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle me-2" />
                                                    <span>Kristin Watson</span>
                                                </div>
                                            </td>
                                            <td>20965732</td>
                                            <td>$65.00</td>
                                            <td>
                                                <span className="text-warning">Pending</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle me-2" />
                                                    <span>Cody Fisher</span>
                                                </div>
                                            </td>
                                            <td>95715620</td>
                                            <td>$545.00</td>
                                            <td>
                                                <span className="text-success">Delivered</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle me-2" />
                                                    <span>Savannah Nguyen</span>
                                                </div>
                                            </td>
                                            <td>78514568</td>
                                            <td>$128.20</td>
                                            <td>
                                                <span className="text-success">Delivered</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


            {/* FeedBack Card */}

          {/* <div className="row"> */}
                    <div className="col-md-6 mb-3">
                        <div className="card p-3 h-100" style={{ backgroundColor: 'darkslategray', textAlign: 'left' }}>
                            <h5 className="mb-3">Customer's Feedback</h5>
                            <div className="mb-3">
                                <div className="d-flex align-items-center mb-2">
                                    <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle me-2" />
                                    <span>Jenny Wilson</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                </div>
                                <p className="mt-2">The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.</p>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-center mb-2">
                                    <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle me-2" />
                                    <span>Dianne Russell</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                </div>
                                <p className="mt-2">We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service</p>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-center mb-2">
                                    <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle me-2" />
                                    <span>Devon Lane</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-muted me-1" />
                                    <FontAwesomeIcon icon={faStar} className="text-muted me-1" />
                                </div>
                                <p className="mt-2">Normally wings are wings, but theirs are lean meaty and tender, and</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        // </div >
        // </div >
    );
}

export default Dashboard;
