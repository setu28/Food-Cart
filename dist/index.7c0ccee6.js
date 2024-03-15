const heading = React.createElement("h1", {
    id: "title"
}, "Testing");
console.log("here");
const heading1 = React.createElement("h1", {
    id: "title"
}, "Testing2");
const parent = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading1
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
