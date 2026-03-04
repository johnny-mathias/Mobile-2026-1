import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Beba Água 💧</Text>
        <Text style={styles.appSubtitle}>HIDRATAÇÃO DIÁRIA</Text>
      </View>

      {/* Seção Principal / Indicador Visual */}
      <Text style={styles.content}></Text>


      {/* Nível de água */}

      {/* Botões */}
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Primeiro app da 2TDSPX 2026</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#0369a1',
  },
  appSubtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#38bdf8',
    letterSpacing: 2,
    marginTop: 4,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  outerCicle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 8,
    borderColor: '#bae6fd',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }
});
