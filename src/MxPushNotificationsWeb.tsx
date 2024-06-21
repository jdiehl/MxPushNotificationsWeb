import { useEffect } from "react";

import { MxPushNotificationsWebContainerProps } from "../typings/MxPushNotificationsWebProps";

export function MxPushNotificationsWeb({ onMessage, attrTitle, attrBody, attrIdentifier, attrActions }: MxPushNotificationsWebContainerProps): null {
    useEffect(() => {
        // skip setup if onMessage is not set
        if (!onMessage) {
            return;
        }

        // firebase onMessage event
        const messaging = (window as any).firebase.messaging();
        return messaging.onMessage((messagePayload: any) => {
            console.info("Push Notification received:", messagePayload);

            // set notification attributes
            console.info(attrTitle, attrTitle?.setValue, messagePayload.notification.title);
            attrTitle?.setValue(messagePayload.notification.title);
            console.info(attrTitle?.validation);
            attrBody?.setValue(messagePayload.notification.body);
            attrIdentifier?.setValue(messagePayload.data.guid);
            attrActions?.setValue(messagePayload.data.actionName);

            // trigger onMessage event
            if (onMessage.canExecute && !onMessage.isExecuting) {
                onMessage.execute();
            }
        });
    }, [onMessage, attrTitle, attrBody, attrIdentifier, attrActions]);
    return null;
}
