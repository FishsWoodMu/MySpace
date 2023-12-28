## 新get的css知识😁

### 文档布局

两行css实现响应式文档样式布局

[网格布局https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids]

```css
.parent{
   display:grid;
   grid-template-columns: minmax(150px, 25%) 1fr;
}
```

```html
<div class="parent">
  <div class="left">
    left
  </div>
  <div class="right">
    right
  </div>
</div>
```

