import { Popup } from 'devextreme-react/popup';
import { ScrollView } from 'devextreme-react';

const PopupEx = (props) => {
    const handleContentReady = () => {
        return (
            <div className="popupEx">
                <ScrollView>
                    <div className="popupBody">{props.content}</div>
                </ScrollView>
                <div
                    className="popupButtons"
                    id={props.portalId}
                    ref={props.buttonsRef}
                >
                    {props.buttons}
                </div>
            </div>
        );
    };

    return <Popup {...props} contentRender={handleContentReady}/>;
};

export { PopupEx };
