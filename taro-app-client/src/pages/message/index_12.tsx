import VirtualList from "@tarojs/components/virtual-list";
import { View } from "@tarojs/components";
import React, { FC, memo, useRef, Component } from "react";
import Taro, { getSystemInfoSync } from "@tarojs/taro";

const Row = React.memo(({ id, index, style, data }) => {
  return (
    <View
      id={id}
      className={index % 2 ? "ListItemOdd" : "ListItemEven"}
      style={style}
    >
      Row {index} : {data[index]}
    </View>
  );
});

function buildData(offset = 0) {
  return Array(100)
    .fill(0)
    .map((_, i) => i + offset);
}

export default class Index extends Component {
  state = {
    data: buildData(0),
  };

  loading = false;

  listReachBottom() {
    console.log("listReachBottom");
    Taro.showLoading();
    // 如果 loading 与视图相关，那它就应该放在 `this.state` 里
    // 我们这里使用的是一个同步的 API 调用 loading，所以不需要
    this.loading = true;
    setTimeout(() => {
      const { data } = this.state;
      this.setState(
        {
          data: data.concat(buildData(data.length)),
        },
        () => {
          this.loading = false;
          Taro.hideLoading();
        }
      );
    }, 1000);
  }

  render() {
    console.log(getSystemInfoSync());
    const { data } = this.state;
    const dataLen = data.length;
    const itemSize = 100;
    return (
      <VirtualList
        className="List"
        height={500}
        itemData={data}
        itemCount={dataLen}
        itemSize={itemSize}
        width="100%"
        onScroll={({ scrollDirection, scrollOffset }) => {
          console.log(scrollOffset, (dataLen - 10) * itemSize + 100);
          if (
            // 避免重复加载数据
            !this.loading &&
            // 只有往前滚动我们才触发
            scrollDirection === "forward" &&
            // 5 = (列表高度 / 单项列表高度)
            // 100 = 滚动提前加载量，可根据样式情况调整
            scrollOffset > (dataLen - 10) * itemSize + 100
          ) {
            this.listReachBottom();
          }
        }}
      >
        {Row}
      </VirtualList>
    );
  }
}
