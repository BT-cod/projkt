import React from 'react'
import Typical from 'react-typical'
import './Main.css';

export default function Main() {
  return (<>
            <div className="banner">
               <div className="navbr">
               <h3 className="logo">🏍 Travelogged</h3>
               <ul>
                   <li><a href="/">Home</a></li>
                   <li><a href="/">ABOUT US</a></li>
                   <li><a href="/">Pricing</a></li>
               </ul>
               </div>
               <div className="Intro">
                   <h1 >Travelogged Kedarnath 2022</h1>
                   <p >Visit the "SWARG" on Earth- The Mighty Kedarnath Temple this 2022.</p>
                   <h3 >
                    {" "}
                    <Typical
                    loop={Infinity}
                    steps={[
                        "SWARGH On Earth🤟",
                        2000,
                        "Kedarnath",
                        2000,
                        "Way to Heaven",
                        2000,
                    ]}
                    />
                </h3>
            <div>
            <button type="button"><span></span>Book Now</button>
            <button type="button"><span></span>Check Eternity</button>
        </div>
             </div>            
        </div>
        <div className="places">
            <h1>Kedarnath Itinary</h1>
            <div className="cards">
                <span></span> <span></span> <span></span> <span></span>
                <h2>Day 1</h2>
                <h3>HariDwar</h3>
                <p>We meet at Kaushambi Metro Station in Delhi at 6PM and Start out trip with full zeal and excitement.<br/>
                Pit Stop in between for Dinner (not on us) at around 11 PM.</p>
            </div>
            <div className="card-2">
                <span></span> <span></span> <span></span> <span></span>
                <h2>Day 2</h2>
                <h3>GuptKashi</h3>
                <p>Approx 14 hours of Journey to Guptkashi, (with multiple pit-stops)<br/>
                We will Reach Guptkashi by noon.<br/>
                On arrival at Guptkashi check-in hotel. Rest of the day at leisure. Overnight stay at hotel 
                </p>
            </div>
            
            <div className="card-3">
                <span></span> <span></span> <span></span> <span></span>
                <h2>Day 3</h2>
                <h3>Sonprayag</h3>
                <p>Early morning (5 AM) after breakfast check out from the hotel and drive to Sonprayag. From where, you will start your 20 km trek to Kedarnath.<br/>
                On arrival check in at the hotel. Freshen-up and proceed for Darshan. Take part in evening Aarti.<br/>
                Dinner and Overnight at hotel.
                </p>
            </div>
            <div className="card-4">
                <span></span> <span></span> <span></span> <span></span>
                <h2>Day 3</h2>
                <h3>Rishikesh</h3>
                <p>The proximity of Rishikesh to the Himalayan range with the Ganga river flowing through it makes it an ideal place to go rafting.
                     The sport has been gaining in popularity lately.<br/>
                     Rishikesh is a city blessed with a rich cultural history, a beautiful mountain range and the serene Ganga river that flows through it.<br/>
                     The city perfectly blends modern and a bygone era into one place.
                </p>
            </div>
            </div>
            <div className="Inclusions">
                <h2>Inclusions</h2>
                <p>We include Everything in our plans which you might need <br/>while Travelling</p>
                <div className="container">
                    <div className="box">
                        <div className="single-img"><img className="image1" src="trans.png" alt="tr" /><p>Transport</p></div>
                        <div className="single-img"><img className="image2" src="lunch.png" alt="lun" /><p>Lunch</p></div>
                        <div className="single-img"><img className="image3" src="stay.png" alt="sta" /><p>Stay</p></div>
                        <div className="single-img"><img className="image4" src="guide.png" alt="gui" /><p>Tour Guide</p></div>
                    </div>
                </div>
                </div>
                <div className="container-vlog">
                    <h2> Why Travelogged</h2>
                    <p>Travelogged is new age technology driven Travel Company.<br/>
                        We specialise in Group Departures at affordable prices.</p>
                        </div>
                        <div className="titles">
                        <div className="title-img"><img className="title1" src="rating.png" alt="tr" /><p>500+ REVIEWS</p></div>
                        <div className="title-img"><img className="title2" src="map.png" alt="lun" /><p> 120+ GROUP DEPARTURES</p></div>
                        <div className="titlee-img"><img className="title3" src="happy.png" alt="sta" /><p>2000 + HAPPY TRAVELLERS</p></div>
                        </div>
                        <div className="contact"> 
                                <h2>Contact Us</h2>
                        </div>
                        <div className="wrapper">
         <div className="button">
            <div className="icon">
               <i className="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
         </div>
         <div className="button">
            <div className="icon">
               <i className="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
         <div className="button">
            <div className="icon">
               <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div>
         <div className="button">
            <div className="icon">
               <i className="fab fa-codepen"></i>
            </div>
            <span>Codepen</span>
         </div>
         <div className="button">
            <div className="icon">
               <i className="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
         </div>
        <line></line>
      </div>
        </>
  )
}
