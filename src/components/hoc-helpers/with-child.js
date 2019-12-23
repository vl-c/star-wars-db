import React from 'react';

const withChild = (child) => (Wrap) => {
    return (props) => {
        return (
            <Wrap {...props}>
                {child}
            </Wrap>
        );
    }
};

export default withChild;