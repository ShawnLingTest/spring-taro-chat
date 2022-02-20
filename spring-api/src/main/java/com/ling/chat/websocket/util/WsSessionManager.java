package com.ling.chat.websocket.util;

import org.apache.tomcat.websocket.WsSession;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author ling
 */
public class WsSessionManager {

    public static ConcurrentHashMap<String, WebSocketSession> SESSION_POOL = new ConcurrentHashMap<>();

    public static void add(String key, WebSocketSession session) {
        SESSION_POOL.put(key, session);
    }

    public static WebSocketSession remove(String key) {
        return SESSION_POOL.remove(key);
    }

    public static void removeAndClose(String key) {
        WebSocketSession session = remove(key);
        if (session != null) {
            try {
                session.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static WebSocketSession get(String key) {
        return SESSION_POOL.get(key);
    }
}
