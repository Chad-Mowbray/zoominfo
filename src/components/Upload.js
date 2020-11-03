import React from 'react'



class Upload extends React.Component {


    zoomOrEngagement = () => {
        const label = this.props.match.params.label
        console.log("label: ", label)
        if(label === "zoom") {
            return  <div>
                        <h1>Upload your Zoom .csv file here: </h1>
                        <input type="file" name="zoom" onChange={this.props.onChangeHandlerZoom}/>
                    </div>
        } if(label === "engagement") {
            return  <div>
                        <h1>Upload your Engagement .csv file here: </h1>
                        <input type="file" name="zoom" onChange={this.props.onChangeHandlerEngagement}/>
                    </div>

        }

    }





    render() {
        console.log(this.props)

        const stuff = this.zoomOrEngagement()
        

        return(
           <h1>{stuff}</h1>

        )
    }
}


export default Upload