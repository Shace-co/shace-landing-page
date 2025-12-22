<template>
  <NuxtPage />
</template>

<style>
/* Smooth scrolling for the entire app */
html {
  scroll-behavior: smooth;
}

/* Improve focus visibility for accessibility */
*:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}

/* Better selection color */
::selection {
  background-color: hsl(var(--primary) / 0.2);
  color: hsl(var(--foreground));
}
</style>
