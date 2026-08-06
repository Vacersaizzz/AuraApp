```javascript
import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function CanvasScreen() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>✍️ Пиши всё, что приходит в голову...</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Напиши заметку, задачу или идею..."
        placeholderTextColor="#aaa"
        value={text}
        onChangeText={setText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f4f0', paddingTop: 60, paddingHorizontal: 24 },
  hint: { fontSize: 14, color: '#999', marginBottom: 20, textAlign: 'center' },
  input: { flex: 1, fontSize: 22, lineHeight: 34, color: '#1a1a1a', padding: 0 },
});
```
