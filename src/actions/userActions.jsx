import axios from 'axios';
import{
	GET_USER ,
	GET_ERRORS,
} from './types';

export const getUser = userId => dispatch=>{
	const  token = localStorage.getItem('jwtToken');
	console.log(token);
	const config = {
    headers:{
      'Content-type' : 'application/json'
    }
  };
 if(token){
    config.headers['x-access-token'] = token;
}
axios
	.get(`/api/users/${userId}`, config)
	.then(res=>{

		dispatch({
			type: GET_USER,
			payload: res.data
		})
		})
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));

}

export const updateUser= (userId, userData) => dispatch=>{
	const  token = localStorage.getItem('jwtToken');
	console.log(token);
	const config = {
    headers:{
      'Content-type' : 'application/json'
    }
  };
 if(token){
    config.headers['x-access-token'] = token;
}
axios
	.put(`/api/users/${userId}`, userData, config)
	.then(res=>{

		dispatch({
			type: GET_USER,
			payload: res.data
		})
		console.log(res.data);
		})
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));


}


