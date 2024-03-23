import PropTypes from 'prop-types';
import Feature from '../../components/Feature/Feature';

const PriceOption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className='bg-blue-500 text-white flex  flex-col p-4 rounded-xl'>
            <h2 className='text-center' >
                <span className='text-7xl font-extrabold  '>{price}</span>
                <span className='text-3xl'>/month</span>
            </h2>
            <h4 className="text-5xl text-center my-8">{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='btn w-full font-bold bg-blue-600 mt-10 border-yellow-200'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes ={
    option:PropTypes.object
}
export default PriceOption;