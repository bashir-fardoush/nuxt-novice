<template>
  <main class="user-layout">
    <aside class="sidebar">
      <p>Dashboard</p>
      <p>Settings</p>
    </aside>
    <section>
      <slot></slot>
    </section>
  </main>
</template>
<style>
.sidebar {
  display: flex;
  flex-direction: column;
}
.user-layout {
  display: flex;
}
 section{
  padding-left: 10px;
  background-color: rgb(173, 233, 233);
}
</style>