import React, {useContext} from "react";

// // //importing TaskContext from App.js
// import {TaskContext} from "../App";


const MainNavi = () => {
    // const {tasks, setTasks, spaces, setSpaces} = useContext(TaskContext);

    return (
        <>
            {/* tasks.map(([spaces]) => {
                 return {tasks.spaces}
            } */}
            {/* <div className= "tasks">
                {tasks[spaces].map((task) => ({task.name})
                )}
            </div> */}

            tasks[spaces].map((task)=> <div>{task.name}</div>)

            <section id="mainnavi">
                <h1>Inbox</h1>
                <div className="call_mom">
                    <input type="checkbox" className ="checkbox-round" />
                    <label for="yes">Call Mom</label><br /> 
                </div>
                <div className="scientific">
                    <input type="checkbox" className ="checkbox-round" />
                    <label for="yes">Buy the new issue of Scientific American</label><br />
                </div>

                <div className="josie">
                    <input type="checkbox" className ="checkbox-round" />
                    <label for="yes">Return the textbook to Josie</label><br /> 
                </div>

                <div className="rake">
                    <input type="checkbox" className ="checkbox-round" />
                    <label for="yes">Buy the new album by Rake</label><br /> 
                </div>
                <div className="dad">
                    <input type="checkbox" className ="checkbox-round" />
                    <label for="yes">Buy a gift card for Dad</label><br /> 
                </div>
                <div className="addtask1">
                    <i className="material-icons">add</i> <span style={{color:"#7e7d79"}}>Add task</span>
                 </div>
           </section>
       </>
    );
};

export default MainNavi;
