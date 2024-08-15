import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import {Provider} from 'react-redux';
import {store} from "../../state/store.ts";
import ParchView from "../parch-view.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <ParchView/>
    </Provider>
);