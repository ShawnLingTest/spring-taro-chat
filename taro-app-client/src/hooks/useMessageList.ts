import { getMessageList } from "@/service/apis/message";
import { useReady } from "@tarojs/taro";
import { useEffect, useRef, useState } from "react";


const pageSize = 10;

export function useMessageList() {
  const mounted = useRef(false);
  const isLoading = useRef(false);
  const page = useRef(1);
  const [messageList, setMessageList] = useState<API.Message.MessageListItem[]>([]);

  useReady(() => {
    isLoading.current = true;
    getMessageList({
      pageSize,
      current: page.current,
    }).then(({ data }) => {
      if (mounted.current) {
        setMessageList(data.list);
        isLoading.current = false;
      }
    }).catch(() => {
      if (mounted.current) {
        isLoading.current = false;
      }
    })
  })

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    }
  });

  const onEndReached = () => {
    if (!isLoading.current) {
      console.log("onEndReached");
      isLoading.current = true;
      getMessageList({
        pageSize,
        current: ++page.current
      }).then(({ data }) => {
        if (mounted.current) {
          setMessageList(prev => [...prev, ...data.list]);
          isLoading.current = false;
        }
      })
    }
  }

  return {
    messageList,
    onEndReached
  }
}