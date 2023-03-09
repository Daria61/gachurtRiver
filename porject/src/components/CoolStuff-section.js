import { useState } from 'react';

export default function CoolStuff() {
    const [myVal, setMyVal] = useState(0);
    const [myCardDet , setMyCardDet] = useState(false);
    function myslide(id) {
        setMyCardDet(!myCardDet);
        setMyVal(id);
    }
    return (
        <>
            <div className="container-fluid p-12 flex justify-center">
                <div className="main-section relative flex justify-center w-full p-5">
                    <div className={`w-full left-0 px-6 h-full py-5 bottom-0 z-10 absolute transition duration-500 opacity-0 ${myCardDet ? 'opacity-100' :'opacity-0'}`}>
                        <div className='card_detail flex h-full w-3/4 bg-white'>
                            <div className='left-side w-2/5 px-4 flex flex-col bottom-0 justify-between'>
                                <div className='card-detail-header h-1/2 flex items-center'>
                                    <img src={require('../imgs/log_hua.png')} alt='logo' />
                                    <span className='flex items-center'>Company name</span>
                                </div>
                                <div className='body-card-det px-3 h-1/2'>
                                    <h4 className='font-normal text-3xl py-3'>3-layer vacuum windows</h4>
                                    <span className='text-lg font-normal'>Don't worry that you will lose heat through your windows, because we have selected and installed 3-layer vacuum windows, which are also the latest smart choice, for your complete comfort. Sound and noise isolation is the highest and heat loss is 0.</span>
                                </div>
                            </div>
                            <div className='right_side w-3/5'>
                                <img className="h-full w-full" src={require('../imgs/card_det1.png')} alt='cardDetail_img' />
                            </div>
                        </div>
                    </div>
                    <div className={`w-1/4 px-3 ${myCardDet ? 'opacity-0' : 'opacity-100' } z-10 transition duration-1000`} onMouseEnter={() => myslide(1)}>
                        <div className="cards-ClSt h-100 flex flex-col justify-between bg-white border p-5 border-[#9D6156]">
                            <div className="logo">
                                <img src={require('../imgs/log_hua.png')} alt='logo' />
                            </div>
                            <div className="cardBody p-8">
                                <img className='h-full w-full' src={require('../imgs/Illustration.png')} alt="vector" />
                            </div>
                            <div className="card_desc p-5">
                                <span className='text-3xl'>3-Layer Vacuum windows</span>
                            </div>
                        </div>
                    </div>
                    <div className={`w-1/4 px-3 ${myCardDet ? 'opacity-0' : 'opacity-100' } z-10 transition duration-1000`} onMouseEnter={() => myslide(2)}>
                        <div className="cards-ClSt  flex flex-col justify-between h-100 bg-[#000] border p-5">
                            <div className="logo">
                                <img src={require('../imgs/log_hua.png')} alt='logo' />
                            </div>
                            <div className="cardBody p-8">
                                <img className='h-full w-full' src={require('../imgs/Illustration2.png')} alt="vector" />
                            </div>
                            <div className="card_desc p-5 text-white">
                                <span className='text-3xl'>3-Layer Vacuum windows</span>
                            </div>
                        </div>
                    </div>
                    <div className={`w-1/4 px-3 ${myCardDet ? 'opacity-0' : 'opacity-100' } z-10 transition duration-1000`} onMouseEnter={() => myslide(3)}>
                        <div className="cards-ClSt h-full flex flex-col justify-between bg-white border p-5 border-[#9D6156]">
                            <div className="logo">
                                <img src={require('../imgs/log_ap.png')} alt='logo' />
                            </div>
                            <div className="cardBody p-8">
                                <img className='h-100 w-full' src={require('../imgs/illustration3.png')} alt="vector" />
                            </div>
                            <div className="card_desc p-5">
                                <span className='text-3xl'>3-Layer Vacuum windows</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4 px-3 z-10 transition duration-500' onMouseEnter={() => myslide(4)}>
                        <div className="cards-ClSt  flex flex-col justify-between h-100 bg-[#000] border p-5">
                            <div className={`${myCardDet ? 'opacity-20' : 'opacity-100'}`}>
                            <div className="logo">
                                <img src={require('../imgs/log_hua.png')} alt='logo' />
                            </div>
                            <div className="cardBody p-8">
                                <img className='h-full w-full' src={require('../imgs/Illustration2.png')} alt="vector" />
                            </div>
                            <div className="card_desc p-5 text-white">
                                <span className='text-3xl'>3-Layer Vacuum windows</span>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 w-full h-3/4 border z-0 border-[#9D6156]'></div>
                </div>
            </div>
        </>
    );
};