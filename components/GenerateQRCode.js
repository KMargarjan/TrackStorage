import React from "react";
import QRCode from "react-native-qrcode-svg";

export default function GenerateQRCode() {
  return (
    <QRCode value="https://chat.openai.com/c/086c3519-fabe-4581-8241-34d78965619c" />
  );
}
