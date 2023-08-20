import useLocalStorage from "./useLocalStorage";
 
const App = () => {
    const [show, setShow] = useLocalStorage("show", true);
    return (
        <div style={{ display: "grid", placeItems: "center" }}>
            <h1 style={{ color: "#11b5e5" }}>useLocalStorage</h1>
            <div>Store, retrieve, and synchronize data from the browser’s localStorage API with useLocalStorage</div>
            <h4>{show ? 'true' : 'false'}</h4>
            <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
        </div>
    );
};
 
export default App;