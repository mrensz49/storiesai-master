if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),o={module:{uri:n},exports:a,require:u};e[n]=Promise.all(r.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/appbar.2296c89b.js",revision:null},{url:"assets/appbar.244f91ee.js",revision:null},{url:"assets/appbar.2738ccca.css",revision:null},{url:"assets/appbar.2d05a023.js",revision:null},{url:"assets/appbar.489a2a4d.js",revision:null},{url:"assets/appbar.7725ada8.js",revision:null},{url:"assets/appbar.81d9baff.js",revision:null},{url:"assets/appbar.84691cc9.js",revision:null},{url:"assets/appbar.964bfa2a.js",revision:null},{url:"assets/appbar.a08e4f05.js",revision:null},{url:"assets/appbar.a61c4d31.css",revision:null},{url:"assets/appbar.ac80cbcf.js",revision:null},{url:"assets/appbar.b0387a94.js",revision:null},{url:"assets/appbar.b28a30eb.js",revision:null},{url:"assets/appbar.c976df34.js",revision:null},{url:"assets/appbar.e446c368.6dc392e0.js",revision:null},{url:"assets/auth.22448a35.js",revision:null},{url:"assets/auth.3400ad52.js",revision:null},{url:"assets/auth.3b7daddd.js",revision:null},{url:"assets/auth.4399e58f.9913f711.js",revision:null},{url:"assets/auth.497c3d17.js",revision:null},{url:"assets/auth.4e1c3020.js",revision:null},{url:"assets/auth.59a33411.js",revision:null},{url:"assets/auth.8ee5f76c.css",revision:null},{url:"assets/auth.9e0f12e5.js",revision:null},{url:"assets/auth.a0bb208a.js",revision:null},{url:"assets/auth.a1076050.js",revision:null},{url:"assets/auth.c42d86a3.js",revision:null},{url:"assets/auth.ce5192a3.js",revision:null},{url:"assets/auth.e40b44a4.js",revision:null},{url:"assets/auth.e8a5c436.js",revision:null},{url:"assets/auth.f0ee2b6d.css",revision:null},{url:"assets/Authors.015e222c.js",revision:null},{url:"assets/Authors.16e7628c.js",revision:null},{url:"assets/Authors.2b4f9d99.js",revision:null},{url:"assets/Authors.2e67367c.js",revision:null},{url:"assets/Authors.30042c14.css",revision:null},{url:"assets/Authors.30fbfc3d.js",revision:null},{url:"assets/Authors.40fa7404.js",revision:null},{url:"assets/Authors.699ca934.js",revision:null},{url:"assets/Authors.a19fdc3d.css",revision:null},{url:"assets/Authors.a279e561.js",revision:null},{url:"assets/Authors.b862ee57.js",revision:null},{url:"assets/Authors.d2fe00f9.css",revision:null},{url:"assets/Authors.d6457aeb.js",revision:null},{url:"assets/Authors.d6903c0e.js",revision:null},{url:"assets/Authors.d8f12ec3.js",revision:null},{url:"assets/Authors.e7145966.js",revision:null},{url:"assets/Authors.ebb5ce12.3069ceb1.js",revision:null},{url:"assets/Callback.0afc32e5.js",revision:null},{url:"assets/Callback.0b94de4f.js",revision:null},{url:"assets/Callback.4ade9187.js",revision:null},{url:"assets/Callback.6269527c.ec1da53c.js",revision:null},{url:"assets/Callback.d821cb4e.js",revision:null},{url:"assets/Categories.01b80ef5.js",revision:null},{url:"assets/Categories.0cc653ca.js",revision:null},{url:"assets/Categories.5ca4fb88.js",revision:null},{url:"assets/Categories.5e7bacac.js",revision:null},{url:"assets/Categories.67b54d70.js",revision:null},{url:"assets/Categories.891e38d6.js",revision:null},{url:"assets/Categories.8ae37056.js",revision:null},{url:"assets/Categories.902df77e.js",revision:null},{url:"assets/Categories.94b996cc.343d45a0.js",revision:null},{url:"assets/Categories.be9b9fa4.js",revision:null},{url:"assets/Categories.c88bd402.js",revision:null},{url:"assets/Categories.dc3718e3.js",revision:null},{url:"assets/Categories.e4ce3672.js",revision:null},{url:"assets/Categories.f4c48cc8.js",revision:null},{url:"assets/Category.1b20fa06.js",revision:null},{url:"assets/Category.2ca5a099.js",revision:null},{url:"assets/Category.44cc3f53.js",revision:null},{url:"assets/Category.472b5655.js",revision:null},{url:"assets/Category.51fc0f16.js",revision:null},{url:"assets/Category.54ec7efb.js",revision:null},{url:"assets/Category.8db20e38.668ef989.js",revision:null},{url:"assets/Category.9a344403.js",revision:null},{url:"assets/Category.a2f929ad.js",revision:null},{url:"assets/Category.a90da255.js",revision:null},{url:"assets/Category.b94eccb8.js",revision:null},{url:"assets/Category.d0f8a68f.js",revision:null},{url:"assets/Category.d9a9bea0.js",revision:null},{url:"assets/Category.e44df07b.js",revision:null},{url:"assets/Content.12e6e357.js",revision:null},{url:"assets/Content.63272105.js",revision:null},{url:"assets/Content.6be42d6a.js",revision:null},{url:"assets/Content.72764f0b.js",revision:null},{url:"assets/Content.8938b244.js",revision:null},{url:"assets/Content.952a3a48.1b2ee123.js",revision:null},{url:"assets/Content.9984203e.js",revision:null},{url:"assets/Content.9ceb51c6.js",revision:null},{url:"assets/Content.c3a5ed85.js",revision:null},{url:"assets/Content.c9db2daf.js",revision:null},{url:"assets/Content.cfc50a8e.js",revision:null},{url:"assets/Content.d07f4165.js",revision:null},{url:"assets/Content.d5839770.js",revision:null},{url:"assets/Content.dc41ff6f.js",revision:null},{url:"assets/Dashboard.0e8d136f.js",revision:null},{url:"assets/Dashboard.1115c8e8.js",revision:null},{url:"assets/Dashboard.172a45bb.js",revision:null},{url:"assets/Dashboard.1855f318.js",revision:null},{url:"assets/Dashboard.362ff265.js",revision:null},{url:"assets/Dashboard.3c0a74bb.js",revision:null},{url:"assets/Dashboard.5a59698b.5fb184ea.js",revision:null},{url:"assets/Dashboard.5c7808ba.js",revision:null},{url:"assets/Dashboard.719bf438.js",revision:null},{url:"assets/Dashboard.7d1108c6.js",revision:null},{url:"assets/Dashboard.9931fba3.js",revision:null},{url:"assets/Dashboard.cb1b7537.js",revision:null},{url:"assets/Dashboard.e0b9c47c.js",revision:null},{url:"assets/Dashboard.e64080ba.js",revision:null},{url:"assets/Detail.07b0395d.js",revision:null},{url:"assets/Detail.08807549.js",revision:null},{url:"assets/Detail.14482030.js",revision:null},{url:"assets/Detail.1777e084.js",revision:null},{url:"assets/Detail.20a07d84.js",revision:null},{url:"assets/Detail.2aff7781.js",revision:null},{url:"assets/Detail.31da641d.js",revision:null},{url:"assets/Detail.5967974b.js",revision:null},{url:"assets/Detail.81f7c462.js",revision:null},{url:"assets/Detail.96b92932.js",revision:null},{url:"assets/Detail.b2cec201.2ca558fd.js",revision:null},{url:"assets/Detail.badceea8.js",revision:null},{url:"assets/Detail.ceff6af4.js",revision:null},{url:"assets/Detail.f6954819.js",revision:null},{url:"assets/ForgotPassword.231d07b7.js",revision:null},{url:"assets/ForgotPassword.2450bb50.js",revision:null},{url:"assets/ForgotPassword.3413704b.js",revision:null},{url:"assets/ForgotPassword.5dd8e2fd.js",revision:null},{url:"assets/ForgotPassword.668a900f.js",revision:null},{url:"assets/ForgotPassword.693ed865.js",revision:null},{url:"assets/ForgotPassword.8996e37b.62efe7e5.js",revision:null},{url:"assets/ForgotPassword.9a0cc98e.css",revision:null},{url:"assets/ForgotPassword.a0006d96.js",revision:null},{url:"assets/ForgotPassword.a21f9efc.js",revision:null},{url:"assets/ForgotPassword.a4c01b9d.js",revision:null},{url:"assets/ForgotPassword.a818f43d.css",revision:null},{url:"assets/ForgotPassword.e91f015c.js",revision:null},{url:"assets/ForgotPassword.e9e1f68d.js",revision:null},{url:"assets/ForgotPassword.ebf82bcd.js",revision:null},{url:"assets/ForgotPassword.f25f6705.js",revision:null},{url:"assets/ForgotPassword.f4f1ad85.css",revision:null},{url:"assets/index.05c05d0e.js",revision:null},{url:"assets/index.0ac89f65.js",revision:null},{url:"assets/index.0b75bac6.js",revision:null},{url:"assets/index.0dc60f27.js",revision:null},{url:"assets/index.0ff69430.js",revision:null},{url:"assets/index.2494a4a5.js",revision:null},{url:"assets/index.32958e19.css",revision:null},{url:"assets/index.3fe5730a.js",revision:null},{url:"assets/index.49409ad1.js",revision:null},{url:"assets/index.52a1980a.js",revision:null},{url:"assets/index.5d35cee6.js",revision:null},{url:"assets/index.5f62ced6.js",revision:null},{url:"assets/index.66d6c058.css",revision:null},{url:"assets/index.67ca921f.js",revision:null},{url:"assets/index.6c8fa72d.js",revision:null},{url:"assets/index.76271238.js",revision:null},{url:"assets/index.7b7a847a.js",revision:null},{url:"assets/index.8405f87c.js",revision:null},{url:"assets/index.885cce9d.js",revision:null},{url:"assets/index.89277d96.js",revision:null},{url:"assets/index.8aca28b2.7f793075.js",revision:null},{url:"assets/index.971bed5f.js",revision:null},{url:"assets/index.9fd80316.js",revision:null},{url:"assets/index.a5b80a68.js",revision:null},{url:"assets/index.b735ab4f.js",revision:null},{url:"assets/index.b780dda7.css",revision:null},{url:"assets/index.b95075c4.js",revision:null},{url:"assets/index.bf93233b.js",revision:null},{url:"assets/index.c490d049.css",revision:null},{url:"assets/index.ca2b6c97.js",revision:null},{url:"assets/index.cff887f2.js",revision:null},{url:"assets/index.d8b5109e.js",revision:null},{url:"assets/Login.1851dcdb.js",revision:null},{url:"assets/Login.1eff05d7.js",revision:null},{url:"assets/Login.2f5b1a35.css",revision:null},{url:"assets/Login.3a33962f.css",revision:null},{url:"assets/Login.3e5e0bc2.js",revision:null},{url:"assets/Login.591f8190.js",revision:null},{url:"assets/Login.643a6be0.js",revision:null},{url:"assets/Login.6ac364e5.js",revision:null},{url:"assets/Login.798fe79f.js",revision:null},{url:"assets/Login.7a63886e.js",revision:null},{url:"assets/Login.8d3844b3.js",revision:null},{url:"assets/Login.a5b18bb3.css",revision:null},{url:"assets/Login.b39a35e0.js",revision:null},{url:"assets/Login.b687e918.js",revision:null},{url:"assets/Login.bbb8dae2.js",revision:null},{url:"assets/Login.c7e45617.ad159a96.js",revision:null},{url:"assets/Login.ca110fae.css",revision:null},{url:"assets/Login.fbd79716.js",revision:null},{url:"assets/MoralLesson.0865fff2.js",revision:null},{url:"assets/MoralLesson.08847f8e.js",revision:null},{url:"assets/MoralLesson.247085ea.js",revision:null},{url:"assets/MoralLesson.3717a0a5.js",revision:null},{url:"assets/MoralLesson.3c2c4380.js",revision:null},{url:"assets/MoralLesson.3ee834fe.js",revision:null},{url:"assets/MoralLesson.41202375.js",revision:null},{url:"assets/MoralLesson.42bd0b56.js",revision:null},{url:"assets/MoralLesson.44743100.js",revision:null},{url:"assets/MoralLesson.795cba91.f418b8d5.js",revision:null},{url:"assets/MoralLesson.b65df3e9.js",revision:null},{url:"assets/MoralLesson.bc388ec5.js",revision:null},{url:"assets/MoralLesson.cab7eb68.js",revision:null},{url:"assets/MoralLesson.f8606b24.js",revision:null},{url:"assets/Search.09b56f5b.js",revision:null},{url:"assets/Search.0c8dc015.js",revision:null},{url:"assets/Search.161355c2.js",revision:null},{url:"assets/Search.1ed18c41.js",revision:null},{url:"assets/Search.1fe2f617.bd5056c4.js",revision:null},{url:"assets/Search.36064aaa.js",revision:null},{url:"assets/Search.4787041d.js",revision:null},{url:"assets/Search.5a441f57.css",revision:null},{url:"assets/Search.702e6582.js",revision:null},{url:"assets/Search.81ece408.js",revision:null},{url:"assets/Search.83471707.js",revision:null},{url:"assets/Search.9f2c1849.js",revision:null},{url:"assets/Search.afb47e17.css",revision:null},{url:"assets/Search.c3b3acc9.js",revision:null},{url:"assets/Search.d2555075.js",revision:null},{url:"assets/Search.ee18d490.js",revision:null},{url:"assets/sidebar.0bb37780.js",revision:null},{url:"assets/sidebar.0cc11ed4.js",revision:null},{url:"assets/sidebar.15ddd50c.js",revision:null},{url:"assets/sidebar.1bd15ce3.js",revision:null},{url:"assets/sidebar.1e3503bf.js",revision:null},{url:"assets/sidebar.250084e8.js",revision:null},{url:"assets/sidebar.272351db.js",revision:null},{url:"assets/sidebar.3df68d3e.js",revision:null},{url:"assets/sidebar.475dd544.js",revision:null},{url:"assets/sidebar.4e427965.js",revision:null},{url:"assets/sidebar.9e5dee27.1f86e372.js",revision:null},{url:"assets/sidebar.a9c934fa.js",revision:null},{url:"assets/sidebar.e5286231.js",revision:null},{url:"assets/sidebar.f9a740e6.js",revision:null},{url:"assets/VAlert.0031198a.js",revision:null},{url:"assets/VAlert.16b69548.js",revision:null},{url:"assets/VAlert.1949cd20.js",revision:null},{url:"assets/VAlert.23ec98e8.js",revision:null},{url:"assets/VAlert.3b694d39.css",revision:null},{url:"assets/VAlert.410924c3.js",revision:null},{url:"assets/VAlert.47bced66.js",revision:null},{url:"assets/VAlert.8ae1dc4e.js",revision:null},{url:"assets/VAlert.904eb20e.css",revision:null},{url:"assets/VAlert.b037a4b9.js",revision:null},{url:"assets/VAlert.b25829c2.98d7e9e5.js",revision:null},{url:"assets/VAlert.dd1e5b18.js",revision:null},{url:"assets/VAlert.f11063d2.js",revision:null},{url:"assets/VAlert.f39eb351.js",revision:null},{url:"assets/VAlert.f8548285.js",revision:null},{url:"assets/VChip.0943439b.js",revision:null},{url:"assets/VChip.1b6d31fd.js",revision:null},{url:"assets/VChip.3065d03b.js",revision:null},{url:"assets/VChip.308e2727.js",revision:null},{url:"assets/VChip.642071bb.js",revision:null},{url:"assets/VChip.72fc7ca1.js",revision:null},{url:"assets/VChip.8131b91f.js",revision:null},{url:"assets/VChip.81bf2ab2.js",revision:null},{url:"assets/VChip.9b43f9a3.css",revision:null},{url:"assets/VChip.a4a68713.js",revision:null},{url:"assets/VChip.aabe7288.95c4580a.js",revision:null},{url:"assets/VChip.bb73b3c5.js",revision:null},{url:"assets/VChip.cc515e90.css",revision:null},{url:"assets/VChip.cce04ba6.js",revision:null},{url:"assets/VChip.d7a4f296.js",revision:null},{url:"assets/VChip.dedcd536.js",revision:null},{url:"assets/VDivider.1f8580c3.js",revision:null},{url:"assets/VDivider.1ff86b47.js",revision:null},{url:"assets/VDivider.3d6d3afb.css",revision:null},{url:"assets/VDivider.5321f13f.20f4bb80.js",revision:null},{url:"assets/VDivider.6851d162.js",revision:null},{url:"assets/VDivider.8b0eb477.js",revision:null},{url:"assets/VDivider.8bd5bceb.css",revision:null},{url:"assets/VDivider.92aa6ac3.js",revision:null},{url:"assets/VDivider.d33c0631.js",revision:null},{url:"assets/VDivider.d70feca7.js",revision:null},{url:"assets/VDivider.e8404d0b.js",revision:null},{url:"assets/VDivider.f0e573b6.js",revision:null},{url:"assets/VDivider.f2f9ca1d.js",revision:null},{url:"assets/VDivider.f4a669b1.js",revision:null},{url:"assets/VDivider.f9d87eeb.js",revision:null},{url:"assets/VDivider.fc14be3f.js",revision:null},{url:"assets/VTextField.0bcee6f1.js",revision:null},{url:"assets/VTextField.10beb063.css",revision:null},{url:"assets/VTextField.68712422.js",revision:null},{url:"assets/VTextField.6d1957d2.js",revision:null},{url:"assets/VTextField.6e1b09e5.js",revision:null},{url:"assets/VTextField.7091d725.js",revision:null},{url:"assets/VTextField.7abceb35.a78a8c84.js",revision:null},{url:"assets/VTextField.7dbb0b92.js",revision:null},{url:"assets/VTextField.a02c1a56.js",revision:null},{url:"assets/VTextField.a928bc2a.css",revision:null},{url:"assets/VTextField.ae691562.js",revision:null},{url:"assets/VTextField.bfbd72b6.js",revision:null},{url:"assets/VTextField.c12259f8.js",revision:null},{url:"assets/VTextField.ca273972.js",revision:null},{url:"assets/VTextField.d4d38531.js",revision:null},{url:"assets/VTextField.db4b3649.js",revision:null},{url:"index.html",revision:"9c810b635703e88651b1391dd3571cf5"},{url:"registerSW.js",revision:"8adb1df22bc9e6d0b754ab27751e0e66"},{url:"img/icons/screen-shot-320x320.png",revision:"aa8ea5eba7392f5a2720174197870626"},{url:"img/icons/android-chrome-192x192.png",revision:"a4e5ec6a4cb97fbeea44b416fe497ee1"},{url:"img/icons/screen-shot-512x512.png",revision:"543d74cbb494f67cd19b0a5f58ff47bb"},{url:"manifest.webmanifest",revision:"6817652581423d651b92e7b387847dac"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
