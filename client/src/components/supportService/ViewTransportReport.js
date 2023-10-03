import React from "react";
import "./SupportService.css";
import "./Supportserviceform.css";

export default function ViewMarksNavPage() {
    return (
        <div><br/><br/>
        <button  class="download"  onClick={window.print}> <b> 📥Download Report </b> </button>      
      <h2 className="hostelgrapgh">Transport Details Graph</h2>
        <br></br>
            <div style={{ marginLeft: 320, fontSize: 20 }}>
                <iframe title="myFrame001" width="900" height="490" src="https://charts.mongodb.com/charts-project-0-fthfb/embed/dashboards?id=7f3a942d-7841-4bde-a4c7-850559bebacb&theme=dark&autoRefresh=true&maxDataAge=10&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale"></iframe>
            </div>
        </div>

    );
}