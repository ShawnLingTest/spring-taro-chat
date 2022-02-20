import Indexes from "@/components/Indexes";
import { useNavigation } from "@/hooks/useNavigation";
import { getContactList } from "@/service/apis/contact";
import { View, Text } from "@tarojs/components";
import { useReady } from "@tarojs/taro";
import { useState } from "react";

const Contacts = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const { navigateTo } = useNavigation();

  useReady(() => {
    getContactList({}).then(({ data }) => {
      setContacts(data);
    });
  });

  return (
    <View>
      <Indexes
        list={contacts}
        onClickItem={() => {
          navigateTo({
            url: "/pages/userProfile/index",
          });
        }}
      >
        <Text>自定义内容</Text>
      </Indexes>
    </View>
  );
};

export default Contacts;
