import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-4 px-5 hover:bg-yellow-700" >
            <a href={route.path}>{route.name}</a></li>
    );
};


Link.propTypes ={
    route:PropTypes.object
}
export default Link;