import { ScrollView, View, Text } from "@tarojs/components";
import { FC, Fragment } from "react";
import Avatar from "../Avatar";

export interface IndexesItem {
  key: string;
  title: string;
  items: ItemData[];
}

export interface ItemData {
  avatar: string;
  name: string;
}

export interface IndexesProps {
  list: IndexesItem[];
  onClickItem: (item: ItemData) => void;
}

const base = "indexes-container";

const Indexes: FC<IndexesProps> = ({ list, onClickItem, children }) => {
  const indexesKeys = list.map((item) => item.key);

  const jumpTarget = () => {};

  const onClickMenu = (key: string) => {};

  return (
    <View className={base}>
      <IndexesMenu keys={indexesKeys} onClick={onClickMenu} />
      <ScrollView className={`${base}__body`} scrollY>
        <View className={`${base}__content`}>{children}</View>
        <IndexesList list={list} onClick={onClickItem} />
      </ScrollView>
    </View>
  );
};

const IndexesMenu: FC<{
  keys: IndexesItem["key"][];
  onClick: (key: string) => void;
}> = ({ keys, onClick }) => {
  return (
    <View className={`${base}__menu`}>
      {keys.map((key) => {
        return (
          <View
            key={key}
            onClick={() => {
              onClick(key);
            }}
          >
            {key}
          </View>
        );
      })}
    </View>
  );
};

const IndexesList: FC<{
  list: IndexesProps["list"];
  onClick: (item: ItemData) => void;
}> = ({ list, onClick }) => {
  return (
    <Fragment>
      {list.map((indexes) => {
        return (
          <View className={`${base}__list`} key={indexes.key}>
            <View className={`${base}__list-title`}>{indexes.title}</View>
            {indexes.items.map((item, index) => {
              return (
                <View
                  className={`${base}__list-item`}
                  key={`item-${index}`}
                  onClick={() => {
                    onClick(item);
                  }}
                >
                  <Avatar image={item.avatar} />
                  <View className={`${base}__list-name`}>
                    <Text>{item.name}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}
    </Fragment>
  );
};

export default Indexes;
