<template>
    <button type="button" class="px-8 py-2 w-full text-white bg-primary rounded-full transition duration-400 hover:bg-primarydark focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
        {{ buttonLabel }}</button>
</template>

<script>
export default {
     props: {
         buttonLabel: {
             type: String,
             required: true
         }
     }
}
</script>