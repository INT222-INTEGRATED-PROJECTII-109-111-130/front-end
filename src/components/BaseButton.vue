<template>
    <button type="button" class="px-8 py-2 w-full text-white bg-primary rounded-full shadow-md transition duration-500 ease-in-out transform hover:-translate hover:scale-110 focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
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