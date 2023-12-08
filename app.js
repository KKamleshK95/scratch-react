import React from 'react';
import  ReactDOM from 'react-dom/client';

const container=  React.createElement("h1" ,{id:"kamlesh"}, 
React.createElement("h2" ,{id:"kamlesh"}, "container2"),"container" 
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);