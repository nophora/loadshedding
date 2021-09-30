const Position = (payload) => (dispatch) => {

    dispatch({
        type: 'POSITION',
        payload: payload,

    })



}

export default Position;
