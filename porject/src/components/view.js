

export default function View(){
    return(
        <>
        <div className='container-fluid px-12 py-4 h-[70vh] relative'>
            <img className='w-full h-full object-cover' src={require('../imgs/gachuurtriver.jpeg')}/>
            <img className="absolute top-0 bottom-0 w-full h-full " src={require('../imgs/Vector 5.png')}/>
        </div>
        </>
    )
};