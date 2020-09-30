<template>
    <div class="container mx-auto bg-gray-800">
    <header class="bg-gray-500 shadow text-center">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
        Sign Ups For Season 7
      </h1>
      <h4 class="text-2xl font-bold leading tight text-gray-900">
          Please click on the league that you wish to take part in.
          <br>
          <h2 class="text-xl">NOTE: You may not do both Bo3, and Bo1. You may do Bo3 and Rotation, or Bo1 and Rotation. But not Bo3 and Bo1.</h2>
      </h4>
      <br><br>
      <h4 class="text-2xl font-bold leading-tight text-gray-900">
          Rotation Draft League - Low Tier Draft
      </h4>
    </div>
  </header>
  <div class="flex flex-center place-content-center">
      <a class="no-underline text-center inline-block text-sm  py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0" href="/signup/bo3-draft">Bo3 Draft Leagues</a>
      <a class="no-underline text-center inline-block text-sm  py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0" href="/signup/bo1-draft">Bo1 Draft Leagues</a>
      <a class="no-underline text-center inline-block text-sm  py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0" href="/signup/rotation-draft">Rotations Draft Leagues</a>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>
