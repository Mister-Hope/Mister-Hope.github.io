---
title: 模块案例
icon: discover
category: Vue
tag:
  - Vuex
  - Demo
---

本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。

<!-- more -->

## Sreen.ts

```ts
import { Module } from "vuex";
import { BaseState } from "../state";

export interface SWState {
  status: string; // service-worker 状态
  error?: Error;
}

const swState: SWState = { status: "" };

const swModule: Module<SWState, BaseState> = {
  state: swState,
  mutations: {
    /**
     * @description: 设置 Service Worker 状态
     *
     * @param state swState
     * @param status ServiceWorker状态
     */
    swState(state: SWState, status: string): void {
      state.status = status;
    },

    /**
     * @description: 设置 Service Worker 错误
     *
     * @param state imagestate
     * @param error 遇到的错误
     */
    swError(state: SWState, error: Error): void {
      state.status = "error";
      state.error = error;
    },
  },
};

export default swModule;
```

本文件包含了完整的一份 state、数个 mutation 和一个 action。
