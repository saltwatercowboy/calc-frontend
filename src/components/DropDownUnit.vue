<template>
<div class="dropdown">
	<label for="dropDownUnit" class="dropdown-label">Unit</label>
	<select id="dropDownUnit" v-model="selectedUnit" class="dropdown-select">
		<option v-for="unit in units" :key="unit" :value="unit">{{ unit }}</option>
	</select>
</div>
</template>

<script>
export default {
    name: 'DropdownUnit',
    data() {
        return {
            selectedUnit: 'TBD',
            units: ['TBD'],
        };
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
	font-size: 13px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    }
</style>
