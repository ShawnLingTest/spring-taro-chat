package com.ling.chat.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

/**
 * @author <a href="mailto:2505660478@qq.com">shangling</a>
 * @since 2022/2/10 5:04 PM
 */
@Data
public class AccountWechatRequest {

    @NotBlank(message = "jsCode不能为空")
    private String jsCode;
}
