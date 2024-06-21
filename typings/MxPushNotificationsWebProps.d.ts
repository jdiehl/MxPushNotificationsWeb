/**
 * This file was generated from MxPushNotificationsWeb.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface MxPushNotificationsWebContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    onMessage?: ActionValue;
    attrTitle: EditableValue<string>;
    attrBody: EditableValue<string>;
    attrIdentifier: EditableValue<string>;
    attrActions: EditableValue<string>;
}

export interface MxPushNotificationsWebPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    onMessage: {} | null;
    attrTitle: string;
    attrBody: string;
    attrIdentifier: string;
    attrActions: string;
}
