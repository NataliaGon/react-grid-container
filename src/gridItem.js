import * as React from "react";

export default function GridItem({ start, columns, marginRight, marginLeft, className, children }) {

    const gridItemStyleDesktop = {
        gridColumn: `${start}/${parseInt(start) + parseInt(columns)}`,
        marginRight: `${marginRight}px`,
        marginLeft: `${marginLeft}px`
    }

    return (
        <div style={gridItemStyleDesktop} className={className}>
            {children}
        </div>
    );
}

