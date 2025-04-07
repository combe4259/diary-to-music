import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

const RecommendSong: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const items = [
    { id: 1, title: 'Title', subtitle: 'Singer' },
    { id: 2, title: 'Title', subtitle: 'Singer' },
    { id: 3, title: 'Title', subtitle: 'Singer' },
  ];

  const handleSave = () => {
    navigation.navigate('CalendarPage'); // CalendarPage로 이동
  };

  return (
    <View style={styles.container}>
      {items.map(item => (
        <View style={styles.songCard} key={item.id}>
          <View style={styles.songAvatar}>
            <Text style={styles.songAvatarText}>A</Text>
          </View>
          <View style={styles.songContent}>
            {item.title ? (
              <Text style={styles.songTitle}>{item.title}</Text>
            ) : (
              <Text style={styles.songTitle}>No Title</Text>
            )}
            {item.subtitle ? (
              <Text style={styles.songSubtitle}>{item.subtitle}</Text>
            ) : (
              <Text style={styles.songSubtitle}>No Singer</Text>
            )}
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.songSaveButton} onPress={handleSave}>
        <Text style={styles.songSaveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 5,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  songCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f3e8ff',
    borderRadius: 8,
    marginBottom: 10,
  },
  songAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20, // 50% 적용을 위해 숫자형으로 변경
    backgroundColor: '#a34db5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  songAvatarText: {
    color: '#fff',
    fontSize: 18,
  },
  songContent: {
  },
  songTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
  },
  songSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
  },
  songSaveButton: {
    width: 100,
    padding: 10,
    backgroundColor: '#6e4296',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  songSaveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RecommendSong;
