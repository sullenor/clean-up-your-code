import React, {Component, PropTypes} from 'react';

class Button extends Component {
  _onClick = e => {
    this.props.onClick(e);
  }
  render() {
    const {children,className} = this.props;

    return (
      <Button
        className={className}
        onClick={this._onClick}>{children}</Button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
