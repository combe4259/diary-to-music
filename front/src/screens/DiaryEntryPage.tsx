import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App'; // App.tsx에서 RootStackParamList를 정의한 파일에서 가져옵니다.

type DiaryEntryPageRouteProp = RouteProp<RootStackParamList, 'DiaryEntryPage'>;

const DiaryEntryPage: React.FC = () => {
  const route = useRoute<DiaryEntryPageRouteProp>();
  // const navigation = useNavigation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [content, setContent] = useState<string | undefined>(undefined);
  const selectedDate = route.params?.date;

  const handleSave = () => {
    navigation.navigate('RecommendSong');
  };

  const handleCancel = () => {
    navigation.navigate('CalendarPage');
  };

  return (
    <View style={styles.container}>
      {selectedDate && (
        <Text style={styles.dateDisplay}>
          {selectedDate.toDateString()}
        </Text>
      )}
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  dateDisplay: {
    fontSize: 24,
    backgroundColor: '#ecdeff',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    textAlign: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Android의 그림자
  },
  titleInput: {
    width: '90%',
    marginTop: 10,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fbf4ff',
  },
  contentInput: {
    width: '90%',
    marginTop: 10,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fbf4ff',
    height: 100,
    textAlignVertical: 'top', // TextInput에서 텍스트가 위에서 시작하도록 설정
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#65558F',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    width: 100,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DiaryEntryPage;
