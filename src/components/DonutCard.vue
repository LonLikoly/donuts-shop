<script>
export default {
    name: "DonutCard",
    props: {
        "name": String,
        "image": String,
        "description": String,
        "oldprice":String,
        "newprice":String
    }
}
</script>
<template>
    <div class="dnt">
          <div class="card">
            <img
              :src="`/${image}`"
              class="donut_pic"
            />
            <div class="donut_f">
              <h3 class="donut_name">{{ name }}</h3>
              <div class="donut_description_box">
                <p class="donut_description">{{ description }}</p>
              </div>
              <div class="donut_price_box">
                <p class="donut_price">
                  € <s class="old_price">{{ oldprice }}</s>
                  {{ newprice }}
                </p>
              </div>
            </div>
          </div>
        </div>
</template>