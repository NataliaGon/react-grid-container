import React from "react";
import cx from "classnames";
import "./GridContainer.css";

export default function GridContainer({ className, columns, gutter, padding, children }) {

    return (
        <div className={cx('component', className)} style={{
            gridTemplateColumns: `repeat(${columns}, calc(calc(100% - calc(calc(${columns} - 1)*${gutter}px))/ ${columns}))`,
            columnGap: `${gutter}px`,
            padding: `${padding}px`
        }}>{children}</div>
    );
}
