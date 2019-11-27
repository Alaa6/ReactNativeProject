import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = ( state =[] , action) =>{
    if(action.type === 'to_array')
    {
       return action.data.split(' ');

    }

    if(action.type === 'add')
    {
        let values =state ;
        values.push(action.data)
        return values;

    }

    return state ;
}


//const reducer = combineReducers(reducers)
const store = createStore(reducers)
console.log(store);

 const action ={
     type : 'to_array',
     data : 'hello',
 }
 const action2={
    type : 'add',
    data : 'alaa',

 }

 store.dispatch(action); // opject l action msh hy4t8l 83r bl 5twa dy
 store.dispatch(action2); 

export default store ;