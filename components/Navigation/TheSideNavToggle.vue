<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">
    <div>
      МЕНЮ
    </div>
  </div>
</template>

<style scoped>
.drawer-toggle {
  height: 50%;
  cursor: pointer;
  color: white;
  font-weight: bold;
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
}
</style>
