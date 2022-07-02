import PropTypes from 'prop-types';

const PostImages = ({ images }) => {
    return (
        <div>postimage</div>
    )
}
PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;
