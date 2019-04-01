import {connect} from 'react-redux';
import {addLabel, removeLabel, setLabel, generate} from '../actions';
import LabelForm from '../components/form';

const mapStateToProps = state => ({
    sliders: state.labels
});

const mapDispatchToProps = dispatch => ({
    addLabel: id => dispatch(addLabel(id)),
    removeLabel: id => dispatch(removeLabel(id)),
    setLabel: (id, value) => dispatch(setLabel(id, value)),
    generate: (labels, url, is_shuffled) => dispatch(generate(labels, url, is_shuffled))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LabelForm)