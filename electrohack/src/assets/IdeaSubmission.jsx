import react from "react";
import {Link} from "react-router-dom";
import {buttonVariants} from "../components/ui/button"
import TiltedCard from '../components/ui/TiltedCard/TiltedCard';

export default function IdeaSubmission(){
    return(
        <div className="mb-12">
            <div className="text-white mt-6 ml-6" style={{width:"18vw"}}>
            <Link
    to="/" // Route to navigate to
    className="flex flex-row gap-2"
    style={{ fontSize: "1.5vw" }}
  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left mt-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
    Back to Home Page
  </Link>
        
            </div>

            <div className="text-center font-semibold mt-12 gradienttext1" style={{fontSize:"5vw"}}>
            Tracks
        </div>
        <div className="flex flex-col lg:flex-row md:ml-96 lg:ml-0 ml-72 justify-center mt-10 gap-32">
        <TiltedCard
  imageSrc={"/1520172670937.jpg"}
  altText="VLSI Design"
  captionText="VLSI Design"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={18}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
  <p className="tilted-card-demo-text lg:mt-16 lg:ml-10 ml-16 mt-48 text-7xl mr-4 md:text-4xl md:ml-16 md:mt-36 font-bold text-white lg:text-3xl">
      VLSI Design
    </p>
  }
/>

<TiltedCard
  imageSrc={"/jorge-ramirez-nr3AmB4_B8g-unsplash.jpg"}
  altText="Embedded Systems with IOT"
  captionText="Embedded Systems with IOT"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={18}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text lg:mt-16 lg:ml-6 ml-8 mt-48 text-7xl md:text-4xl mr-4 md:ml-8 md:mt-36 font-bold text-white lg:text-3xl">
      Embedded Systems with IOT
    </p>
  }
/>

<TiltedCard
  imageSrc={"/1715842926157.png"}
  altText="PCB Design"
  captionText="PCB Design"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={18}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text lg:mt-16 lg:ml-10 ml-16 mt-48 text-7xl mr-4 md:text-4xl md:ml-16 md:mt-36 font-bold text-white lg:text-3xl">
      PCB Design
    </p>
  }
/>
        </div>
            <div className="text-center mt-24 gradienttext1" style={{fontSize:"5vw"}}>
            Problem Statements
        </div>
        <div className="mt-12 mb-12 flex flex-col gap-10">
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>1.</div>
                <div>The Mumbai Case Study</div>
                <a href="https://www.google.com" className="hover:text-orange-500 underline " style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>2.</div>
                <div>The New Delhi Case Study</div>
                <a href="https://www.google.com" className="hover:text-orange-500 underline" style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>3.</div>
                <div>The Bangalore Case Study</div>
                <a href="https://www.google.com" className="hover:text-orange-500 underline" style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>4.</div>
                <div>The Metro Cities Case Study</div>
                <a href="https://www.google.com" className="hover:text-orange-500 underline" style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>5.</div>
                <div>The Rajasthan Case Study</div>
                <a href="https://www.google.com" className="hover:text-orange-500 underline" style={{transition:"0.3s"}}>Check it out</a>
            </div>
        </div>

        
        <div style={{height:"6vw"}}></div>
        </div>
    )
}

