import React from "react";
import "../../Assets/Styles/RazorHub.min.css";
import anime from "animejs/lib/anime.es.js";
import { LoadingTip } from "../UserVerification/Components/QuickTip";
export default function AuthLoading(props) {
    return (
        <div className="athLoading">
            
            <div className="loadingCoponents">
                <div className="CompLoadingWrap">
                    <LoadingImage />
                <LoadingTip 
                        title={props.LoadingTitle}
                    sub={props.LoadingSub}/>
                </div>
            </div>
        </div>
    );
}

function LoadingImage() {
    
    return (
        <div className="loadingWrap">
            <div className="boundingBox">
                <div className="boxLoadHolder1">
                    <div id="load-1" className="load-1"></div>
                </div>
                <div className="boxLoadHolder2">
                    <div id="load-2"></div>
                </div>
                <div className="boxLoadHolder3">
                    <div id="load-3"></div>
                </div>
                <div className="boxLoadHolder4">
                    <div id="load-4"></div>
                </div>
            </div>
        </div>
    );
}

// handles the loading animation at different vareation
setInterval(() => {
  animeLoadBlock("#load-1", 58, 30, 3000);
  animeLoadBlock("#load-2", 58, 38, 2000);
  animeLoadBlock("#load-3", 58, 30, 2500);
  animeLoadBlock("#load-4", 58, 20, 2800);
}, 3100);




function animeLoadBlock(target, scaleNumber, endScaleNumber, speed) {
  if (endScaleNumber >= scaleNumber) return (
    console.warn("end Scale number should be less")
  )

  var FirstNum = Math.floor(1 + Math.random() * scaleNumber)
  var SecondNum = Math.floor(1 + Math.random() * endScaleNumber)

  anime({
      targets: target,
      background: 'blue',
      keyframes: [
          // { height: 20, width: 20, borderRadius: 13 },
          { height: FirstNum, width: FirstNum, borderRadius: 2 , opacity: 1},
          { height: SecondNum, width: SecondNum, borderRadius: 20 , opacity: 0.5},
          { height: FirstNum, width: FirstNum, borderRadius: 2 , opacity: 1},
          { height: SecondNum, width: SecondNum, borderRadius: 20 , opacity: 0.2},
      ],
      duration: speed,
      easing: "cubicBezier(.5, .05, .1, .3)",
      // loop: true,
  });
}



