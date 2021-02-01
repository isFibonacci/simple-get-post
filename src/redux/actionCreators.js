import { GET_LIST,DELETE_ITEM, ADD_ITEM} from "./actionTypes";

export const getListAction = (data) => ({
    type: GET_LIST,
    data
});

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
});

export const addItemAction = (data) => ({
    type: ADD_ITEM,
    data
});

export const fetchListAction = () =>{
    return async (dispatch)=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        return res.json()
    }).catch(() => [])
    // take only 10 items
    data = data.slice(0,10);
    const action = getListAction(data)
    dispatch(action)
  }
}

export const postItemAction = (data)=>{
    return async (dispatch)=>{
        let item = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify({
            data
        }),
        "Content-type": "application/json; charset=UTF-8"
        }).then((res)=>{
            return res.json()
        })
        // console.dir(item)

        // add into the list
        const action = addItemAction({...data,...item})
        dispatch(action)
    }
}