import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

// views without layouts

import Index from "views/Index.js";
import Bulletin from "views/announcements.js";
import Events from "views/events.js";
import Blogs from "views/blogs.js";
import Tools from "views/tools.js";
import About from "views/aboutus.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}

      {/* add routes without layouts */}
        <Route path="/about" exact component={About} />
        <Route path="/announcements" exact component={Bulletin} />
        <Route path="/events" exact component={Events} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/tools" exact component={Tools} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);