<template>
	<v-card flat>
		<v-layout 
			row 
			wrap
			>
			<!-- first -->
			<v-flex 
				xs12 
				md6 
				pa-3 
				justify-center
				>
				<v-img
					src="/jflearn.jpg"
					max-width="500"
					max-height="350"
					></v-img>
			</v-flex>
			<v-flex 
				xs12 
				md6 
				pa-3
				>
			<v-card flat>
				<v-card-text class="headline font-weight-thin">
					Babel Method 👩‍🏫
				</v-card-text>
				<v-tabs
					v-model="tab1"
					background-color="transparent"
					grow
					>
					<v-tab
						v-for="item in items1"
						:key="item"
						>
					{{ item }}
					</v-tab>
				</v-tabs>

				<v-tabs-items v-model="tab1">
					<v-tab-item
						v-for="item in items1"
						:key="item"
					>
					<v-card flat>
						<v-card-text>{{ text }}</v-card-text>
					</v-card>
					</v-tab-item>
				</v-tabs-items>
			</v-card>
			</v-flex>
			
			<!-- second -->
			<v-flex 
				xs12 
				md6 
				pa-3 
				justify-center
				>
				<v-img
					src="/yonmoque.jpg"
					max-width="500"
					max-height="350"
					></v-img>
			</v-flex>
			<v-flex 
				xs12 
				md6 
				pa-3
				>
			<v-card flat>
				<v-card-text class="headline font-weight-thin">
					Yonmoque 🎮
				</v-card-text>
				<v-tabs
					v-model="tab2"
					background-color="transparent"
					grow
					>
					<v-tab
						v-for="item in items2"
						:key="item"
						>
					{{ item }}
					</v-tab>
				</v-tabs>

				<v-tabs-items v-model="tab2">
					<v-tab-item
						v-for="item in items2"
						:key="item"
					>
					<v-card flat>
						<v-card-text>{{ text }}</v-card-text>
					</v-card>
					</v-tab-item>
				</v-tabs-items>
			</v-card>
			</v-flex>

			<!-- third -->
			<v-flex 
				xs12 
				md6 
				pa-3 
				justify-center
				>
				<v-img
					src="/dnus.jpg"
					max-width="500"
					max-height="350"
					></v-img>
			</v-flex>
			<v-flex 
				xs12 
				md6 
				pa-3
				>
			<v-card flat>
				<v-card-text class="headline font-weight-thin">
					DNUS 🌏
				</v-card-text>
				<v-tabs
					v-model="tab3"
					background-color="transparent"
					grow
					>
					<v-tab
						v-for="item in items3"
						:key="item"
						>
					{{ item }}
					</v-tab>
				</v-tabs>

				<v-tabs-items v-model="tab3">
					<v-tab-item
						v-for="item in items3"
						:key="item"
					>
					<v-card flat>
						<v-card-text>{{ text }}</v-card-text>
					</v-card>
					</v-tab-item>
				</v-tabs-items>
			</v-card>
			</v-flex>

			<!-- fourth -->
			<v-flex 
				xs12 
				md6 
				pa-3 
				justify-center
				>
				<v-img
					src="/wmh.jpg"
					max-width="500"
					max-height="350"
					></v-img>
			</v-flex>
			<v-flex 
				xs12 
				md6 
				pa-3
				>
			<v-card flat>
				<v-card-text class="headline font-weight-thin">
					WMH Reservation & Billing System 🏢
				</v-card-text>
				<v-tabs
					v-model="tab4"
					background-color="transparent"
					grow
					>
					<v-tab
						v-for="item in items4"
						:key="item"
						>
					{{ item }}
					</v-tab>
				</v-tabs>

				<v-tabs-items v-model="tab4">
					<v-tab-item
						v-for="item in items4"
						:key="item"
					>
					<v-card flat>
						<v-card-text>{{ text }}</v-card-text>
					</v-card>
					</v-tab-item>
				</v-tabs-items>
			</v-card>
			</v-flex>

		</v-layout>
	</v-card>
</template>


<script>
export default {
	data () {
		return {
			tab1: null,
			items1: [
			'Description', 'Tools',
			],
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			tab2: null,
			items2: [
			'Description', 'Tools',
			],
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			tab3: null,
			items3: [
			'Description', 'Tools',
			],
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			tab4: null,
			items4: [
			'Description', 'Tools',
			],
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		}
	},
}
</script>