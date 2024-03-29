const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello React by Akshay Saini"
);

const para = React.createElement("p", null, "namaste react");

const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello React new"
);

const para1 = React.createElement("p", null, "namaste react new");

const child = React.createElement("div", { id: "child" }, [heading, para]);

const child1 = React.createElement("div", { id: "child" }, [heading1, para1]);

const parent = React.createElement("div", { id: "parent" }, [child, child1]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
