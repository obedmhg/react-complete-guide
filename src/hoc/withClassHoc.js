import React from 'react';

const withClassHoc = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
}

export default withClassHoc;