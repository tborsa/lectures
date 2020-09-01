
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

const ShowMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("create effect");
    document.addEventListener("mousemove", mP => {
      setX(mP.clientX);
      setY(mP.clientY);
    });
  }, []);

  return (
    <h1
      style={{
        color: `rgb(${x}, ${y}, 100)`
    }}
    >
      X: {x}, Y: {y}
    </h1>
  );
};

// add to show cleanup
return () => window.removeEventListener("resize", setXY);

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