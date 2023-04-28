import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
// custom
import CustomModal from "./modal";
import { Color } from "../constants";

interface CardProps {
  game: Game;
}

export interface Game {
  id: number;
  title: string;
  highlightsSupported: boolean;
  fullyOptimized: boolean;
  steamUrl: string;
  publisher: string;
  genre: string;
  status: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ game }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const getImageUrl = () => {
    if (game.steamUrl === "") {
      return ""; // Empty string for no image URL
    } else {
      const lastIndex = game.steamUrl.lastIndexOf("/");
      const gameId = game.steamUrl.substring(lastIndex + 1);
      return `https://steamcdn-a.akamaihd.net/steam/apps/${gameId}/library_600x900_2x.jpg`;
    }
  };

  const handleOpenLink = (streamUrl: string) => {
    if (streamUrl) {
      Linking.openURL(streamUrl);
    }
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.property}>Publisher: {game.publisher}</Text>
      <Text style={styles.property}>Genre: {game.genre}</Text>
      <Text style={styles.property}>Status: {game.status}</Text>
      <Text style={styles.property}>
        Steam URL:{" "}
        <Text onPress={() => handleOpenLink(game.steamUrl)} style={styles.link}>
          {game.steamUrl}
        </Text>
      </Text>
      <CustomModal
        visible={modalVisible}
        imageUrl={getImageUrl()}
        onClose={closeModal}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Color.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  property: {
    fontSize: 16,
    marginBottom: 4,
  },
  link: {
    color: Color.link,
  },
});

export default Card;
