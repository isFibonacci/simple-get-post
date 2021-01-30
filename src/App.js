import React, { Component } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import store from "./redux/store";
import { deleteItemAction, fetchListAction, postItemAction} from "./redux/actionCreators";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.storeChange) 
  }
  componentDidMount() {
    const action = fetchListAction();
    store.dispatch(action);
  }
  removeData = (index) => {
    const  action = deleteItemAction(index);
    store.dispatch(action);
  }

  handleSubmit = (data) => {
    // random ID
    data = {...data,userId:Math.floor(Math.random()*1000)}
    const action = postItemAction(data);
    store.dispatch(action);
  };

  storeChange=()=>{
    this.setState(store.getState())
  }
  render() {
    const { list } = this.state;
    return (
      <div className="container">
        <h1>Simple post</h1>
        <p>Add a title and body into the table.</p>
        <Table Data={list} removeData={this.removeData} />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;