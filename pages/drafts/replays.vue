<template>
  <div class="container text-white text-center">
		<h1 class="text-white text-3xl">Please insert the replay id that you wish to inspect</h1>
		<h1 class="text-2xl">Some of this data is from Porygon Bot's Kill Site. The rest is from replay.pokemonshowdown.com</h1>
	<div>
  <label for="url" class="block text-sm leading-5 font-medium text-gray-300">Replay Url</label>
  <div class="mt-1 relative rounded-md shadow-sm">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    </div>
    <input id="url" v-model="url" class="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5 text-black" placeholder="">
  </div>
	<br>
	<button @click="fetch">Get Replay Data</button>
</div>
<br>
<!-- <h1>{{porygonData.data}}</h1> -->
<iframe v-if="replayData != ''" :src="`https://replay.pokemonshowdown.com/${url}`" width="100%" height="500px"/>
<h1 v-if="porygonData !== ''" class="text-2xl text-white"><span :class="`${getTotalDeaths('p1') < 6 ? 'text-gray-500' : 'text-white'}`">{{players.p1.player}}</span> VS <span :class="`${getTotalDeaths('p2') < 6 ? 'text-gray-500' : 'text-white'}`">{{players.p2.player}}</span></h1>
<h1 v-if="porygonData !== ''" class="text-2xl text-white"><span :class="`${getTotalDeaths('p1') < 6 ? 'text-gray-500' : 'text-white'}`">{{6 - getTotalDeaths('p1')}}</span> - <span :class="`${getTotalDeaths('p2') < 6 ? 'text-gray-500' : 'text-white'}`">{{6 - getTotalDeaths('p2')}}</span></h1>
<div class="grid xl:grid-cols-2 sm:grid-cols-1" v-if="porygonData != '' && replayData != ''">
<div class="flext flex-col">
	<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
			<div class="shadow overlow-hidden border-b border-gray-200 sm:round-lg">
				<table class="min-w-full divide-y divide-gray-500">
					<thead>
						<tr>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Pokemon
							</th>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Direct Kills
							</th>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Passive Kills
							</th>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Total Kills
							</th>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Deaths
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-500 bg-gray-400">
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p1.pokemon.length === 0 ? 'pikachu' : players.p1.pokemon[0].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p1.pokemon.length === 0 ? 'Pikachu' : players.p1.pokemon[0].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[0].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[0].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[0].name).total}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getDeaths(players.p1.pokemon[0].name)}}
              </td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p1.pokemon.length === 0 ? 'pikachu' : players.p1.pokemon[1].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p1.pokemon.length === 0 ? 'Pikachu' : players.p1.pokemon[1].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[1].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[1].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[1].name).total}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getDeaths(players.p1.pokemon[1].name)}}
              </td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p1.pokemon.length === 0 ? 'pikachu' : players.p1.pokemon[2].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p1.pokemon.length === 0 ? 'Pikachu' : players.p1.pokemon[2].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[2].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[2].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[2].name).total}}
              </td>
							<td  class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getDeaths(players.p1.pokemon[2].name)}}
              </td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p1.pokemon.length === 0 ? 'pikachu' : players.p1.pokemon[3].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p1.pokemon.length === 0 ? 'Pikachu' : players.p1.pokemon[3].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[3].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[3].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[3].name).total}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getDeaths(players.p1.pokemon[3].name)}}
              </td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p1.pokemon.length === 0 ? 'pikachu' : players.p1.pokemon[4].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p1.pokemon.length === 0 ? 'Pikachu' : players.p1.pokemon[4].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[4].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[4].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[4].name).total}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getDeaths(players.p1.pokemon[4].name)}}
              </td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p1.pokemon.length === 0 ? 'pikachu' : players.p1.pokemon[5].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p1.pokemon.length === 0 ? 'Pikachu' : players.p1.pokemon[5].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[5].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[5].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getKills(players.p1.pokemon[5].name).total}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p1.pokemon.length === 0 ? '0' : getDeaths(players.p1.pokemon[5].name)}}
              </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
<!-- <div class="flext flex-col">
	<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
			<div class="shadow overlow-hidden border-b border-gray-200 sm:round-lg">
				<table class="min-w-full divide-y divide-gray-500">
					<thead>
						<tr>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Match Data
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-500 text-black">
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap bg-gray-300">
								{{players.p1.player}} VS {{players.p2.player}}
							</td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap bg-gray-300">
								Turns: {{match.turns == (null || undefined) ? '' : match.turns}}
							</td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap bg-gray-400">
								{{6 - getTotalDeaths('p1')}} - {{6 - getTotalDeaths('p2')}}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div> -->
