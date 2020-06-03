---
title: 模块案例
icon: discover
category: Vue
tags:
  - Vuex
  - Demo
---

本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。

<!-- more -->

## Sreen.ts

```ts
/*
 * @Author: Mr.Hope
 * @Date: 2019-05-16 15:35:49
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-15 17:26:35
 * @Description: Vuex Screen Module
 */

import { ActionContext } from "vuex";
import { BaseState } from "../state";

/** 屏幕状态 */
export interface ScreenState {
  [propName: string]: string | number | boolean;
  /** 屏幕宽度 */
  width: number;
  /** 屏幕当前尺寸状态 */
  status: string;
  /** 屏幕是否符合xs状态 */
  xs: boolean;
  /** 屏幕是否符合sm状态 */
  sm: boolean;
  /** 屏幕是否符合md状态 */
  md: boolean;
  /** 屏幕是否符合lg状态 */
  lg: boolean;
  /** 屏幕是否符合xl状态 */
  xl: boolean;
  /** 屏幕是否符合xxl状态 */
  xxl: boolean;
}

/** 屏幕基础状态 */
const screenState: ScreenState = {
  width: 0,
  status: "",
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xxl: false,
};

export default {
  state: screenState,
  mutations: {
    /**
     * 设置屏幕状态
     *
     * @param state state
     * @param width 屏幕宽度
     */
    changeScreen(state: ScreenState, width: number) {
      let status;

      // judge scrren status
      if (width > 1200) status = width < 1600 ? "xl" : "xxl";
      else if (width < 768) status = width < 576 ? "xs" : "sm";
      else status = width < 992 ? "md" : "lg";

      // if there is a new status, then handle state detail
      if (state.status !== status) {
        const hash = ["sm", "md", "lg", "xl", "xxl"];

        state.status = status;

        if (status === "xs") {
          // make xs 'true' and the rest 'false'
          if (!state.xs) state.xs = true;
          hash.forEach((x) => {
            if (state[x]) state[x] = false;
          });
        } else {
          // mark xs false

          if (state.xs) state.xs = false;

          let index = hash.indexOf(status);
          let index2 = hash.length - 1;

          // change the elments after 'status' false
          while (index2 > index) {
            if (state[hash[index2]]) state[hash[index2]] = false;
            index2 -= 1;
          }
          // change the elments before 'status' true
          while (index + 1) {
            if (!state[hash[index]]) state[hash[index]] = true;
            index -= 1;
          }
        }
      }
    },

    /**
     * 设置屏幕宽度
     *
     * @param state state
     * @param width 屏幕宽度
     */
    screenWidth(state: ScreenState, width: number) {
      state.width = width;
    },
  },
  actions: {
    /**
     * 获取屏幕状态
     *
     * @param context state
     * @param width 屏幕宽度
     */
    screen(context: ActionContext<ScreenState, BaseState>, width: number) {
      context.commit("screenWidth", width);
      context.commit("changeScreen", width);
    },
  },
};
```

本文件包含了完整的一份 state、数个 mutation 和一个 action。
