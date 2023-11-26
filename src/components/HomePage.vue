<template>
    <div class='header'>
        <img src="/src/assets/logo.png" alt="logo" />
        <h1 id="headname">Rootstalk</h1>
        <h1 id="headtext" href="localhost:5173">Home</h1>
    </div>
    <v-stage :config="boardSpace">
        <v-layer>
            <v-rect :config="background"></v-rect>
        </v-layer>
    </v-stage>
</template>

<script>


</script>