import React from "react";
import ImageSliderLeft from "./imageSliderLeft";

export default function Eco() {
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
        <div className=" py-16 flex gap-16 mx-auto max-w-[1440px] h-screen flex-wrap">
            <div className="max-w-[700px]">
                <ImageSliderLeft images={images} />
            </div>
            <div className="max-w-[600px]">
                <div className="flex">
                    <div className="flex relative">
                        <img
                            src={require("../images/eco.png")}
                            alt="eco"
                            className=""
                        />
                    </div>
                </div>
                <div className="text-6xl py-1 yesava">ХОТХОНЫ ХИЙЦ</div>
                <div className="text-3xl py-1 yesava">
                    Чанарын дээдийг танд зориулав
                </div>
                <div className="mt-7">
                    ХБНГ улсын шилдэг технолог болох эрчим хүчний өндөр
                    хэмнэлттэй, дулаан алдагдал хамгийн багатай орчин үеийн
                    хамгийн ухаалаг шийдэл болох SIP (structural insulated
                    panels) хавтангуудыг ашигласан.
                </div>
            </div>
        </div>
    );
}
