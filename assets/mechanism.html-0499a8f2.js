const e=JSON.parse('{"key":"v-687a9220","path":"/code/mini-app/guide/frame/mechanism.html","title":"小程序运行机制","lang":"zh-CN","frontmatter":{"title":"小程序运行机制","icon":"operate","category":["小程序"],"description":"前台/后台状态 小程序启动后，界面被展示给用户，此时小程序处于前台状态。 当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了后台状态，小程序还可以运行一小段时间。 当用户再次进入微信或再次打开小程序，小程序又会从后台进入前台。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被销毁，即完全终止运行。 小程序启动 这样，小程序启动可以分为两种情况，一种是冷启动，一种是热启动。 冷启动: 如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。 热启动: 如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/mini-app/guide/frame/mechanism.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"小程序运行机制"}],["meta",{"property":"og:description","content":"前台/后台状态 小程序启动后，界面被展示给用户，此时小程序处于前台状态。 当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了后台状态，小程序还可以运行一小段时间。 当用户再次进入微信或再次打开小程序，小程序又会从后台进入前台。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被销毁，即完全终止运行。 小程序启动 这样，小程序启动可以分为两种情况，一种是冷启动，一种是热启动。 冷启动: 如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。 热启动: 如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2021-03-16T11:58:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2021-03-16T11:58:28.000Z"}]]},"headers":[{"level":2,"title":"前台/后台状态","slug":"前台-后台状态","link":"#前台-后台状态","children":[]},{"level":2,"title":"小程序启动","slug":"小程序启动","link":"#小程序启动","children":[]},{"level":2,"title":"小程序销毁时机","slug":"小程序销毁时机","link":"#小程序销毁时机","children":[]},{"level":2,"title":"启动场景分类","slug":"启动场景分类","link":"#启动场景分类","children":[]},{"level":2,"title":"A 类场景的重新启动策略","slug":"a-类场景的重新启动策略","link":"#a-类场景的重新启动策略","children":[]},{"level":2,"title":"退出状态","slug":"退出状态","link":"#退出状态","children":[]}],"git":{"createdTime":1611033126000,"updatedTime":1615895908000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":5.85,"words":1754},"localizedDate":"2021年1月19日","filePathRelative":"code/mini-app/guide/frame/mechanism.md","excerpt":"<h2> 前台/后台状态</h2>\\n<p>小程序启动后，界面被展示给用户，此时小程序处于前台状态。</p>\\n<p>当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了后台状态，小程序还可以运行一小段时间。</p>\\n<p>当用户再次进入微信或再次打开小程序，小程序又会从后台进入前台。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被销毁，即完全终止运行。</p>\\n<h2> 小程序启动</h2>\\n<p>这样，小程序启动可以分为两种情况，一种是冷启动，一种是热启动。</p>\\n<ul>\\n<li>冷启动: 如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。</li>\\n<li>热启动: 如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。</li>\\n</ul>","autoDesc":true}');export{e as data};
