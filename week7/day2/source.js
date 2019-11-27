
function UpdateTitle(props) {
  useEffect(() => {
    document.title = props.name;
  });

  return (<div>{props.name}</div>);
}

//So how to we console.log after we setState???

function Dependencies(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Susan");

  useEffect(() => {
    console.log(count);
    setName("Counter");
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <React.Fragment>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setName("John")}>{name}</button>
    </React.Fragment>
  );
}

// CLEANUP also add with coutner for each listener

function Cleanup(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    console.log("create effect");
    const setSize = event => {
      console.log("how many?");
      setWidth(event.target.innerWidth);
      setHeight(event.target.innerHeight);
    };
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, []);

  return (
    <div>
      {width}, {height}
    </div>
  );
}

//minimize the dependency array 
useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(id);
}, [count]);

//To 

useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  return () => clearInterval(id);
}, []);