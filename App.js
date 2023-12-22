const parent = React.createElement("div", {Id : "parent"},[
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h1", {}, "I'm a h2 tag")
    ]),
    React.createElement("div", {id:child2}, [
        React.createElement("h1",{}, "I'm a h1 tag"),
        React.createElement("h1",{}, "I'm a h2 tag")
    ]),
]);