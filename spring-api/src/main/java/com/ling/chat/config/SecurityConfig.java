package com.ling.chat.config;

import com.ling.chat.config.security.BasicAuthenticationEntryPoint;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.AccessDeniedHandlerImpl;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * @author <a href="mailto:2505660478@qq.com">shangling</a>
 * @since 2022/2/10 11:55 AM
 */
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring()
                .antMatchers("/account/login")
                .antMatchers("/account/wechat");
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // 关闭csrf认证 和cors , session
                .formLogin().disable()
                // csrf 关闭
                .csrf().disable()
                // 允许跨域请求
                .cors().disable()
                // session 设置
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilterBefore(, UsernamePasswordAuthenticationFilter.class);
                // 自定义异常处理
//                .and()
//                .exceptionHandling()
//                .accessDeniedHandler(restfulAccessDeniedHandler());
//                .authenticationEntryPoint(restAuthenticationEntryPoint());
    }

    public AccessDeniedHandler restfulAccessDeniedHandler() {
        return new AccessDeniedHandlerImpl();
    }

//    public AuthenticationEntryPoint restAuthenticationEntryPoint() {
//        return new BasicAuthenticationEntryPoint();
//    }
}
