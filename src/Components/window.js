import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { copyStyles } from "./copyStyles";

export const DepWindow = ({ children, closeWindowPortal }) => {
    var height = 580;
    var width = 340;
    var topPosition = window.screenTop || window.screenY || 0;
    var rightPosition = window.screenLeft + window.innerWidth - width;

    const externalWindow = useRef(
        window.open("", "", "height=" + height + ", width=" + width + ", top=" + topPosition + ", left=" + rightPosition + ", scrollbars=no")
    );

    const containerEl = document.createElement("div");

    useEffect(() => {
        const currentWindow = externalWindow.current;
        return () => currentWindow.close();
    }, []);

    externalWindow.current.document.title = "Metamask";
    externalWindow.current.document.body.appendChild(containerEl);
    copyStyles(document, externalWindow.current.document);

    externalWindow.current.addEventListener("beforeunload", () => {
        closeWindowPortal();
    });

    return ReactDOM.createPortal(children, containerEl);
};
