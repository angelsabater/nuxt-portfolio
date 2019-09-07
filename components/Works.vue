<template>
	<v-flex>
	<v-card 
		flat
		data-aos="fade-right"
		data-aos-once="true"
		v-for="item in $t('works')"
		:key="item"
		>
		<v-layout 
			row 
			wrap
			>
			<v-flex 
				xs12 
				md6
				lg6 
				pa-3
				>
				<v-img
					:src="item.image"
					max-width="550"
					></v-img>
			</v-flex>
			<v-flex 
				xs12 
				md6 
				pa-3
				>
			<v-card flat>
				<v-card-text class="headline font-weight-thin">
					{{item.title}}
				</v-card-text>
				<v-card-text class="subtitle-1 font-weight-thin">
					{{item.description}} <br/><br/>
				</v-card-text>
				<v-layout
					row
					wrap
					>
					<v-flex
						md2
						xs3
						pa-3
						v-for="tool in item.tools"
						:key="tool"
						>
						<v-card
							flat
						>
							<v-img
								:src="tool"
								max-width="50"
								max-height="50"
								></v-img>
						</v-card>
					</v-flex>
				</v-layout>
			</v-card>
			</v-flex>
		</v-layout>
	</v-card>
	</v-flex>
</template>


<script>
export default {
	data () {
		return {
		}
	},
}
</script>