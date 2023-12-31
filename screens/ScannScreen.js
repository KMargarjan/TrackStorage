import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ScannedData from "./ScannedDataScreen";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const navigation = useNavigation();

  const resetScan = () => {
    setScannedData(null);
    setScanned(false);
  };

  useEffect(() => {
    const unsubscribeBlur = navigation.addListener("blur", () => {
      // Screen is blurred (navigated away from)
      resetScan();
    });

    return () => {
      // Cleanup the event listeners
      unsubscribeBlur();
    };
  }, [navigation]);

  const handleBarCodeScanned = ({ type, data }) => {
    if (data) {
      const scanData = {
        title: data,
        created: moment().format("YYYY-MM-DD HH:mm"),
        id: type,
        description: "Scanned data",
      };

      setScannedData(scanData);
      setScanned(false);
    }
  };

  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={!scanned ? handleBarCodeScanned : undefined}
          style={styles.camera}
        />
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  const addToList = () => {
    navigation.navigate("List", { scannedData });
    resetScan();
  };

  return (
    <View style={styles.container}>
      {!scannedData && <Text style={styles.title}>Please scan QR Code</Text>}
      {!scannedData && renderCamera()}

      {scannedData && (
        <Text>
          <ScannedData
            data={scannedData}
            onCancel={resetScan}
            onAddToList={addToList}
          />
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    width: "80%",
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
