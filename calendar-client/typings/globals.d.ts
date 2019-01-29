declare module '*.css' {
    const styles: any;
    export = styles;
}

interface IHomeProps {
    events: [IEvent];
}
interface IHomeState {
    modal: any;
}

interface IEventProps {
    isOpen: boolean;
    closeModal: Function;
    data: any;
    submit: Function;
}

interface IEventState {
    start: string;
    end: string;
    title: string;
    description: string;
}

interface IState {
    events: [IEvent];
}

interface IAction {
    type: string;
    events?: [IEvent];
    status?: number;
    body?: any;
}

interface IEvent {
    start: string;
    end: string;
    title: string;
    description: string;
}

interface IRequest {
    url: string;
    method: string;
    body: any;
    type: string;
}
