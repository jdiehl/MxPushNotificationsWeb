import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { MxPushNotificationsWebPreviewProps } from "../typings/MxPushNotificationsWebProps";

export function preview({ sampleText }: MxPushNotificationsWebPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/MxPushNotificationsWeb.css");
}
