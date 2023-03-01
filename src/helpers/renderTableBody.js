import React from "react";

export function renderTableBody(data) {
    return Object.keys(data).map(key => {
        const value = data[key];

        if (typeof value === "object" && !Array.isArray(value)) {
            return renderTableBody(value);
        }

        return (
            <div
                className="table__item"
                key={key}
            >
                {key === "image" ? <img
                    src={value}
                    alt="avatar"
                    className="table__img"
                /> : value}
            </div>
        );
    });
}
