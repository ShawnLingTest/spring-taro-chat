package com.ling.chat.config;

import cn.binarywang.wx.miniapp.api.WxMaService;
import cn.binarywang.wx.miniapp.api.impl.WxMaServiceImpl;
import cn.binarywang.wx.miniapp.config.impl.WxMaDefaultConfigImpl;

/**
 * @author <a href="mailto:2505660478@qq.com">shangling</a>
 * @since 2022/2/10 5:25 PM
 */
public class WxMaConfig {

    public WxMaService wxMaService() {
        WxMaService wxMaService = new WxMaServiceImpl();
//        wxMaService.addConfig("wx23c2f16410e0ba63");
        return wxMaService;
    }
}
