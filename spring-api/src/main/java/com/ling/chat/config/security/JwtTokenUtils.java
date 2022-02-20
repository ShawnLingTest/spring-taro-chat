package com.ling.chat.config.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @author <a href="mailto:2505660478@qq.com">shangling</a>
 * @since 2022/2/10 6:21 PM
 */
@Component
public class JwtTokenUtils {

    private static final Logger logger = LoggerFactory.getLogger(JwtTokenUtils.class);

    private static final String CLAIM_KEY_USERNAME = "sub";

    private final JwtTokenProperties jwtTokenProperties;

    @Autowired
    JwtTokenUtils(JwtTokenProperties jwtTokenProperties) {
        this.jwtTokenProperties = jwtTokenProperties;
    }

    /**
     * 生成token
     * @param claims claims
     * @return token
     */
    private String generateToken(Map<String, Object> claims) {
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(generateExpirationDate())
                .signWith(SignatureAlgorithm.HS512, jwtTokenProperties.getSecret())
                .compact();
    }

    /**
     * 生成token 过期时间
     * @return Date
     */
    private Date generateExpirationDate() {
        return new Date(System.currentTimeMillis() + jwtTokenProperties.getExpiration() * 1000);
    }

    /**
     * 从token中获取 claims
     * @param token token令牌
     * @return claims
     */
    private Claims getClaimsFromToken(String token) {
        Claims claims = null;
        try {
            claims = Jwts.parser()
                    .setSigningKey(jwtTokenProperties.getSecret())
                    .parseClaimsJws(token)
                    .getBody();
        } catch (Exception e) {
            logger.info("JWT格式验证失败:{}", token);
        }
        return claims;
    }

    /**
     * 判断token是否失效
     * @param token token令牌
     * @return boolean
     */
    private boolean isTokenExpired (String token) {
        Claims claims = this.getClaimsFromToken(token);
        return claims.getExpiration().before(new Date());
    }

    /**
     * 根据用户信息生成 token
     * @param userDetails 用户信息
     * @return token
     */
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>(16);
        claims.put(CLAIM_KEY_USERNAME, userDetails.getUsername());
        return this.generateToken(claims);
    }

    /**
     * 从token获取username
     * @param token token令牌
     * @return username
     */
    public String getUsernameFromToken(String token) {
        String username;
        try {
            Claims claims = this.getClaimsFromToken(token);
            username = claims.getSubject();
        } catch (Exception e) {
            username = null;
        }
        return username;
    }

    /**
     * 验证token是否 有效
     * @param token token令牌
     * @param userDetails 从数据库查出的用户对象
     * @return boolean
     */
    public boolean validateToken(String token, UserDetails userDetails) {
        String username = this.getUsernameFromToken(token);
        return username.equals(userDetails.getUsername()) && !this.isTokenExpired(token);
    }
}
