import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
// custom
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { gameListAction } from "../store/actions";
import gamesData from "../games.json";
import { Card } from "../components";
import { Game } from "../components/card";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state: any) => ({
    list: state.game.list,
  }));

  useEffect(() => {
    dispatch(gameListAction(gamesData));
  }, []);

  const renderGameCard = ({ item }: { item: Game }) => <Card game={item} />;

  return (
    <View style={styles.list}>
      <Text style={styles.heading}>Games List</Text>
      <FlatList data={list} renderItem={renderGameCard} />
    </View>
  );
};

export default List;
