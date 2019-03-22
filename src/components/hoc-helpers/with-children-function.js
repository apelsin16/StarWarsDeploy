import React from 'react';

const withChildrenFunction = ( Wrapped, fn ) => {
    return (props) => {
        return (
            <Wrapped { ...props }> 
                {fn}
            </Wrapped>
        )
    }
}

export default withChildrenFunction;