import { connect } from 'react-redux';
import { addCommentActionCreator, addNewTextActionCreator } from '../../../state/commentsData-reducer'
import Text from "./Text";

let mapStateToProps = (state) => {
    return {
        comments: state.commentsData.comments,
        newCommentText: state.commentsData.newCommentText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addComment: () => {
            dispatch(addCommentActionCreator())
        },
        addNewText: (text) => {
            dispatch(addNewTextActionCreator(text))
        }
    }
}

const TextContainer = connect(mapStateToProps, mapDispatchToProps)(Text);

export default TextContainer;