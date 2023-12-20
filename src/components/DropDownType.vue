<template>
<div class="dropdown">
	<label for="chartDropdown" class="dropdown-label">Type</label>
	<select id="chartDropdown" v-model="selectedType" @change="emitTypeChange" class="dropdown-select">
		<option v-for="emissiontype in emissiontypes" :key="emissiontype" :value="emissiontype">{{ emissiontype }}</option>
	</select>
</div>
</template>

<script>
export default {
    name: 'DropdownType',
    emits: ['update-type'],
    data() {
        return {
            selectedType: 'All Types',
            emissiontypes: ['All Types', 'Travel', 'Transport', 'Fuels'],
        };
    },

    methods: {
		emitTypeChange() {
      		this.$emit('update-type', this.selectedType);
			console.log('Selected Type:', this.selectedType);
    	},
  	},
};
</script>

<style scoped>
.dropdown {
    display: block;
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
