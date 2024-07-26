import React from 'react'
import './SinglePackageDetails.scss'



import pic from '../../../assests/nav_banner.avif'
import HomePackages from '../../Home/HomePackages/HomePackages'

const SinglePackageDetails = () => {
    return (
        <div className='single-package-details-container'>
            <div className="single-package-details-description-box">
                <div className="single-package-details-description-box-image">
                    <img src={pic} alt=""></img>
                </div>
                <div className="single-package-details-description-box-details">
                    <p className='single-package-details-description-box-details-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa. Dignissimos odit adipisci repudiandae, nam optio odio impedit et animi est nostrum maiores dolor omnis rerum minima. Sit modi velit numquam consectetur? Odit nihil nesciunt, tempore quibusdam in soluta veniam.</p>

                    <div className="single-package-details-description-box-details-price-offer">


                        <div className='single-package-details-description-box-details-price' >&#8377; 400</div>
                        <div className='single-package-details-description-box-details-offers'>
                            <h4>Offers</h4>
                            <ul>
                                <li>20% on first booking</li>
                                <li>10% on sbi credit card</li>
                                <li>10% on icici credit card</li>
                            </ul>
                        </div>

                        <button className='single-package-details-description-box-details-bookNow'>Book Now</button>
                    </div>

                </div>
            </div>
            <div className="single-package-details-relevant-packages">
                <h3>RELEVANT PACKAGES</h3>
                <HomePackages />
            </div>

        </div>
    )
}

export default SinglePackageDetails
