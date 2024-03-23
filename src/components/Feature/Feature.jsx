import PropTypes from 'prop-types';
import { AiFillCheckSquare } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'><AiFillCheckSquare className='text-yellow-200'></AiFillCheckSquare>{feature}</p>
        </div>
    );
};
Feature.propTypes={
    feature:PropTypes.string
}
export default Feature;