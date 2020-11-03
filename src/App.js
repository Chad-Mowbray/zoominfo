import './App.css';
import React from 'react'

class App extends React.Component {

  state = {
    title: "loading...",
    fileResponse: ''
  }

  fetchFileResp = async (file) => {
    const fd = new FormData();
    fd.append('file', file);
    let response = await fetch('https://zoom-data-back.herokuapp.com/upload', {
                                            method: 'POST',
                                            body: fd
                                            })
    let respJson = await response.json()
    this.setState({fileResponse: respJson})

  
  }

  onChangeHandler = event => {

    console.log(event.target.files[0])
    this.fetchFileResp(event.target.files[0])

  }

  async componentDidMount() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let resJson = await res.json()
    this.setState({title: resJson.title})
  }
  render(){
    return (
      <div className="App">
        <h1>This is a sample app to test github pages</h1>
        <h2>Some loaded stuff: {this.state.title}</h2>
        <input type="file" name="file" onChange={this.onChangeHandler}/>
        <p>File Response: {JSON.stringify(this.state.fileResponse)}</p>

      </div>
    );
  }
}
export default App;
