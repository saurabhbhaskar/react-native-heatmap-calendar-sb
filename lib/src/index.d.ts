declare module 'react-native-heatmap-calendar-sb' {
    import { ViewStyle, TextStyle } from 'react-native';
  
    interface HeatmapCalendarProps {
      dailyBookingPercentages: number[];
      colors: string[];
      todayBackgroundColor?: string;
      borderStyle?: ViewStyle;
      textColor?: string;
      todayTextColor?: string;
    }
  
    export default function HeatmapCalendar(props: HeatmapCalendarProps): JSX.Element;
  }
  