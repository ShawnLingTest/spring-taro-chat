package com.ling.chat.websocket.job;

import com.ling.chat.websocket.service.WsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDateTime;

/**
 * @author ling
 */
@Component
public class MessageJob {

    WsService wsService;

    @Autowired
    MessageJob(WsService wsService) {
        this.wsService = wsService;
    }

    @Scheduled(cron = "0/5 * * * * *")
    public void run() {
        try {
            this.wsService.broadcastMsg("自动发送消息" + LocalDateTime.now());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
