import React, {Component} from 'react';

const withClassHoc = (WrappedComponent, className) => {
    const WithClassHoc =  class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardRef} {...this.props} />
                </div>
            );
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClassHoc {...props} forwardRef={ref} />;
    });
}

export default withClassHoc;