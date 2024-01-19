import React from "react";
import oppoSeries from '../assets/Image_Banner/img1.jpg'
import A57 from '../assets/Image_Banner/A57-340x160.jpg'
import A78 from '../assets/Image_Banner/Oppo 340x160.jpg'
export default function () {
  return (
    <div className="banner">
      <div className="banner_content">
        <div className="bannerLeft">
          <img
            src={oppoSeries}
            alt="Ảnh banner"
          />
        </div>
        <div className="bannerRight">
          <div className="bannerTop">
            <img
              src={A78}
              alt="Ảnh OPPO A78"
            />
          </div>
          <div className="bannerBottom">
            <img
              src={A57}
              alt="Ảnh OPPO A57"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
