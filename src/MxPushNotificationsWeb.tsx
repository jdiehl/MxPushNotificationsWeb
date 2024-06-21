import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { MxPushNotificationsWebContainerProps } from "../typings/MxPushNotificationsWebProps";

import "./ui/MxPushNotificationsWeb.css";

export function MxPushNotificationsWeb({ sampleText }: MxPushNotificationsWebContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}
