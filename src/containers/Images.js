import {connect} from 'react-redux';
import ImageCarousel from '../components/carousel';
import {updateImages} from '../actions';


const mapStateToProps = state => ({
    images: state.images
});

const mapDispatchToProps = dispatch => ({
    updateImages: imgs => dispatch(updateImages(imgs)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageCarousel)