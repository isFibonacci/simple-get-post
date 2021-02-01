import { GET_LIST, DELETE_ITEM, ADD_ITEM } from "./actionTypes";

// defaultState of store
const defaultState = {
  list: []
};
// eslint-disable-next-line
export default function (state = defaultState, action) {
    // get item from the API to fill the list
    if (action.type === GET_LIST) {
        // console.dir(action.data)
        // update the state
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    // delete item from the list
    if (action.type === DELETE_ITEM) {
        const index = action.index;
        let newState = JSON.parse(JSON.stringify(state));
        // console.dir("idex = " + index);
        newState.list.splice(index, 1);
        return newState;
    }
    // add new item from the list
    if (action.type === ADD_ITEM) {
        const data = action.data;
        // console.dir(data);
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(data);
        return newState;
    }
    // return the default state
    return state;
};