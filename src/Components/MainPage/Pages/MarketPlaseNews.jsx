
import m1 from './../../../assets/market1.jpg'
import m2 from './../../../assets/market2.jpg'
import m3 from './../../../assets/market3.jpg'
const MarketPlaseNews = () => {
    return (
        <div>
            <h1 className="text-2xl text-center font-bold p-10">Marketplace News</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                        <img
                            src={m1}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className="p-6">
                        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Electronics
                        </h4>
                        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                        Seating Collection Inspiration Is Not Enough For People
                        </p>
                    </div>
                   
                </div>
                <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                        <img
                            src={m2}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className="p-6">
                        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Speaker
                        </h4>
                        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                        Exterior Ideas: 10 Colored Fiber Garden Seats
                        </p>
                    </div>
                   
                </div>
                <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                        <img
                            src={m3}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className="p-6">
                        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Electronics
                        </h4>
                        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                        Creative Water Features And Exterior Design
                        </p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default MarketPlaseNews;