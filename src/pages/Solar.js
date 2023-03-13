import React from "react";
import ImageSlideShow from "../components/ImageSlideShow";

export default function Solar() {
    const images = [
        {
            original: "https://picsum.photos/id/1018/900/794/",
            thumbnail: "https://picsum.photos/id/1018/254/211/",
        },
        {
            original: "https://picsum.photos/id/1015/900/794/",
            thumbnail: "https://picsum.photos/id/1015/254/211/",
        },
        {
            original: "https://picsum.photos/id/1019/900/794/",
            thumbnail: "https://picsum.photos/id/1019/254/211/",
        },
    ];

    return (
        <div className=" flex flex-row  h-screen flex-wrap pt-12">
            <div className="basis-2/5 p-12">
                <div className="flex">
                    <div className="pb-32">
                        <img
                            src={require("../images//Group 38.png")}
                            alt="logo"
                        />
                    </div>
                    <div className="pt-32">
                        <img
                            src={require("../images/Group 39.png")}
                            alt="logo"
                        />
                    </div>
                </div>
                <div className=" py-1 yesava">Empowered</div>
                <div className=" py-1 yesava">
                    By <div className="text-[#6FCF97] inline">CRD</div> Smart
                    Solar System
                </div>
                <div className="mt-7">
                    Whether you're looking for a spacious family home or a sleek
                    and stylish living space. Our properties feature
                    top-of-the-line finishes, premium appliances, and
                    cutting-edge technology
                </div>
            </div>
            <div className="basis-2/5 p-12">
                {<ImageSlideShow images={images} />}
            </div>
        </div>
    );
}
