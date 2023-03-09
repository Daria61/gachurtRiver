import React, { useState } from "react";

export default function ImageSliderLeft({ images }) {
    let [imageIndex, setImageIndex] = useState(0);

    function increaseImageIndex() {
        if (imageIndex == images.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    }

    return (
        <div>
            <div className="relative flex pl-16 pt-16 max-w-[700px] h-full align-middle">
                <div className="sliderImgContainer z-10 ">
                    <img
                        src={images[imageIndex]?.original}
                        alt=""
                        className="sliderImg"
                    />
                </div>
                <div className="border-solid border-white border-8 absolute left-0 bottom-12 z-20 w-[30%] h-[30%]">
                    <img
                        src={
                            images[
                                imageIndex == images.length - 1
                                    ? 0
                                    : imageIndex + 1
                            ]?.original
                        }
                        alt=""
                        className="w-[100%] h-[100%]"
                    />
                </div>
                <div className="w-[50%] h-[70%] border-solid border-[#9D6156] border-2  absolute -right-2 -bottom-2.5"></div>
                <img
                    src={require("../images/right.png")}
                    alt=""
                    className="absolute z-20 right-16 top-1/2"
                    width={60}
                    onClick={() => increaseImageIndex()}
                />
            </div>
        </div>
    );
}
