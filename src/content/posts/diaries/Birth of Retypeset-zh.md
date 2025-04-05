---
title: Retypeset 博客主题诞生记
published: 2025-04-04
tags:
  - 博客主题
lang: zh
abbrlink: birth-of-retypeset
---

## 初遇

去年入坑博客以后，就很喜欢刷别人的博客。一来是看看别人的博客主题，二来是能刷到别人分享的故事。

![活版印字主题](https://image.radishzz.cc/birth-of-retypeset/typograph.webp)

几个月前，我在 V2 偶然刷到 [活版印字](https://astro-theme-typography.vercel.app/) 这个主题，简约的风格直接戳中我的审美。再加上之前的 Hexo 博客性能太差，我一直想换来着，于是就决定把博客迁移到这个主题。

但上手之后，拥有强迫症的的我，发现了不少细节问题，例如：

- 淡入淡出的动画速率不太自然
- 页面跳转后会自动滚动
- 手势返回后没有过渡动画
- 移动端的内容边距，左窄右宽
- 桌面端部分区域无法上下滚动

![匀速淡入淡出，略显生硬](https://image.radishzz.cc/birth-of-retypeset/unnatural-animation-rate.gif)
<figure>
  <figcaption>匀速淡入淡出，略显生硬</figcaption>
</figure>

<figure>
  <img src="https://image.radishzz.cc/birth-of-retypeset/different-margins.webp" alt="移动端左边距为四格，右边距为六格" />
  <figcaption>移动端左边距为四格，右边距为六格</figcaption>
</figure>

不过这些倒是小事，自己改下就行。对我来说，最大的问题是主题不支持 i18n 功能。我指的 i18n 不是简单地更换 UI 语言，而是支持多语言路径。

i18n 对我来说是必需的。因为我之前发过一篇英文的 [三星优化指南](https://radishzz.cc/posts/d88c9984/)，结果收到了好几个 Bro 的私信感谢，表示对他们很有帮助。我感觉这挺有意义的，所以我打算以后都发布双语文章，还能锻炼一下英语水平。

## 困境

于是我开始给主题添加 i18n 功能。既然要加，不能就只支持中英两种语言，肯定得支持多种语言。根据 Astro 官方指南，我得给每个语言都新建一个文件夹，这也忒麻烦了…

![Astro 官方的 i18n 指南](https://image.radishzz.cc/birth-of-retypeset/astro-i18n-guide.webp)

接着我把官方推荐的所有 i18n 插件都试了一遍，效果都不理想，而且很麻烦。后来刷到一个推特帖子，我发现这方案不错，非常地巧妙，而且不需要额外的插件。

![推特 i18n 截图](https://image.radishzz.cc/birth-of-retypeset/twitter-i18n.webp)

 于是我按照这个思路，在 Cursor 的帮助下花了一周时间，终于是弄出一套方案。本地测试成功，非常开心。虽然我看不懂 Cursor 是怎么实现的，但能跑起来就行了。

 结果问题就来了。部署网站到 Netlify 时一直报错，我也看不懂报错信息，给 AI 修也修不好。当时就感觉心灰意冷，搞了这么久，还是失败了吗…

 无奈之下，我想到了向作者 Moeyua 发邮件求助。

## 转折

![邮件截图](https://image.radishzz.cc/birth-of-retypeset/mail-to-moeyua.webp)

没想到作者很快回复了我，并提交 PR 修复了报错问题。问题是解决了，但我发现 i18n 的实现方式被改成了重定向，“/” 根路径会跳转到 “/zh” 路径，这显然不是我想要的效果。也不好意思再去麻烦人家作者，试着自己改改吧。

当时我还看不懂语法，面对着主题原代码，AI 生成的代码，再加上作者修改的八百行代码，那可太难了，我感觉自己在看一本天书，实在是无从下手。没办法，我终于放弃了…

此时一个念头突然萌芽。要不我自己搞一个博客主题？

开玩笑，我都没学过代码，可拉倒吧。但是想法一旦出现，就在脑海中挥之不去了。在兴趣的强烈驱动下，我开始自学网页三件套，并画了几张草图，在 V2 [发帖求助](https://www.v2ex.com/t/1100131) 无果之后，毅然开始搭建自己想象中的博客主题。

![主题图片](https://image.radishzz.cc/birth-of-retypeset/retypeset-en-desktop.webp)

三个月过去了，也就有了现在你所看到的 [Retypeset](https://github.com/radishzzz/astro-theme-retypeset)。

## 细节

你可能会觉得，就这几个看起来很简单的页面，花了三个月？

### 功能

一是因为零基础。每个功能的实现，我都需要研究好久。在主题背后，其实有很多功能上的细节，以 i18n 为例：

- 完整的多语言路径功能。根路径 "/" 为默认语言，"/en/" 等为更多语言。
- 主题预设六种语言。你可以六种语言拉满，也可以设置为单语言站点。
- 可以设置每篇文章的语言。
- 站点标题/副标题支持多语言。当前路径是什么语言，标题/副标题即显示什么语言。
- [Open Graph](https://x.com/radishzz_?t=sGFn6BhNbDmIiHDUR1vU0g&s=09) 支持多语言。
- RSS 订阅也支持多语言（页脚位置）。
- 语言切换按键没有使用任何 JavaScript。

### 设计

二是因为视觉风格。你所看到的字体、颜色、排版、图标、动画等，都是我精心推敲之后的结果。由于篇幅限制，不适合在此展开介绍。不过我相信，你应该能感受到主题背后，那一股优雅的气质。下面分享一些设计过程中的草图：

<figure>
  <img src="https://image.radishzz.cc/birth-of-retypeset/draft-01.webp" alt="草图" />
  <figcaption>初稿</figcaption>
</figure>

<figure>
  <img src="https://image.radishzz.cc/birth-of-retypeset/draft-04.webp" alt="草图" />
  <figcaption>尝试在标题上添加一些线条装饰</figcaption>
</figure>

![草图](https://image.radishzz.cc/birth-of-retypeset/draft-02.webp)

<figure>
  <img src="https://image.radishzz.cc/birth-of-retypeset/draft-03.webp" alt="草图" />
  <figcaption>尝试不同配色，包括渐变</figcaption>
</figure>

<figure>
  <img src="https://image.radishzz.cc/birth-of-retypeset/draft-05.webp" alt="草图" />
  <figcaption>主题切换按键，其实是旋转 90 度的字母 O</figcaption>
</figure>

### Webkit

三是因为 Webkit。我有 Macbook Pro、三星 S23U、iPad Mini 6 和 iPhone15 Pro 这几台设备。每次网站部署之后，我都会在这几台设备上进行测试。

iPhone 上总是会出现一些奇怪的 BUG，例如切换页面时背景会闪烁? View Transition 期间字体会被裁切？图标的水平位置跟标题对不齐？换了几个浏览器都是这样，后来才知道是 iOS 上的 Webkit 浏览器引擎的锅。

以下图片均为慢动作拍摄。

![草图](https://image.radishzz.cc/birth-of-retypeset/bug-01.gif)

![草图](https://image.radishzz.cc/birth-of-retypeset/bug-02.gif)

为了解决这些奇怪的问题，我也是花了不少时间，好在最后都完美解决了。如果你在仓库中搜 ios，你可以看到不少注释，那些就是我的解决办法。

## 结语

最后说到这里，有点佩服我自己，感觉自己老牛逼了哈哈。其实也没有，我也不是大佬。我只是机缘巧合之下，像游戏闯关一样，度过一个个难关，才做出了这么一款博客主题。

写这篇文章也只是为了分享这款主题，以及主题背后的故事与细节。目前如果你喜欢的话，欢迎使用 [Retypeset](https://github.com/radishzzz/astro-theme-retypeset) 作为你的博客。

后续计划新增一些主题配色，优化一些样式，添加一些功能，或者分享一些经验？例如：

- 网页嵌入中文字体的最佳实践
- 纯 CSS 实现带手风琴动画的目录
- 使用 View Transition 实现亮暗主题切换

## 致谢

感谢以下开源项目的帮助：

- [Typography](https://github.com/moeyua/astro-theme-typography) 主题，提供灵感与主题框架 Astro + Typescript + UnoCSS
- [Fuwriu](https://github.com/saicaca/fuwari) 主题，参考阅读时间、滚动条、灯箱与目录功能
- [Redefine](Redefine) 主题，参考主题配置格式
- [AstroPaper](https://github.com/satnaing/astro-paper) 主题，参考 View Transition
- [heti](https://github.com/sivan/heti) 赫嗁，提供中文排版样式增强
- [EarlySummerSerif](https://github.com/GuiWonder/EarlySummerSerif) 初夏明朝字体

以及两位朋友：

- [Moeyua](https://github.com/moeyua) 原主题作者，提供 PR 与故事的开始
- [Xat](https://github.com/withxat) 热心老哥，在发帖求助两个月后主动联系我，提供 PR 与意见参考

<figure>
  <img src="https://image.radishzz.cc/birth-of-retypeset/xat-help.webp" alt="草图" />
  <figcaption>世上还是好人多啊。<del>也不多，就一个</del></figcaption>
</figure>

完。
