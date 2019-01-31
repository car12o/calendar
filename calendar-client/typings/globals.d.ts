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
    delete: Function;
}

interface ILoginProps {
    user: IUser;
    setUsername: Function;
    setPassword: Function;
    login: Function;
    register: Function;
}

interface IEvent {
    _id: string;
    start: string;
    end: string;
    title: string;
    description: string;
}

interface IState {
    events: [IEvent];
    user: IUser;
}

interface IAction {
    type: string;
    events?: [IEvent];
    status?: number;
    body?: any;
    username?: string;
    password?: string;
}

interface IRequest {
    url: string;
    method: string;
    body: any;
    type: string;
}

interface IUser {
    logged: boolean,
    _id: string,
    password: string,
    username: string,
}
