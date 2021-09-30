const geodata = (payload) => (dispatch) => {

            dispatch({
                type: "GEODATA",
                payload: payload,
        
            })

}

export default geodata;
