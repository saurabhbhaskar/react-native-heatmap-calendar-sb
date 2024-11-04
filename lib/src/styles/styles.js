import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  calendarContainer: {
    padding: 16,
    width: '100%',
  },
  fullDateText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: '700',
    color: '#222',
  },
  monthNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  arrowButton: {
    paddingHorizontal: 8,
    backgroundColor: '#f9f9f9',
    padding: 10,
    paddingVertical: 2,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderWidth: 0.4,
  },
  arrowText: {
    fontSize: 18,
  },
  monthYearText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
  daysOfWeekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
    marginRight: 8,
  },
  dayOfWeekText: {
    width: screenWidth / 7 - 5,
    textAlign: 'center',
    color: '#444',
    fontSize: 12,
    fontWeight: '600',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayBox: {
    width: screenWidth / 7 - 6,
    height: screenWidth / 10,
    marginVertical: 6,
  },
  dayTouchable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: '100%',
    marginHorizontal: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  dayText: {
    fontSize: 14,
    textShadowColor: '#444',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontWeight: '500',
  },
});

export default styles;
