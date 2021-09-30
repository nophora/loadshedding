const Pstate = (payload) => (dispatch) => {

    dispatch({
        type: 'P-STATE',
        payload: payload,

    })



}

export default Pstate;
