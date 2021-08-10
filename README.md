---
home: true
heroImage: logo.png
heroText: MyBatis Mapper
tagline: 新一代通用 Mapper
footer: abel533@gmail.com
features:
  - title: 开箱即用
    details: 无需任何配置，继承基类 Mapper 即可获得大量通用方法；
  - title: 随心所欲
    details: 通过复制粘贴的方式可以组建自己的基类 Mapper；
  - title: 全面贴心
    details: 提供 Service 层的封装方便业务使用和理解 Mapper；
  - title: 简单直观
    details: 提供 ActiveRecord 模式，结合 Spring Boot 自动配置直接上手用。

actions:
- text: 快速上手
  link: /docs/1.getting-started.html
  type: primary
- text: GitHub
  link: /guide/
  type: secondary
- text: Gitee
  link: /guide/
  type: secondary
---

### 项目集成

<CodeGroup>
<CodeGroupItem title="Maven" active>

```xml
<dependencies>
  <dependency>
    <groupId>io.mybatis</groupId>
    <artifactId>mybatis-mapper</artifactId>
    <version>1.0.0</version>
  </dependency>
  <!-- 使用 Service 层封装时 -->
  <dependency>
    <groupId>io.mybatis</groupId>
    <artifactId>mybatis-service</artifactId>
    <version>1.0.0</version>
  </dependency>
  <!-- 使用 ActiveRecord 模式时 -->
  <dependency>
    <groupId>io.mybatis</groupId>
    <artifactId>mybatis-activerecord</artifactId>
    <version>1.0.0</version>
  </dependency>
</dependencies>
```

</CodeGroupItem>
<CodeGroupItem title="Gradle">

```groovy
dependencies {
  compile("io.mybatis:mybatis-mapper:1.0.0")
  // 使用 Service 层封装时
  compile("io.mybatis:mybatis-service:1.0.0")
  // 使用 ActiveRecord 模式时
  compile("io.mybatis:mybatis-activerecord:1.0.0")
}
```

</CodeGroupItem>
</CodeGroup>