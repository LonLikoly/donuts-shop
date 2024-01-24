<script>
export default {
    name: "GalleryCard",
    props: {
        "image": String
    }
}
</script>
<template>
    <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4  h-100">
            <img class="img-fluid img-thumbnail" :src="`/${image}`" alt="">
        </a>
    </div>
</template>