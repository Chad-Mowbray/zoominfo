import OrdinalFrame from "semiotic/lib/OrdinalFrame"
import React from 'react'


class ShowZoom extends React.Component {

    processData = () => {

        console.log(this.props.displayData)
        // console.log(this.props.displayData["0"])
        let temp = this.props.displayData

        const data = {
            Monday: temp["0"],
            Tuesday: temp["1"],
            Wednesday: temp["2"],
            Thursday: temp["3"],
            Friday: temp["4"]
        }

        let dataArray = []
        for(let day in data){
            dataArray.push({
                day: day,
                visitors: data[day]
            })
        }
        return dataArray
    }


    render() {
        const processedData = this.processData()
        
        const frameProps = { 
            /* --- Data --- */
              data: processedData,
            
            /* --- Size --- */
              size: [500,500],
            
            /* --- Layout --- */
              type: "bar",
            
            /* --- Process --- */
              oAccessor: "day",
              rAccessor: "visitors",
            
            /* --- Customize --- */
              style: { fill: "#ac58e5", stroke: "white" },
              title: "Average VOH Clients per Day of Week",
            
            /* --- Annotate --- */
              oLabel: true,


              axes: [{
                orient: "left",
                label: (
                  <text textAnchor="middle">
                    <tspan fill={"#ac58e5"}>Number of Clients</tspan> 

                  </text>
                )
              }]
            }



        return(
            <div>
                 <OrdinalFrame {...frameProps} />
            </div>
           
        )
    }
}

export default ShowZoom