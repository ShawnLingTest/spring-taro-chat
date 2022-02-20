package com.ling.chat.websocket.service;

import com.ling.chat.websocket.util.WsSessionManager;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;

/**
 * The type Ws service.
 *
 * @author ling
 */
@Service
public class WsService {

    /**
     * Send msg.
     *
     * @param session the session
     * @param text    the text
     * @throws IOException the io exception
     */
    public void sendMsg(WebSocketSession session, String text) throws IOException {
        session.sendMessage(new TextMessage(text));
    }

    /**
     * 广播消息
     *
     * @param text 消息
     * @throws IOException 异常
     */
    public void broadcastMsg(String text) throws IOException {
        for (WebSocketSession session : WsSessionManager.SESSION_POOL.values()) {
            session.sendMessage(new TextMessage(text));
        }
    }
}
