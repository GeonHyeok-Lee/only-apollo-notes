import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "./routes/Notes";
import Add from "./routes/Add";
import Note from "./routes/Note";
import Edit from "./routes/Edit";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={"/"} component={Notes} />
        <Route path={"/add"} component={Add} />
        <Route path={"/note/:id"} component={Note} />
        <Route path={"/edit/:id"} component={Edit} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
