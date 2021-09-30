const issue = (payload) => (dispatch) => {

   
    fetch(`https://loadsheddingsa.herokuapp.com/loadsheddingapi/getissue`, {
            method: 'GET',
             headers: {
                'content-type': 'application/json',
            },
             
        }).then((response) => response.json()).then(data => {
          
            dispatch({
                type: 'ISSUE',
                payload: data,
        
            })
                
        }).catch()
   
    



}

export default issue;
