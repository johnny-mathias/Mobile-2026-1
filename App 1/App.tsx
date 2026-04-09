import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [cups, setCups] = useState<number>(0);
  const [goal, setGoal] = useState<number>(8);

  const percentage: number = (cups / goal) * 100;

  const removeCup = () => {
    setCups(Math.max(0, cups - 1));
  };

  const addCups = () => {
    setCups(Math.min(goal, cups + 1));
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Beba Água 💧</Text>
        <Text style={styles.appSubtitle}>HIDRATAÇÃO DIÁRIA</Text>
      </View>

      {/* Seção Principal / Indicador Visual */}
      <View style={styles.content}>
      <View
        style={styles.metaContainer}
      >
        <View style={styles.meta}>
          <TouchableOpacity onPress={() => setGoal(Math.max(0, goal - 1))}>
            <Text style={styles.metaButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.metaText}>Meta diária: {goal}</Text>
          <TouchableOpacity onPress={() => setGoal(goal + 1)}>
            <Text style={styles.metaButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.outerCircleWrapper}></View>

        {/* Círculo */}
        <View style={styles.outerCircle}>
          {/* Nível da água */}
          <View style={[styles.waterLevel, { height: `${percentage}%` }]} />

          {/* Quantidade de copos tomados */}
          <Text style={styles.numberText}>{cups}</Text>
          <Text style={styles.labelText}>COPOS</Text>
        </View>

        {/* Feedback */}
        <View style={styles.feedbackContainer}>
          <Text
            style={[styles.statusText, cups >= goal && { color: "#059669" }]}
          >
            {cups >= goal
              ? "Parabéns! Meta batida!"
              : `Faltam ${goal - cups} copos para a meta.`}
          </Text>
          {/* Barra de Progresso */}
          <View style={styles.progressBarBackground}>
            <View
              style={[styles.progressBar, { width: `${percentage}%` }]}
            ></View>
          </View>
        </View>
      </View>

      {/* Botões / Rodapé */}
      <View style={styles.footer}>
        {/* Botão Principal */}
        <TouchableOpacity style={styles.mainButton} onPress={() => addCups()}>
          <Text style={styles.mainButtonText}>BEBER 1 COPO (200 ML)</Text>
        </TouchableOpacity>
        {/* Botões de ajuste */}
        <View style={styles.adjustmentArea}>
          <TouchableOpacity style={styles.adjustButton} onPress={removeCup}>
            <Text style={styles.adjustButtonText}>Remover</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.adjustButton}
            onPress={() => setCups(0)}
          >
            <Text style={styles.adjustButtonText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F9FF",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  header: {
    marginTop: 60,
    alignItems: "center",
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#0369A1",
  },
  appSubtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#38BDF8",
    letterSpacing: 2,
    marginTop: 4,
  },
  content: {
    alignItems: "center",
    width: "100%",
  },

  metaContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },

  metaText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#94a3d8",
  },

  metaButton: {
    width: 30,
    height: 30,
    borderRadius: 18,
    backgroundColor: "#388df8",
    elevation: 3,
    shadowColor: "#0284c7",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
    color: "#fff",
  },

  outerCircleWrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: "#FFF",
    borderRadius: 110,
  },

  outerCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 8,
    borderColor: "#BAE6FD",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#FFF",
  },
  waterLevel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0EA5E9",
    opacity: 0.2,
  },

  numberText: {
    fontSize: 72,
    fontWeight: "900",
    color: "#0284C7",
  },

  labelText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#7DD3FC",
  },

  progressBarBackground: {
    width: "100%",
    height: 12,
    backgroundColor: "#E0F2FE",
    borderRadius: 6,
    marginTop: 15,
  },

  progressBar: {
    height: "100%",
    width: "70%",
    backgroundColor: "#0284C7",
    borderRadius: 6,
  },

  feedbackContainer: {
    marginTop: 40,
    alignItems: "center",
    width: "80%",
  },

  statusText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#475569",
    textAlign: "center",
  },

  footer: {
    width: "100%",
    paddingHorizontal: 30,
    marginBottom: 20,
  },

  mainButton: {
    backgroundColor: "#0284C7",
    paddingVertical: 22,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5, // elevation para sombra (Android)
  },

  mainButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "900",
  },

  adjustmentArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },

  adjustButton: {
    padding: 10,
  },

  adjustButtonText: {
    color: "#94A3BB",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
