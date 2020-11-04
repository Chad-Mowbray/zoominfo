import './App.css';
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home'
import Show from './components/Show'
import postZoom  from './api/api'  
import Upload from './components/Upload'


class App extends React.Component {

  state = {
    redirect: false,
    zoomFile: '',
    engagementFile: ''
  }


  onChangeHandlerZoom = event => {
    console.log("zoom")
    const zoomFile = event.target.files[0]
    // console.log(zoomFile)
    this.setState({zoomFile: zoomFile, redirect: true})

  }

  onChangeHandlerEngagement = event => {
    // console.log("engagement")
    const engagementFile = event.target.files[0]
    // console.log(engagementFile)
    this.setState({engagementFile: engagementFile, redirect: true})
  }

  renderRedirect = () => {
      let label = ''
      if(this.state.zoomFile) {
        label = "zoom"
      } if(this.state.engagementFile) {
        label = 'engagement'
      }

      if (this.state.redirect) {
        return <Redirect to={`${process.env.PUBLIC_URL}/show/${label}`} />
      }
  }


  render(){
    return (
      <div>

        {this.renderRedirect()}
        <Switch>
            <Route path={process.env.PUBLIC_URL + "/"} component={Home} exact />
            <Route path={process.env.PUBLIC_URL + "/upload/:label"} 
                    render={(props) => (
                    <Upload {...props} onChangeHandlerZoom={this.onChangeHandlerZoom} onChangeHandlerEngagement={this.onChangeHandlerEngagement} />
                    )}
                     exact />
            <Route path={process.env.PUBLIC_URL + "/show/:label"} 
                    render={(props) => (
                    <Show {...props} zoomFile={this.state.zoomFile} engagementFile={this.state.engagementFile} />
                    )}
                    />
          
        </Switch>

      </div>
    );
  }
}
export default App;
