import * as React from "react";

interface SimpleButtonState {
    disabled: boolean;
}

interface SimpleButtonProps {
    type: string;
    className: string;
    disabled: boolean;
    text: string;
    onClick: (e: React.MouseEvent) => void;
}

export default class SimpleButton extends React.Component<SimpleButtonProps, SimpleButtonState> {
    constructor(props: SimpleButtonProps) {
        super(props);
        this.state = { disabled: false };
    }

    handleClick = (e: React.MouseEvent) => {
        if (!this.state.disabled) {
            this.props.onClick(e);
        }
    }

    render() {
        return (
            <button
                type="submit"
                className={this.props.className}
                disabled={this.props.disabled || this.state.disabled}
                onClick={this.handleClick}
            >
                <span>{this.props.text}</span>
            </button>
        );
    }
}
