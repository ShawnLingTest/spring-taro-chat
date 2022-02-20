package com.ling.chat.config.security;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @author <a href="mailto:2505660478@qq.com">shangling</a>
 * @since 2022/2/10 6:35 PM
 */
@Data
@Component
@ConfigurationProperties(prefix = "jwt")
public class JwtTokenProperties {
    // chat-security-token
    private String secret;

    // 604800
    private Integer expiration;
}
