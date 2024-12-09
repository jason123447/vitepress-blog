<script setup lang='ts'>
import { withBase } from 'vitepress'
// import Pagination from './Pagination.vue'
import AOS from "aos";
import "aos/dist/aos";
import themeConfig from '../config'
import blogStore from '../store'
import { data as posts } from '../posts.data'
import { onMounted } from 'vue';

const postsPerPage = themeConfig.postsPerPage

onMounted(() => {
  AOS.init();
  themeConfig.appearance = 'dark'
})

function showPosts() {
  return posts.slice(
    (blogStore.currentPage - 1) * postsPerPage,
    blogStore.currentPage * postsPerPage
  )
}
</script>

<style lang="scss" scoped>
$white : #fff;

button {
  background: $white !important;
}

.background-gradient-container {
  background-image: url("/fog.png");
  min-height: calc(100vh - 64px);
  height: 100%;
  position: fixed;
  background-size: cover;

  @media (min-width: 960) {
    background-size: auto;
  }

  &:is(.dark *) {
    opacity: 0.2;
    filter: invert(1);
  }
}
</style>


<template>
  <section class="relative w-full" data-aos="zoom-in up">
    <div class="absolute top-0 inset-x-0 h-64 flex flex-wrap items-start w-full background-gradient-container">
      <!-- <div class="h-24 w-1/3 mt-12 bg-gradient-to-br from-[#570cac] blur-2xl opacity-40"></div>
      <div class="h-24 w-1/4"></div>
      <div class="h-36 w-1/5 mt-12 bg-gradient-to-r from-[#670ccf] opacity-20 blur-2xl"></div> -->
    </div>
    <div class="w-full px-5 sm:px md:px-12 lg:-x-8 max-w-screen-lg lg:max-w-screen-lg mx-auto relative">
      <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
      </div>
      <div class="lg:py-6">
        <div class="text-center lg:text-left">
          <h1 class="pt-4 font-bold text-4xl md:text-5xl lg:text-6xl">
            Hi, I'm <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#d63a59] to-[#00bef2]">Lenny</span></h1>
        </div>
      </div>
      <p class="pt-8 text-center lg:text-left mx-auto max-w-xl group-hover:*: group-hover:scale-105">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus atque cupiditate iste molestias a.
        Laborum distinctio eveniet accusamus tempora error voluptatibus maiores iure aliquid porro harum consequatur
        animi nostrum amet perspiciatis architecto illo quidem incidunt, dignissimos ipsa nobis quasi voluptatum
        asperiores nihil. Possimus numquam nisi, sapiente tempora eos aut harum?
      </p>
      <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-mz sm:mx-auto lg:mx-0">
        <a class="link">
          <!-- <span
              class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out order-2 border-transparent bg-orange-200">
            </span> -->
          <span class="">Hire Me</span>
        </a>
        
      </div>
    </div>
  </section>
  <!-- <div class='theme-container'>
    <ul class='divide-y divide-gray-600'>
      <li class='mb-6 p-6' v-for='post of showPosts()'>
        <article class='space-y-2 xl:space-y-0 xl:items-baseline'>
          <PostInfo :date='post.date.string' :category='post.category' />
          <h2 class='pb-2 text-2xl leading-8 font-bold tracking-tight' 
            aria-label='post title'>
            <a class='text-gray-900 dark:text-white' :href='withBase(post.url)'>
              {{post.title}} 
            </a>
          </h2>
          <div v-if='post.excerpt' class='theme-excerpt'
            v-html='post.excerpt'></div>
          <div class='grid text-base leading-6 font-medium'>
            <a class='theme-readmore' aria-label='read more' :href='withBase(post.url)'>
              Read more
            </a>
          </div>
        </article>
      </li>
    </ul>
    <Pagination />
  </div> -->
</template>