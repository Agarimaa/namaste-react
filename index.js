const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react!"
);

/*
      <div id="parent">
        <div id="child">
            <h1>i am an h1 tag</h1>
            <h2>i am an h2 tag</h2>
        </div>
      </div>
      */
// lets build like this(nested elements)

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
   [ React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")]
  ),
  React.createElement(
    "div",
    { id: "child" },
   [ React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")]
  )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


