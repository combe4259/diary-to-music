import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Calendar } from 'react-native-calendars';

type Song = {
  title: string;
  artist: string;
};

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [diaryEntry, setDiaryEntry] = useState<string>('일기.. 내용..');
  const [selectedSong, setSelectedSong] = useState<Song>({ title: 'Title', artist: 'Singer' });
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
    // 여기에서 선택된 날짜에 맞는 데이터를 불러옵니다
    // 예시 데이터:
    const sampleDiaryEntry = '일기.. 내용..';
    const sampleSong: Song = { title: 'Title', artist: 'Singer' };
    setDiaryEntry(sampleDiaryEntry);
    setSelectedSong(sampleSong);
  };

  const handleEditClick = () => {
    if (selectedDate) {
      navigation.navigate('DiaryEntryPage', { date: new Date(selectedDate) });
    }
  };

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: '#65558F' },
        }}
        style={styles.calendar} // 달력을 가득 차게 확장
        theme={{
          selectedDayBackgroundColor: '#65558F',
          selectedDayTextColor: '#ffffff',
        }}
      />
      {selectedDate && (
        <View style={styles.diaryContainer}>
          <View style={styles.diaryEntry}>
            <Text style={styles.diaryTitle}>Content</Text>
            <Text style={styles.diaryText}>{diaryEntry}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedDate('')}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton} onPress={handleEditClick}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.songInfo}>
            <View style={styles.songIcon}>
              <Text style={styles.songIconText}>A</Text>
            </View>
            <View style={styles.songDetails}>
              <Text style={styles.songTitle}>{selectedSong.title}</Text>
              <Text style={styles.songArtist}>{selectedSong.artist}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  calendar: {
    width: '100%', // 화면 가로 전체를 차지하도록 설정
    borderRadius: 10,
  },
  datePickerButton: {
    padding: 10,
    backgroundColor: '#65558F',
    borderRadius: 5,
  },
  dateText: {
    color: 'white',
    fontSize: 18,
  },
  diaryContainer: {
    width: '100%',
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  diaryEntry: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#e1d5e4',
    borderWidth: 1,
  },
  diaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  diaryText: {
    marginVertical: 10,
    fontSize: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#65558F',
  },
  songInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#e1d5e4',
    borderWidth: 1,
  },
  songIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#65558F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  songIconText: {
    color: 'white',
    fontSize: 20,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#65558F',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CalendarPage;
