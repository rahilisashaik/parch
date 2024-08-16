import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux';
import {store} from "./state/store.ts";
import ParchView from "./parch-view/parch-view.tsx";
import LogInCard from "./components/login-card/login-card-component.tsx";
import reportWebVitals from "./reportWebVitals.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ParchView/>
    </Provider>
);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
