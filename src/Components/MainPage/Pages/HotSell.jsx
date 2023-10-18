import hot1 from './../../../assets/hotsell2.jpeg'
import hot2 from './../../../assets/hotsell3.jpeg'
// import hot3 from './../../../assets/hotsell4.jpeg'
// import hot4 from './../../../assets/hotsell5.jpeg'
import hot3 from './../../../assets/hotsel4.jpeg'
import hot4 from './../../../assets/hotsell7.jpeg'

const HotSell = () => {
    return (
        <div className='my-5'>
            <h1 className='text-2xl font-bold text-center p-6'>Hoat Sell </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div>
                    <div className="card  bg-base-100 shadow-xl border">
                        <figure className="px-10 pt-10">
                            <img src={hot1}  alt="Shoes" className="rounded-xl w-72 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Laptab</h2>
                            <p className='text-base text-gray-500 font-bold'>$200</p>
                            <button className='btn btn-success'>Add Card</button>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-xl border">
                        <figure className="px-10 pt-10">
                            <img src={hot2} alt="Shoes" className="rounded-xl w-72 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Phone</h2>
                            <p>$200</p>
                            <button className='btn btn-success'>Add Card</button>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-xl border">
                        <figure className="px-10 pt-10">
                            <img src={hot3} alt="Shoes" className="rounded-xl w-72 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Camera</h2>
                            <p className='text-base text-gray-500 font-bold'>$200</p>
                            <button className='btn btn-success'>Add Card</button>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-xl border">
                        <figure className="px-10 pt-10">
                            <img src={hot4} alt="Shoes" className="rounded-xl w-72 h-40" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Proccer</h2>
                            <p>$200</p>
                            <button className='btn btn-success'>Add Card</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotSell;