
import { useLoaderData } from 'react-router-dom';
import Bannar from './Bannar';
import BrandCatagory from './BrandCatagory';
import HotSell from './HotSell';
import MarketPlaseNews from './MarketPlaseNews';

const Home = () => {
    const categorydata = useLoaderData();
    return (
        <div>
            <Bannar></Bannar>
            <div>
                <h1 className='text-2xl font-bold text-center py-10'>Our Product Category</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        categorydata?.map((data, idx) => <BrandCatagory key={idx} data={data} ></BrandCatagory>)
                    }
                </div>
            </div>
            <HotSell></HotSell>
            <MarketPlaseNews></MarketPlaseNews>
        </div>
    );
};

export default Home;