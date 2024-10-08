segment-anything-2论文地址 : https://arxiv.org/pdf/2408.00714

sam2github：https://github.com/facebookresearch/segment-anything-2



sam论文地址：https://arxiv.org/pdf/2304.02643

segment- anything https://github.com/facebookresearch/segment-anything



背景

seg⁃ment anything model其实是2023年4月提出的分割一切模型（，SAM）通过给定图像和视觉提示，

如`目标框、点和掩码`等，来指定在图像中分割的内容。经过在1 100万幅图像上训练超过10亿的掩

码，SAM 拥有了强大的零样本学习能力，使它可以有效地应用到下游视觉任务。

SAM的出现极大地促进了计算机视觉领域基础大模型的发展。



----

Sam2模型不仅在分割速度和效果上有显著提升，更从图像领域扩展到视频领域，视频与图像的主要差异在于你选定的目标会在某些 帧消失或者部分被遮挡，这对模型就会是个巨大的考验，但是sam2依然可以准确追踪这个目标

首先他可以在视频帧中选择一个或多个的主体，Sam2模型处理视频他用的是一个transform的架构，并且数据集特别大，emmm你可以理解他变聪明了，就算是没见过的物体，他也能分割，他可以理解视频主体的一些行为，泛化性比较强，可以实现实时的交互，视频的话他其实是由多张图片组成的，正常速度的视频一秒大概是由24张图组成的，如果是直接对打标记的话是不可能实现的，把视频切割成图片，然后标记他的坐标，再去抠图，打标记的方式有两种，一种是提示词，一种是通过坐标来标记

SAM 2使用了一个简单的Transformer架构，并加入了流式存储器，这使其能够实时处理视频。支持视频中对象的分割和跟踪，并应用特效，



**视频分割**: 与前代模型相比，SAM 2显著减少了用户交互次数，同时提高了准确性。

**图像分割**: 在图像分割任务中，SAM 2不仅提高了准确性，还将处理速度提升了6倍。



sam2总结：

我们提出了一种新的基础模型，称为SAM 2，用于**图像和视频中的可提示分割任务**。

SAM 2采用了流式存储器的简单Transformer架构，可用于实时视频处理。

通过用户交互构建的数据引擎，我们收集了迄今为止最大的高清视频分割数据集。

实验结果表明，SAM 2在视频分割任务中减少了三倍的交互次数，同时提高了准确性，在图像分割任务中则比**先前模型更准确且速度提升了六倍**。

我们发布了模型的版本、数据集以及交互式演示。



---

comfy UI