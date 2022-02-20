package com.ling.chat.web;

import com.ling.chat.request.AccountLoginRequest;
import com.ling.chat.request.AccountWechatRequest;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * The type Account controller.
 *
 * @author <a href="mailto:2505660478@qq.com">shangling</a>
 * @since 2022 /2/10 4:48 PM
 */
@RestController
@RequestMapping("/account")
public class AccountController {

    /**
     * Login string.
     *sz
     * @return the string
     */
    @PostMapping("/login")
    public String login(@Validated @RequestBody AccountLoginRequest accountLoginRequest) {
        return "1233";
    }

    /**
     * WeChat string.
     *
     * @return the string
     */
    @PostMapping("/wechat")
    public String wechat(@Validated @RequestBody AccountWechatRequest accountWechatRequest) {
        return "12222";
    }
}
