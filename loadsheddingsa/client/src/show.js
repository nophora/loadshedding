const Showall = (payload) => (dispatch) => {

    dispatch({
        type: 'SHOWALL',
        payload: payload,

    })



}

export default Showall;
