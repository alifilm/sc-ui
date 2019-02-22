<style lang="scss">
	.demo-box{
		.row{
			margin-bottom:10px;
		}
	}
</style>
# Button 按钮
-----
### 基础用法
使用```type```, ```plain```和```round``` 属性来定义Button 的样式

<div class="demo-box">
  <div class="demo-block">
    <div class="row">
      <sc-button>默认按钮</sc-button>
      <sc-button type="primary">主要按钮</sc-button>
<!--       <sc-button type="success">成功按钮</sc-button>
      <sc-button type="warning">警告按钮</sc-button>
      <sc-button type="danger">危险按钮</sc-button>
      <sc-button type="info">信息按钮</sc-button> -->
    </div>
    <div class="row">
      <sc-button plain>朴素按钮</sc-button>
	  <sc-button type="primary" plain>主要按钮</sc-button>
      <!--<sc-button type="success" plain>成功按钮</sc-button>
      <sc-button type="warning" plain>警告按钮</sc-button>
      <sc-button type="danger" plain>危险按钮</sc-button>
      <sc-button type="info" plain>信息按钮</sc-button> -->
    </div>
    <div class="row">
      <sc-button round>默认按钮</sc-button>
      <sc-button type="primary" round>主要按钮</sc-button>
     <!--  <sc-button type="success" round>成功按钮</sc-button>
      <sc-button type="warning" round>警告按钮</sc-button>
      <sc-button type="danger" round>危险按钮</sc-button>
      <sc-button type="info" round>信息按钮</sc-button> -->
    </div>
  </div>

  ::: demo
  ```html
    <div>
      <sc-button type="default">默认按钮</sc-button>
      <sc-button type="primary">主要按钮</sc-button>
      <sc-button type="success">成功按钮</sc-button>
      <sc-button type="warning">警告按钮</sc-button>
      <sc-button type="danger">危险按钮</sc-button>
      <sc-button type="info">信息按钮</sc-button>
    </div>
    <div>
      <sc-button type="default" plain=true>朴素按钮</sc-button>
      <sc-button type="primary" plain=true>主要按钮</sc-button>
      <sc-button type="success" plain=true>成功按钮</sc-button>
      <sc-button type="warning" plain=true>警告按钮</sc-button>
      <sc-button type="danger" plain=true>危险按钮</sc-button>
      <sc-button type="info" plain=true>信息按钮</sc-button>
    </div>
    <div>
      <sc-button type="default" round>默认按钮</sc-button>
      <sc-button type="primary" round>主要按钮</sc-button>
      <sc-button type="success" round>成功按钮</sc-button>
      <sc-button type="warning" round>警告按钮</sc-button>
      <sc-button type="danger" round>危险按钮</sc-button>
      <sc-button type="info" round>信息按钮</sc-button>
    </div>
  ```
  :::
</div>

### 禁用状态

按钮不可用状态。

<div class="demo-box">
  <div class="demo-block">
    <div class="row">
      <sc-button disabled>默认按钮</sc-button>
      <sc-button type="primary" disabled>主要按钮</sc-button>
<!--       <sc-button type="success" disabled>成功按钮</sc-button>
      <sc-button type="info" disabled>信息按钮</sc-button>
      <sc-button type="warning" disabled>警告按钮</sc-button>
      <sc-button type="danger" disabled>危险按钮</sc-button> -->
    </div>
    <div class="row">
      <sc-button plain disabled>朴素按钮</sc-button>
      <sc-button type="primary" plain disabled>主要按钮</sc-button>
 <!--      <sc-button type="success" plain disabled>成功按钮</sc-button>
      <sc-button type="info" plain disabled>信息按钮</sc-button>
      <sc-button type="warning" plain disabled>警告按钮</sc-button>
      <sc-button type="danger" plain disabled>危险按钮</sc-button> -->
    </div>
  </div>

  ::: demo
  ```html
    <div>
      <sc-button disabled>默认按钮</sc-button>
      <sc-button type="primary" disabled>主要按钮</sc-button>
      <sc-button type="success" disabled>成功按钮</sc-button>
      <sc-button type="info" disabled>信息按钮</sc-button>
      <sc-button type="warning" disabled>警告按钮</sc-button>
      <sc-button type="danger" disabled>危险按钮</sc-button>
    </div>
    <div >
      <sc-button plain disabled>朴素按钮</sc-button>
      <sc-button type="primary" plain disabled>主要按钮</sc-button>
      <sc-button type="success" plain disabled>成功按钮</sc-button>
      <sc-button type="info" plain disabled>信息按钮</sc-button>
      <sc-button type="warning" plain disabled>警告按钮</sc-button>
      <sc-button type="danger" plain disabled>危险按钮</sc-button>
    </div>
  ```
  :::
</div>

<!-- ### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。

<div class="demo-box">
  <div class="demo-block">
    <sc-button size="small">小尺寸</sc-button>
    <sc-button size="medium">中等尺寸</sc-button>
    <sc-button size="default">默认尺寸</sc-button>
  </div>

  ::: demo
  ```html
  <div>
    <sc-button size="small">小尺寸</sc-button>
    <sc-button size="medium">中等尺寸</sc-button>
    <sc-button size="default">默认尺寸</sc-button>
  </div>

  ``` 
  :::
</div> -->

### 图标按钮

通过icon设置图标名

<div class="demo-box">
  <div class="demo-block">
    <div class="row">
      <sc-button type="primary" icon="sc-icon-edit"></sc-button>
      <sc-button type="primary" icon="sc-icon-search">搜索</sc-button>
    </div>
  </div>

  ::: demo
  ```html
  <div>
    <sc-button type="primary" icon="sc-icon-edit"></sc-button>
    <sc-button type="primary" icon="sc-icon-search">搜索</sc-button>
  </div>

  ```
  :::
</div>

### 按钮加载中

loading状态的按钮

<div class="demo-box">
  <div class="demo-block">
    <div class="row">
      <sc-button type="primary" loading>加载中</sc-button>
    </div>
  </div>

  ::: demo
  ```html
  <div>
    <sc-button type="primary" loading>加载中</sc-button>
  </div>
  
   ```
  :::
</div>  


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type      | 类型   | string    |   primary |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon      | 图标，已有的图标库中的图标名 | string   |  —  |  —  |