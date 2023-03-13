

export default function View(){
    return(
        <>
        <div className='relative h-screen m-0 myViewCard pt-44'>
            <img className=' object-cover w-screen h-full relative z-20' src={require('../imgs/montain.png')}/>
            <div className="absolute bottom-0 px-32 vector1 overflow-hidden py-20 w-full h-full ">
                 <img className="w-full h-full  relative z-20" src={require('../imgs/Vector 5.png')}/>
                 <img className='circle absolute object-contain z-0' src={require('../imgs/circle.png')}/>
                 <div className="textView flex justify-between h-full w-full absolute top-0 left-0 p-20">
                    <div className=" view_cardText z-20 w-1/2 h-full flex items-end px-20 py-10">
                       <p className="text-2xl text-white">Yes , this is our View</p>
                    </div>
                    <div className="rightSide z-20 w-1/2 flex h-full items-end p-10">
                        <p className="text-[16px] font-normal text-white">Whether you're looking for a spacious family home or a sleek and stylish living space. Our properties feature top-of-the-line finishes, premium appliances, and cutting-edge technology</p>
                    </div>
                 </div>
            </div>
        </div>
        </>
    )
};