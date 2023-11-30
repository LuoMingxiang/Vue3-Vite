<script setup lang="ts">
//引入threejs
import * as THREE from "three";
//创建一个三维场景
const scene = new THREE.Scene();
//添加光源 这里添加了两个光源
//AmbientLight：环境光源，均匀照亮所有物体，防止有些光源照射不到呈现不出来
//PointLight：点光源，类似灯泡发出的光，可以投射阴影，使模型更加立体
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5),
  pointLight = new THREE.PointLight(0xffffff, 0.4);
//设置点光源所在位置
pointLight.position.set(200, 300, 400);
//每创建一个object都需要将其添加到三维场景中
scene.add(ambientLight);
scene.add(pointLight);
//创建一个透视相机 这里的width、height是整个画布的宽高度
const width = window.innerWidth,
  height = window.innerHeight,
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
//设置相机位置
camera.position.set(200, 200, 200);
//设置相机方向
camera.lookAt(0, 0, 0);

//创建辅助坐标轴
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
//创建一个物体（形状）
const geometry = new THREE.BoxGeometry(100, 100, 100);
//创建材质（外观）
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff, //设置材质颜色
  transparent: true, //开启透明度
  opacity: 0.5, //设置透明度
});
//创建一个网格模型对象,将上面设置好的物体及其材质注入到模型对象中
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//创建一个WebGL渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);
//vue3的生命周期钩子函数，渲染后执行(这是为了拿到dom节点)
onMounted(() => {
  //将渲染器绘制出的canvas添加到页面中
  document.getElementById("three")?.appendChild(renderer.domElement);
});
</script>

<template>
  <h1 class="bg-red">
    Three.js demo1
  </h1>
  <div id="three" />
</template>

<style lang="scss" scoped></style>
