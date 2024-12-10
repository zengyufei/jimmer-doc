---
sidebar_position: 3
title: 保存指令
---

:::caution
最近几个月, 保存指令在做超大重构，所以没有时间更新这个目录下的所有文档。

除了全新的功能外，新版保存指令对已有功能的改动很小，和这个目录的描述基本一致；然而，新版保存指令**生成SQL的性能远高于这里所描述的。**。

好消息是，这个Jimmer历史上最绝大的重构终于完成并稳定，所以，很快会更新这个目录的所有内容。
:::

:::note
一句话保存任意复杂的数据结构，自动找出DIFF并修改数据库，类似于React/Vue
:::

保存指令是Jimmer一个非常强大的能力，可以大幅简化复杂数据结构保存业务的开发难度。

如果说[对象抓取器](../../query/object-fetcher)让作为输出信息的数据结构可以是任何形状，那么，保存指令就是让作为输入信息的数据结构也可以是任何形状。

如果读者对Web前端技术有一定的了解，可以用[React](https://react.dev/)或[Vue](https://vuejs.org/)中的`Virtual DOM diff`来类比。

:::tip
保存指令需要开发人员**彻底改变过去的思维模式**

-   思维模式的本质区别

    -   以前的传统思维模式

        自己去对比要保存的数据结构和数据库现有数据的差异，对有变化的局部执行`INSERT`、`UPDATE`或`DELETE`

    -   保存指令的思维模式

        接受客户端传递的数据结构，作为一个整体保存即可。Jimmer会处理好一切 *(自动对比要保存的数据结构和数据库现有数据的差异，对有变化的局部执行`INSERT`、`UPDATE`或`DELETE`)*

-   以前的习惯应该被更好的方法替代

    传统开发模式中，开发人员非常喜欢做一件事：先查询一个对象，再修改其部分属性，最后保存修改后的对象。

    虽然Jimmer也允许开发人员这样做，但是推荐性能更高的做法，请参见[不完整对象](./usage#12-用不完整对象避免先查后改)
:::

调用保存指令只需要让一行代码，但其内部隐藏了千遍万化的细节，文档难以穷举大量案例。因此，保存指令有独立的示例项目：

-   Java: [jimmer-examples/java/save-command](https://github.com/babyfish-ct/jimmer-examples/tree/main/java/save-command)

-   Kotlin: [jimmer-examples/kotlin/save-command-kt](https://github.com/babyfish-ct/jimmer-examples/tree/main/kotlin/save-command-kt)

用IDE随意打开其中一个，运行单元测试即可。
