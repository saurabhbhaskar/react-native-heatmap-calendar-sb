import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import moment from 'moment';
import { screenWidth, DEFAULT_BORDER_STYLE, DEFAULT_TEXT_COLOR, DEFAULT_TODAY_TEXT_COLOR, DAYS_OF_WEEK } from './utils/constants';
import { getDaysInMonth, getFirstDayOfMonth, formatDate, isToday } from './utils/helpers';
import { getShadeIndex } from './utils/utils';
import styles from './styles/styles';

const HeatmapCalendar = ({
  dailyBookingPercentages,
  colors,
  todayBackgroundColor,
  borderStyle = DEFAULT_BORDER_STYLE,
  textColor = DEFAULT_TEXT_COLOR,
  todayTextColor = DEFAULT_TODAY_TEXT_COLOR,
}) => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(formatDate(moment(), 'dddd, D MMM'));

  const daysInMonth = getDaysInMonth(currentDate);
  const today = moment();
  const isCurrentMonth = today.isSame(currentDate, 'month');
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);

  const handlePreviousMonth = () => {
    setCurrentDate(prev => prev.clone().subtract(1, 'month'));
    setSelectedDate('');
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => prev.clone().add(1, 'month'));
    setSelectedDate('');
  };

  const handleDateSelect = (dayNumber) => {
    const clickedDate = formatDate(currentDate.clone().date(dayNumber), 'dddd, D MMM');
    setSelectedDate(clickedDate);
  };

  return (
    <View style={styles.calendarContainer}>
      <Text style={styles.fullDateText}>{selectedDate || formatDate(currentDate, 'dddd, D MMM')}</Text>

      <View style={styles.monthNavigation}>
        <TouchableOpacity style={styles.arrowButton} onPress={handlePreviousMonth}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.monthYearText}>{formatDate(currentDate, 'MMMM YYYY')}</Text>
        <TouchableOpacity style={styles.arrowButton} onPress={handleNextMonth}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.daysOfWeekContainer}>
        {DAYS_OF_WEEK.map((day, index) => (
          <Text key={index} style={styles.dayOfWeekText}>{day}</Text>
        ))}
      </View>

      <View style={styles.gridContainer}>
        {Array.from({ length: (firstDayOfMonth + 6) % 7 }).map((_, index) => (
          <View key={`empty-${index}`} style={styles.dayBox} />
        ))}

        {Array.from({ length: daysInMonth }, (_, index) => {
          const dayNumber = index + 1;
          const percentage = dailyBookingPercentages[index] || 0;
          const shadeIndex = getShadeIndex(percentage, colors);

          const isTodayFlag = isToday(today, currentDate.clone().date(dayNumber));
          const isSelected = selectedDate === formatDate(currentDate.clone().date(dayNumber), 'dddd, D MMM');

          return (
            <View key={index} style={styles.dayBox}>
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: isSelected ? todayBackgroundColor : colors[shadeIndex],
                    borderColor: isTodayFlag ? borderStyle.borderColor : 'transparent',
                    borderWidth: isTodayFlag ? borderStyle.borderWidth : 0,
                  },
                  styles.dayTouchable,
                ]}
                onPress={() => handleDateSelect(dayNumber)}
              >
                <Text
                  style={[
                    styles.dayText,
                    { color: isSelected ? todayTextColor : textColor },
                  ]}
                >
                  {dayNumber}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default HeatmapCalendar;