<div class="flext flex-col">
	<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
			<div class="shadow overlow-hidden border-b border-gray-200 sm:round-lg">
				<table class="min-w-full divide-y divide-gray-500">
					<thead>
						<tr>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Pokemon
							</th>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Direct Kills
							</th>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Passive Kills
							</th>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Total Kills
							</th>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Deaths
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-500 bg-gray-400">
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p2.pokemon.length === 0 ? 'pikachu' : players.p2.pokemon[0].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p2.pokemon.length === 0 ? 'Pikachu' : players.p2.pokemon[0].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[0].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[0].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[0].name).total}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getDeaths(players.p2.pokemon[0].name)}}
              </td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p2.pokemon.length === 0 ? 'pikachu' : players.p2.pokemon[1].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p2.pokemon.length === 0 ? 'Pikachu' : players.p2.pokemon[1].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[1].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[1].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[1].name).total}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getDeaths(players.p2.pokemon[1].name)}}
              </td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p2.pokemon.length === 0 ? 'pikachu' : players.p2.pokemon[2].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p2.pokemon.length === 0 ? 'Pikachu' : players.p2.pokemon[2].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[2].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[2].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[2].name).total}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getDeaths(players.p2.pokemon[2].name)}}
              </td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p2.pokemon.length === 0 ? 'pikachu' : players.p2.pokemon[3].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p2.pokemon.length === 0 ? 'Pikachu' : players.p2.pokemon[3].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[3].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[3].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[3].name).total}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getDeaths(players.p2.pokemon[3].name)}}
              </td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p2.pokemon.length === 0 ? 'pikachu' : players.p2.pokemon[4].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p2.pokemon.length === 0 ? 'Pikachu' : players.p2.pokemon[4].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[4].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[4].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[4].name).total}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getDeaths(players.p2.pokemon[4].name)}}
              </td>
						</tr>
						<tr class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="flex items-center">
									<div class="flex-shrink-0 h-10 w-10">
										<img class="h-10 w-10 rounded-full" :src="`https://play.pokemonshowdown.com/sprites/gen5/${players.p2.pokemon.length === 0 ? 'pikachu' : players.p2.pokemon[5].name.toLowerCase()}.png`" />
									</div>
									<div class="ml-4">
										<div class="text-sm leading-5 font-medium text-gray-900">
											{{players.p2.pokemon.length === 0 ? 'Pikachu' : players.p2.pokemon[5].name}}
										</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[5].name).direct}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[5].name).passive}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getKills(players.p2.pokemon[5].name).total}}
              </td>
							<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{players.p2.pokemon.length === 0 ? '0' : getDeaths(players.p2.pokemon[5].name)}}
              </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
<div></div>
</div>
<div class="flext flex-col" v-if="replayData !== '' && porygonData !== ''">
	<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
			<div class="shadow overlow-hidden border-b border-gray-200 sm:round-lg">
				<table class="min-w-full divide-y divide-gray-500">
					<thead>
						<tr>
							<th></th>
							<th class="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								Significate Turns
							</th>
						</tr>
					</thead>
					<tbody v-if="porygonData !== ''" class="divide-y divide-gray-500 text-black">
						<tr v-for="turn in porygonData.data.split('<br>')" :key="turn" class="divide-x divide-black">
							<td class="px-6 py-4 whitespace-no-wrap bg-gray-300">
								Turn: {{turn.split('(Turn')[1].split(').')[0]}}
							</td>
							<td class="px-6 py-4 whitespace-no-wrap bg-gray-400">
								{{turn.split('(Turn')[0]}}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
</div>
	</div>
