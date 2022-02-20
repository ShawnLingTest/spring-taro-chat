package com.ling.chat.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

/**
 * @author <a href="mailto:2505660478@qq.com">shangling</a>
 * @since 2022/2/10 5:01 PM
 */
@Data
public class AccountLoginRequest {

    @NotBlank(message = "用户名不能为空")
    private String username;

    @NotBlank(message = "密码不能为空")
    private String password;
}
