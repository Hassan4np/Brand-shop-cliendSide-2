import bannar from './../../../assets/Bannar.jpg'

const Bannar = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannar})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">WellCome </h1>
                    <p className="mb-5">Discover cutting-edge electronics for a connected world. Explore our range of innovative devices designed to elevate your lifestyle.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;