import { LOGIN_ATTEMPT ,LOGIN_SUCCESS ,LOGIN_FAILED} from './Types';  //ActionType
import axios from 'axios';

 export function loginAction (email , password){ // function bta5od l response mn component l login
 
   // console.log({email,password});
  
 
    
    return (dispatch) =>{ 

       
        dispatch({type:LOGIN_ATTEMPT}); // lazem a3ml dispatch ll action 3shan l app kolo yshof l data dy
       
        axios.post(`https://www.akfa-group.net/achieveYourDreamBackend/signin`
        , {email ,password ,type:'CLIENT'})

         .then(res => handleResponse(dispatch ,res.data)
         )
         .catch(error =>{ console.error(error)})

         
    } 
    


}

const handleResponse =(dispatch ,data )=>{
   
       if(data)
       {
           onLoginSuccess(dispatch ,data.user );

       }
       else{
           console.log('error');
           
           onLoginFailed(dispatch, data.message)
       }
        

             
}

const onLoginSuccess= (dispatch ,user )=>{
    dispatch({
        type:LOGIN_SUCCESS ,
        user : user,
       } ); 



}

const onLoginFailed =(dispatch ,errorMessage)=>{
    dispatch({
        type :LOGIN_FAILED ,
        error :errorMessage
    })

}
