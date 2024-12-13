// functional component
function Greeting() {
    return <h1> hello world </h1>
}
// class component
class Greeting extends React.Component {
    render(){
        return <h1> hello world </h1>
    }
}

// JSX allows you to write HTML-like syntax in JavaScript
const element = <h1>Hello, JSX!</h1>;

// hooks
//useState: to manage and update state variables within functional components
function Counter(){
    const [count, setCount] = useState(0)
    return <button onClick={() => setCount(count+1)}> {count} </button>
}

//useEffect: you tell React that your component needs to do something after render
function DataFetcher(){
    const[data, setData] = useState(null)
    useEffect(()=>{
        fetch('/api/data')
            .then(res => res.json())
            .then(setData)
    }, [])

    return data ? <div>{data}</div> : <p>loading...</p>
}

//context: The Context API allows sharing state globally without prop drilling
const ThemeContext = React.createContext()

function App(){
    return(
        <ThemeContext.Provider value="dark">
            <Child />
        </ThemeContext.Provider>
    )
}

function Child(){
    const theme = useContext(ThemeContext)
    return <p>{theme}</p>
}

//Redux: helps you manage "global" state - state that is needed across many parts of your application.
const initialState = {count: 0}

function reducer(state=initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1}
        default:
            return state
    }
}

const store = createStore(reducer)