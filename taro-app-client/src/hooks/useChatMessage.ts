import { useEffect, useState } from "react";
import { MessageItemProps } from "../pages/liveChat/components/MessageItem";
import { getChatHistoryList } from "../service/apis/chat";

const PAGE_SIZE = 15;

export function useChatMessage() {
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [chatMessages, setChatMessages] = useState<MessageItemProps[]>([]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getChatHistoryList({
      pageSize: PAGE_SIZE,
      current,
    })
      .then(({ data }) => {
        if (mounted) {
          setLoading(false);
          setChatMessages(data.list);
        }
      })
      .catch(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [current]);

  const onLoadPage = () => {
    setCurrent((p) => ++p);
  };

  return {
    loading,
    chatMessages,
    onLoadPage,
  };
}