</div>
</template>
<script>
export default {
  data: () => ({
		replayData: '',
		porygonData: '',
		url: "",
		match: {},
		players: {
			p1: {
				player: "",
				pokemonraw: [],
				pokemon: [],
				},
			p2: {
				player: "",
				pokemonraw: [],
				pokemon: [],
				}
		},
	}),
	methods: {
		getTotalDeaths(player) {
			let deaths = 0;
			for(let poke of this.players[player].pokemon) {
				deaths += this.getDeaths(poke.name);
			}
			return deaths;
		},
		getTotalKills(player) {
			let kills = 0;
			for(let poke of this.players[player].pokemon) {
				kills += this.getKills(poke.name);
			}
			return kills;
		},
		makePorygonDataToString() {
			if(this.porygonData === '') return '';
			return this.porygonData.data.split("<br>");
		},
		getPassiveKills(name) {
		},
		getKills(name) {
			const kills = this.porygonData.data.split(`by ${name.split('-')[0]}`).length - 1;
				let _direct = 0;
				for(let kill of this.porygonData.data.split(`by ${name.split('-')[0]}`)) {
					if(kill.includes('(direct)')) _direct++;
				}

				let _passive = 0;
				for(let kill of this.porygonData.data.split(`by ${name.split('-')[0]}`)) {
					if(kill.includes('(passive)')) _passive++;
				}
			return {
				total: kills,
				direct: _direct != 0 ? _direct -1 : _direct,
				passive: _passive != 0 ? _passive - 1 : _passive
			}
		},
		getDeaths(name) {
			return this.porygonData.data.split(`${name.split('-')[0]} was killed`).length - 1;
		},
		getTurns () {
			const turns = this.replayData.data.split("|turn|");
			this.match.turns = turns.length - 1;
		},
		getPlayers() {
			this.players.p1.player = this.replayData.data.split("|player|p1|")[1].split("|")[0]
			this.players.p2.player = this.replayData.data.split("|player|p2|")[1].split("|")[0];
			this.getPokemon();
		},
		getPokemon() {
			const pokemon = this.replayData.data.split("|clearpoke")[1];
			this.players.p1.pokemonraw = pokemon.split("|poke|p2|")[0].split("|poke|p1|");
			this.players.p1.pokemonraw.shift();
			this.players.p2.pokemonraw = pokemon.split("|rule|Dynamax Clause:")[0].split("|poke|p2|");
			this.players.p2.pokemonraw.shift();
			for(let i = 0; i < this.players.p1.pokemonraw.length; i++)
			{
				this.players.p1.pokemonraw[i] = this.players.p1.pokemonraw[i].split("|")[0];
				this.players.p1.pokemonraw[i] = this.players.p1.pokemonraw[i].replace("Urshifu-*", "Urshifu");
			}

			for(let i = 0; i < this.players.p2.pokemonraw.length; i++)
			{
				this.players.p2.pokemonraw[i] = this.players.p2.pokemonraw[i].split("|")[0]
				if(this.players.p2.pokemonraw[i].includes("|rule")) this.players.p2.pokemonraw[i].split("|rule")[0];
			}

			for(let i = 0; i < this.players.p1.pokemonraw.length; i++)
			{
				this.players.p1.pokemon.push({
					name: this.players.p1.pokemonraw[i].includes(",") 
						? this.players.p1.pokemonraw[i].split(",")[0].trim() 
						: this.players.p1.pokemonraw[i].trim(), 
					gender: this.players.p1.pokemonraw[i].includes(",")
						? this.players.p1.pokemonraw[i].split(",")[1].trim()
						: ""});
			}

			for(let i = 0; i < this.players.p2.pokemonraw.length; i++)
			{
				this.players.p2.pokemon.push({
					name: this.players.p2.pokemonraw[i].includes(",") 
						? this.players.p2.pokemonraw[i].split(",")[0].trim() 
						: this.players.p2.pokemonraw[i].trim(), 
					gender: this.players.p2.pokemonraw[i].includes(",")
						? this.players.p2.pokemonraw[i].split(",")[1].trim()
						: ""});
			}
	},
	async getPorygonData() {
		this.porygonData = await(this.$axios.get("https://kills.porygonbot.xyz/api/" + this.url).catch(error => console.error(error)));
	},
	async getReplayData() {
		this.replayData = await(this.$axios.get("https://replay.pokemonshowdown.com/" + this.url + ".log"));
		await this.getPorygonData();
	},
  	async fetch () {
			if(this.url === "" || !this.url.startsWith("")) return;
			if(this.url.includes("https://replay.pokemonshowdown.com/")) this.url = this.url.replace("https://replay.pokemonshowdown.com/", "");
				await this.getReplayData();

		 		this.getPlayers();
				this.getTurns();
		 }
	}
}
</script>
