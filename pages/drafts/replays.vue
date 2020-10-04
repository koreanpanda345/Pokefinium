<template>
  <div class="container">
		<h1>Replays were made, and tracked by Porygon Bot!</h1>
		<p v-if="$fetchState.pending">Fetching Data...</p>
		<p v-else-if="$fetchState.error">An Error Occured</p>
		<h2 v-else>{{replayData}}</h2>
  </div>
</template>
<script>
export default {
  data: () => ({
    replayData: {}
  }),
  async fetch () {
    this.replayData = await fetch('https://kills.porygonbot.xyz/sports-gen8nationaldexdlc2legacy-167800').then(res => res.text())
  }
}
</script>
