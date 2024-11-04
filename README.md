# React Native Heatmap Calendar SB

A React Native calendar heatmap component to visualize daily booking percentages. This customizable calendar allows you to display each day's booking percentage with color gradients, making it ideal for tracking booking or usage patterns over a month.

## Features

- Displays booking or usage patterns by day in a month view
- Customizable color shades for different booking levels
- Highlights today's date and selected date with custom styles
- Easy navigation between months

## Installation

Install the package via npm:

```bash
npm install react-native-heatmap-calendar-sb
```

## Peer Dependencies

This package requires the following dependencies:

```json
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"moment": ">= 2.24.0"
```

Make sure these dependencies are installed in your project.

## Usage

### Importing the Component

Import the `HeatmapCalendar` component in your React Native file:

```javascript
import HeatmapCalendar from 'react-native-heatmap-calendar-sb';
```

### Basic Example

Use the component by passing in required props, such as `dailyBookingPercentages` for booking data, `colors` for color shades, and other customizable styling options:

```javascript
<HeatmapCalendar
  dailyBookingPercentages={[10, 30, 50, 80, ...]} // array of percentages per day
  colors={['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da']} // color gradient based on percentages
  todayBackgroundColor="#FFD700" // custom color for today's background
  borderStyle={{ borderColor: '#000', borderWidth: 2 }}
  textColor="#333" // color of dates
  todayTextColor="#fff" // text color for today's date
/>
```

### Props

| Prop                 | Type        | Description                                                                                      |
|----------------------|-------------|--------------------------------------------------------------------------------------------------|
| `dailyBookingPercentages` | `Array<number>` | Array representing booking percentages for each day of the month.                                 |
| `colors`             | `Array<string>` | Array of colors representing different levels of booking, used for shading.                    |
| `todayBackgroundColor` | `string`   | Background color for today's date.                                                              |
| `borderStyle`        | `object`    | Styling for the border around today's date.                                                     |
| `textColor`          | `string`    | Default color for day text.                                                                     |
| `todayTextColor`     | `string`    | Text color for today's date.                                                                    |

### Example with Custom Colors and Styling

```javascript
<HeatmapCalendar
  dailyBookingPercentages={[10, 30, 60, 90]}
  colors={['#f0f8ff', '#a2d5f2', '#07689f', '#001f3f']}
  todayBackgroundColor="#FFD700"
  borderStyle={{ borderColor: '#000', borderWidth: 1 }}
  textColor="#333"
  todayTextColor="#fff"
/>
```

## Credits

Inspired by GitHub's commit calendar heatmap and other similar calendar heatmap libraries.

## License

This package is available under the MIT license. See the LICENSE file for more information.
