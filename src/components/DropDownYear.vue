<template>
<div class="dropdown">
	<label for="yearDropdown" class="dropdown-label">Year</label>
	<select id="yearDropdown" v-model="selectedYear" @change="emitYearChange" class="dropdown-select">
		<option v-for="year in years" :key="year" :value="year">{{ year }}</option>
	</select>
</div>
</template>

<script>
export default {
	name: 'DropdownYear',
	emits: ['update-year'],
	data() {
		return {
			selectedYear: 'All Time',
			years: ['All Time', 2021, 2022, 2023],
		};
	},

	methods: {
		emitYearChange() {
      		this.$emit('update-year', this.selectedYear);
			console.log('Selected Year:', this.selectedYear);
    	},
  	},
};
</script>

<style scoped>
.dropdown {
	margin-bottom: 15px;
	padding-left: 7.5%;
	width: 100%;
}

.dropdown-label {
	color: rgb(0, 0, 0);
    font-family: 'DM Sans';
	font-size: 17px;
	margin-right: 20px;
}

.dropdown-select {
	padding: 8px;
	width: 90px;
    font-family: 'Raleway';
	font-size: 12px;
	border: 1px solid #ccc;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
}
</style>
