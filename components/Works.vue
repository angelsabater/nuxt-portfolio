<template>
	<v-layout 
		row
		wrap
		>
		<v-flex 
			py-2
			px-2
			xs12
			md6
			lg4
			v-for="item in $t('works')"
			:key="item">
			<v-hover v-slot:default="{ hover }">
				<v-card
					class="mx-auto"
					max-width="500"
					height="600"
					data-aos="fade-right"
					data-aos-once="true"
					>
					<v-img
						:src="item.image"
						max-height="600"
						>
						<v-expand-transition>
							<div
								v-if="hover"
								class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal"
								style="height: 100%;"
							>
								<v-layout
									row
									wrap
									justify-center
									>
									<v-flex
										md2
										xs3
										v-for="tool in item.tools"
										:key="tool"
										>
										<v-img
											:src="tool"
											max-width="60"
											max-height="60"
											></v-img>
									</v-flex>
								</v-layout>
							</div>
							</v-expand-transition>
						</v-img>
					<v-card-text class="headline font-weight-thin">
						<div class="status">{{item.status}}</div > {{item.title}}
					</v-card-text>
					<v-card-text class="subtitle-1 font-weight-thin">
						{{item.description}} <br/><br/>
						<v-icon size="15px">fa-language</v-icon> {{item.language}} <br/>
						<v-icon size="15px">fa-link</v-icon> 
						<v-btn flat text :href='`${item.link}`' target="_blank"> {{item.linkText}} </v-btn>
		  
					</v-card-text>
				</v-card>
			</v-hover>
		</v-flex>
	</v-layout>
</template>


<script>
export default {
	data () {
		return {
		}
	},
}
</script>