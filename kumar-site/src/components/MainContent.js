import React from "react";
function MainContent(){
    const firstName = "John";
    const lastName = "Wick";
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {color:"#D96C0DD",backgroundColor:"#FF2D00"};
    if(hours < 12){
        timeOfDay = "Good Morning"
    }
    else if (hours < 17){
        timeOfDay = "Good afternoon"
    }
    else if (hours < 20){
        timeOfDay = "Good evening"
    }
    else {
        timeOfDay = "Good night"
    }
    return (
        <main>
            <div>
                <h3 style= {styles}>Main Content</h3>
                <h4>{` ${timeOfDay} ${firstName} ${lastName}`}</h4>
            </div>
        </main>
    )
}
export default MainContent