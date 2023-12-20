<template>
<div class="dropdown">
	<label for="scopeDropdown" class="dropdown-label">Scope</label>
	<select id="scopeDropdown" v-model="selectedScope" @change="emitScopeChange" class="dropdown-select">
		<option v-for="scope in scopes" :key="scope" :value="scope">{{ scope }}</option>
	</select>
</div>
</template>

<script>
export default {
    name: 'DropdownScope',
    emits: ['update-scope'],
    data() {
        return {
            selectedScope: 'TBD',
            scopes: ['TBD'],
        };
    },

    methods: {
		emitScopeChange() {
      		this.$emit('update-scope', this.selectedSCope);
			console.log('Selected Scope:', this.selectedScope);
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
	font-weight: 200px;
	font-size: 17px;
	margin-right: 10px;
}

.dropdown-select {
    padding: 8px;
    width: 90px;
    font-family: 'Raleway';
	font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
}
</style>
