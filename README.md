# react-grid-container 
> A React component package to create customizable, responsive grid layouts. This package includes a `GridContainer` and `GridItem` component, providing flexibility to control columns, gutter spacing, padding, and other layout aspects.

## Features
- Configure the number of grid columns.
- Define gutter and padding for spacing control.
- Highly customizable grid and item positioning.
- Supports custom class names for styling.

## Installation

Install the package via npm:
```bash
npm install react-grid-container
```
## Usage

### 1. GridContainer

The `GridContainer` component defines the overall grid structure. It allows you to control the number of columns, the gutter (spacing between grid items), and padding around the container.

#### Props:
- **`columns`** (string | number): Specifies the number of columns in the grid. 
- **`gutter`** (string | number): Sets the spacing between grid items. (Default: `0`)
- **`padding`** (string | number): Adds padding around the grid container. (Default: `0`)
- **`className`** (string): Pass a custom class name for additional styling.

### 2. GridItem

The `GridItem` component represents an individual item within the `GridContainer`. It can span multiple columns and have customized margins.

#### Props:
- **`start`** (string | number): Defines the starting column for the grid item.
- **`columns`** (string | number): Determines how many columns the grid item spans.
- **`marginLeft`** (string | number): Optional left margin for the grid item.
- **`marginRight`** (string | number): Optional right margin for the grid item.
- **`className`** (string): Pass a custom class name for additional styling.

### Example

Here is an example of how to use the `GridContainer` and `GridItem` components:

```jsx
import React from 'react';
import { GridContainer, GridItem } from 'your-package-name';
import styles from './styles.module.css';

const ExampleComponent = () => (
  <GridContainer columns="20" gutter="16" padding="30" className={styles.gridContainer}>
    <div style={{ gridColumn: '5 / 5'}}>
      Item 1
    </div>
    <GridItem start="6" columns="7" marginRight="20" marginLeft="20" className={styles.gridItem}>
      Item 2
    </GridItem>
  </GridContainer>
);

export default ExampleComponent;
```
### Explanation:
The GridContainer component uses CSS Grid to create a layout with 20 columns.
The gutter is set to 16px, and padding is added around the container.
The first div inside the GridContainer spans a specific column (gridColumn: '5 / 5').
The GridItem component starts at column 6, spans 7 columns, and has custom margins applied.
### Output:
The grid will adapt based on the column count and gutter, creating a flexible layout.
You can further customize the grid and grid items using CSS or inline styles.
# react-grid-container
