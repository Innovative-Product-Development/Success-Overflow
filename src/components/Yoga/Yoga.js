import React from 'react'
import './Yoga.css'
import logo from '../../assets/pexels-andrea-piacquadio-3772502.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom' 

const Yoga = () => {
  return (
    <div className="yoga-main">
        <div className='yoga-banner'>
          <div className='yoga-banner-content'>
            <h3 className='yoga-heading'>Eat,Breathe,<span className='meditate'>Meditate</span>,Repeat</h3>
            <p className='yoga-para'>Bend your mind, inspire yourself.<br/>Find your Yoga pose as per your requirement.</p>
            
            <div className='yoga-search-part'>
              <form className='yoga-search'>
                <button className='search-icon'>
                <svg width="32" height="32" className="icon-svg" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path></svg>
                </button>
                <div className='yoga-search-bar'>
                  <input type='search' autoComplete='off' className='yoga-input' placeholder='Search for Yoga Pose'></input>
                </div>
              </form>
            </div>
            <div className='recommended-tabs' style={{position:'absolute',marginTop:'15rem',color:'white',fontWeight:'600',fontSize:'18px',borderBottom:'2px solid white'}}>Recommended Searches</div>
            <div className='yoga-tabs'>
              <div className='row'>
                  <div className='col-3 mb-3'>
                    <Link>
                      <button className='yoga-names'>Knee Pain</button>
                    </Link>
                  </div>
                  <div className='col-3 mb-3'>
                    <Link>
                      <button className='yoga-names'>Stomach Pain</button>
                    </Link>
                  </div>
                  <div className='col-3 mb-3'>
                    <Link>
                      <button className='yoga-names'>Headache</button>
                    </Link>
                  </div>
                  <div className='col-3 mb-3'>
                    <Link>
                      <button className='yoga-names'>Neck Pain</button>
                    </Link>
                  </div>
                  <div className='col-3 mb-3'>
                    <Link>
                      <button className='yoga-names'>Back Pain</button>
                    </Link>
                  </div>
                  <div className='col-3 mb-3'>
                    <Link>
                      <button className='yoga-names'>Chest Pain</button>
                    </Link>
                  </div>
                  <div className='col-3 mb-3'>
                    <Link>
                      <button className='yoga-names'>Leg Pain</button>
                    </Link>
                  </div>
                  <div className='col-3 mb-3'>
                    <Link>
                      <button className='yoga-names'>Relaxation</button>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Yoga