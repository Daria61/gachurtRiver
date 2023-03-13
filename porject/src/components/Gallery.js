import React, { useState } from "react";

export default function Gallery() {
    let [imageIndex, setImageIndex] = useState(0);
    const galleryImages = [
        {
            original: require("../images/Kitchen-original.png"),
            thumbnail: require("../images/Kitchen-thumb.png"),
            name: "Kitchen",
        },
        {
            original: require("../images/bathroom-original.png"),
            thumbnail: require("../images/bathroom-thumb.png"),
            name: "Bathroom",
        },
        {
            original: require("../images/Livingroom-original.png"),
            thumbnail: require("../images/Livingroom-thumb.png"),
            name: "Hall Room",
        },
    ];

    function increaseImageIndex() {
        if (imageIndex == galleryImages.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    }

    return (
        <section
            style={{
                backgroundImage: `url(${galleryImages[imageIndex].original})`,
            }}
            id="galleryContainer"
            className="h-screen w-screen relative"
        >
            <div className="border-solid border-white border-8 absolute right-12 bottom-12 z-20 w-[15%] h-[16%]">
                <img
                    src={
                        galleryImages[
                            imageIndex == galleryImages.length - 1
                                ? 0
                                : imageIndex + 1
                        ]?.original
                    }
                    alt=""
                    className="w-[100%] h-[100%]"
                    onClick={() => increaseImageIndex()}
                />
            </div>
            <div className="absolute right-12 bottom-96 z-20  w-[30%] h-[16%] text-white text-7xl text-right yesava">
                {galleryImages[imageIndex].name}
            </div>
        </section>
    );
}
