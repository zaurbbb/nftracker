import React, { memo } from "react";

const InputUI = memo(props => {
    return (
        <input
            {...props}
            className="form__input input"
        />
    );
});

export default InputUI;
