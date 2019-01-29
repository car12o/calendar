import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Input, TextArea, Button } from 'semantic-ui-react';
import './style.css';
import eventsAc from '../../store/actions';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        display: 'block',
        width: '40vh',
    }
};

class Event extends React.Component<IEventProps, IEventState> {
    constructor(props: any) {
        super(props);
        this.state = {
            start: '',
            end: '',
            title: '',
            description: '',
        }
    }

    componentWillReceiveProps(props: IEventProps) {
        this.setState({
            start: props.data.start || '',
            end: props.data.end || '',
            title: props.data.title || '',
            description: props.data.description || '',
        });
    }

    beforeSubmit() {
        this.props.closeModal();
        this.props.submit({
            start: this.state.start,
            end: this.state.end,
            title: this.state.title,
            description: this.state.description,
        });
    }

    public render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                style={customStyles}
            >
                <div className="input-container">
                    <span className="input-label">Title:</span>
                    <Input type="text" className="input-element" placeholder="Title..." value={this.state.title}
                        onChange={(e) => this.setState({ title: e.target.value })} />
                </div>

                <div className="input-container">
                    <span className="input-label">Start date:</span>
                    <Input type="text" className="input-element" placeholder="YYYY / MM / DD" value={this.state.start}
                        onChange={(e) => this.setState({ start: e.target.value })} />
                </div>

                <div className="input-container">
                    <span className="input-label">End date:</span>
                    <Input type="text" className="input-element" placeholder="YYYY / MM / DD" value={this.state.end}
                        onChange={(e) => this.setState({ end: e.target.value })} />
                </div>

                <div className="input-container">
                    <span className="input-label">Description:</span>
                    <TextArea className="input-element" value={this.state.description}
                        onChange={(e: any) => this.setState({ description: e.target.value })} />
                </div>

                <Button className="ui primary button" onClick={() => this.beforeSubmit()}>Submit</Button>
                <Button className="ui secondary button" onClick={() => this.props.closeModal()}>Cancel</Button>
            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch: Function) => ({
    submit: (data: IEvent) => dispatch(eventsAc.submitEvent(data)),
});

export default connect(null, mapDispatchToProps)(Event);
