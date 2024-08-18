# material-design-theme-provider

_zh-cn_

借助`@material/material-color-utilities`提供Material Design的主题控制（生成CSS令牌到:root样式），如深色模式切换、对比度控制、主题色控制。

```html
<material-design-theme-provider>
    <div class="md-tokens">
        <!-- Content -->
    </div>

    <style id="material-design-theme-tokens">
        .md-tokens {
            /* Styles */
        }
    </style>
</material-design-theme-provider>
```

## Components

|Component|Selector|Description|
|:--|:--|:--|
|Provider|material-design-theme-provider|生成主题配色样式在此组件范围|
