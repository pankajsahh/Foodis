import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit'
import React from 'react'
import './FoodCard.css'
function FoodCard({ ButtonBDR ,DescBG,img,width,height,text,desc,heading}) {
    console.log(ButtonBDR)
    return (
        <MDBCard style={{
            width:width, height:height
        }} className='MainFoodCard overflow-hidden'>
            <MDBCardImage  src={img} position='top' alt='...' />
            <MDBCardBody style={{
                background: DescBG
            }} className={` CardOverDesc  position-absolute bottom-0 text-${text}`}>
                <div className={`CardHeading h6  `}>
                  {heading}
                </div>
                <div className={`CardDesc`}>
                    {desc}
                </div>
                <hr  className={` m-2 text-${text}`}/>
                <div className="CardFooter">
                    <MDBBtn style={{ border: `${ButtonBDR ? "1px solid white" : "none"}` }} className={`d-flex gap-2 align-items-center text-${text}`}>Explore <i className="fas  fa-angle-right"></i></MDBBtn>

                    <div className={`CardFooterRating text-${text} `}>
                        <i class="far fa-star"></i>    Rated
                    </div>
                </div>

            </MDBCardBody>
        </MDBCard>
    )
}

export default FoodCard