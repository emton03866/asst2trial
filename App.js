import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home/Home';
//importing all components
import LeftNavi from "./LeftNavi/LeftNavi";
import MainNavi from "./MainNavi/MainNavi";
import Header from "./Header/Header";
import { useEffect , useState, useContext,createContext} from 'react';
import JSONDATA from "./mock_data.json"
export const TaskContext = createContext();


//creating a context so we can declare  states
// export const TaskContext = createContext();

function App() {
    //for the filter
    const [searchTerm, setSearchTerm] = useState(' ')
    //declaring states (i'm unsure which or how many i need lol)
    const [shownav, setShow] = useState(true);

    const [tasks,setTasks] = useState([
        { "Inbox":[
            {
                "name": "task1"
                ,"isComplete": false
                ,"description": "call mom"
            }
        ], "Today":[{
            "name": "task1"
            ,"isComplete": false
            ,"description": "call mom"
        }], "Upcoming":[{
            "name": "task1"
            ,"isComplete": false
            ,"description": "call mom"
        }]
        }
    ]);
const[spaces,setSpaces] = useState("Inbox");


// task_dictionary[spaces] = value.map()

// const [count, setCount] = useState (0);

let space="Inbox";
let incompleteCount = {"Inbox": 0, "Today": 0, "Upcoming":0}

// useEffect(())

  return (
    <>

        <div className="App">
            {/* for the onclick */}
            {
                shownav?<LeftNavi />:null
            }
            <button onClick={()=> setShow(!shownav)}>Menu</button>
            {/* for the filter */}
            <input type = "text" placeholder = "Quick Find" onChange={(event) => {setSearchTerm(event.target.value)}}/>
            {JSONDATA.filter((val)=>{
                if (searchTerm ==" ") {
                    return val
                } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) =>{
                return <div className="user" key={key}><p>{val.first_name} </p></div>;
            })}
        </div>
        
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                spaces,
                setSpaces
            }}
            >
        </TaskContext.Provider>
        <div>
            <Header />
        </div>
        <div>
            <LeftNavi />
        </div>
        <div>
            <MainNavi />
        </div>
        {/* </TaskContext.Provider> */}
            {/* <TaskContext.Provider
                // value= {{
                // tasks,
                // setTasks,
                
                // }}
                //add more
            >

                <div>
                    <LeftNavi />
                </div>
                {/* <div>
                    <MainNavi />
                </div> */}
                {/* <div>
                    <Header/>
                </div>
            </TaskContext.Provider> */} 
  
        {/* <Home.js/> */}
    {/* <div className="App">
        <Home.js/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    {/* </div> */}
    </>
  );
}

export default App;
