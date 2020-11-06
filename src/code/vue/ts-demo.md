---
icon: discover
category: 基础
tags:
  - TypeScript
---

# TypeScript 组件 Demo

BaseList.vue 组件:

```xml
<!--
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: 基础列表
 * @Date: 2019-03-25 12:39:59
 * @LastEditTime: 2020-03-22 22:50:34
-->
<template>
  <div :id="myId" class="Ctn">
    <template v-if="head !== false">
      <div class="d-block d-lg-none commonhead" v-text="head"/>
      <div class="d-none d-lg-block myH3" v-text="head"/>
    </template>
    <div class="Lctn">
      <template v-for="List in listItem">
        <div
          :class="List.url || List.aim ? 'btn btn-light ' : ''"
          :id="List.id"
          :key="List.text"
          class="listCtn"
          v-if="List.display !== false && (List.url || List.aim)"
        >
          <div @click="navigate(List.aim)" class="list-Container" v-if="List.aim">
            <img :src="`/img${List.icon}`" class="listIcon" v-if="List.icon">
            <div class="LinkText" v-text="List.text"/>
            <div class="linkDesciption access" v-text="List.desc"/>
          </div>
          <router-link :to="List.url" class="list-Container" v-else-if="List.url">
            <img :src="List.icon" class="listIcon" v-if="List.icon">
            <div class="LinkText" v-text="List.text"/>
            <div class="linkDesciption access" v-text="List.desc"/>
          </router-link>
          <div class="list-Container" v-else>
            <img :src="`/img${List.icon}`" class="listIcon" v-if="List.icon">
            <div class="LinkText" v-text="List.text"/>
            <div class="linkDesciption" v-text="List.desc"/>
          </div>
        </div>
        <div
          :class="List.icon ? 'listIconDivline' : ''"
          :key="List.textKey"
          class="link-divline"
          v-if="List.display !== false"
        />
      </template>
    </div>
    <div class="commonfoot" v-if="foot" v-text="foot"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface List {
  [propName: string]: string;
}

@Component
export default class BaseList extends Vue {
  // Component ID
  @Prop(Number) private readonly myId!: number;

  // List content
  @Prop({ type: Array, required: true }) private readonly content!: List[];

  // List head text
  @Prop({ type: [String, Boolean], default: '' }) private readonly head!: string | boolean;

  // List footer text
  @Prop({ type: [String, Boolean], default: '' }) private readonly foot!: string | boolean;

  private get listItem() {
    // create a copy of @Prop('content)
    const listItem = JSON.parse(JSON.stringify(this.content));

    // Add key and item for the listitem in the copy
    listItem.forEach((element: List, index: number) => {
      if (this.myId) element.id = `list${this.myId}-${index}`;
      element.textKey = `${element.text}Key`;
    });

    return listItem;
  }

  // Navigate when clicking on a link
  private navigate(aim: string) {
    this.$router.push(`/handbook/${aim}`);
  }
}
</script>
<style scope>
.Ctn {
  margin: 0 -15px;
  width: auto;
}

.myH3 {
  width: 100%;
  max-width: 600px;
  text-align: left;
  font-weight: 500;
  padding: 12px 18px 6px 18px;
  min-height: 18px;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .Ctn {
    margin: 0 auto;
  }
}

.commonfoot,
.commonhead {
  font-size: 13px;
  color: #666;
  margin: 0 auto;
}

.commonhead {
  min-height: 9px;
  padding: 23px 15px 5px 15px;
}

.commonfoot {
  padding: 5px 15px 0 15px;
}

@media (min-width: 992px) {
  .commonfoot {
    font-size: 14px;
    padding: 12px 5% 4px 5%;
    max-width: 600px;
  }
}

.nm .commonhead {
  color: #fff;
}

.LinkText,
.commonhead,
.commonfoot {
  text-align: left;
}

.Lctn {
  background-color: #fefefe;
  width: 100%;
  position: relative;
}

.Lctn:after,
.Lctn:before {
  content: ' ';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  color: #cac9ce;
}

.Lctn:after {
  bottom: 0;
  border-bottom: 1px solid #cac9ce;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.4);
  transform: scaleY(0.4);
}

.Lctn:before {
  top: 0;
  border-top: 1px solid #cac9ce;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.4);
  transform: scaleY(0.4);
}

@media (min-width: 600px) {
  .Lctn:before {
    top: 0;
    right: auto;
    left: 0;
    width: 200%;
    height: 200%;
    border: 1px solid #cac9ce;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }

  .Lctn:after {
    display: none;
  }
}

.nm .Lctn:after,
.nm .Lctn:before {
  border-color: #353631;
}

.listCtn {
  width: 100%;
  padding: 0 15px;
  font-size: 17px;
  line-height: 1.45;
  border-radius: 0;
  border: none;
  color: #000;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.listCtn:active {
  background-color: #ececec;
}

.listCtn:empty {
  padding: 0;
}

.nm .listCtn {
  background-color: #000;
  color: #fff !important;
}

.LinkText {
  padding: 10px 0;
  line-height: 1.5;
}

.listIcon {
  width: 26px;
  height: 26px;
  margin-right: 10px;
}

.list-Container {
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.list-Container,
.LinkText {
  -webkit-flex: 1;
  flex: 1;
}

.linkDesciption {
  color: #999 !important;
  text-align: right;
}

.access {
  padding-right: 15px;
  position: relative;
}

.access:after {
  content: ' ';
  display: inline-block;
  width: 7px;
  height: 7px;
  border-width: 2px 2px 0 0;
  border-style: solid;
  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: absolute;
  top: 50%;
  margin-top: -5px;
  right: 2px;
  border-color: #c7c7cc;
}

.nm .access:after {
  border-color: #383833;
}

.link-divline {
  position: relative;
}

.link-divline:after {
  content: ' ';
  position: absolute;
  left: 15px;
  bottom: 0;
  right: 0;
  height: 1px;
  color: #cac9ce;
  border-bottom: 1px solid #cac9ce;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.4);
  transform: scaleY(0.4);
}

.listIcon.link-divline {
  width: 100%;
  height: 0;
}

.listIcon.link-divline:after {
  left: 50px;
}

.nm .link-divline:after {
  border-color: #353631;
}

.link-divline:last-child:after {
  display: none;
}

.nm .Lctn {
  background-color: #000;
  color: #fff;
}

.nm .LinkText {
  color: #fff;
}

.btn-fix {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
</style>
```

在本组件中，js 里 `props` 的写法变成了 `@Prop()`，同时 `compute` 属性变成了 `get`，`methods` 和生命周期一同直接写在了类中。
