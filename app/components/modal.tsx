import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
// custom
import { Color } from "../constants";

interface ModalProps {
  visible: boolean;
  imageUrl: string;
  onClose: () => void;
}

const CustomModal: React.FC<ModalProps> = ({ visible, imageUrl, onClose }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>

          {imageUrl !== "" ? (
            <Image style={styles.image} source={{ uri: imageUrl }} />
          ) : (
            <View style={styles.imageView}>
              <Text style={styles.message}>Image not found</Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.transparant,
  },
  modalContent: {
    backgroundColor: Color.white,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.azure,
  },
  image: {
    width: 300,
    height: 450,
    marginTop: 16,
    resizeMode: "contain",
  },
  imageView: {
    width: 300,
    height: 450,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});

export default CustomModal;
