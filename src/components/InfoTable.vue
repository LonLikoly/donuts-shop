<script>
export default {
    name: "deliveryInfo",
    props: {
        "name":String,
        "time": String,
        "cost": String,
        "order_price": String,
        "free_shipping":String
    }
}
</script>
<template>
  <tr>
    <th class="benefits">{{name}}</th>
    <td>{{ time }} minutes</td>
    <td>€ {{ cost }}</td>
    <td>€ {{ order_price }}</td>
    <td>On orders over € {{ free_shipping }}</td>
  </tr>
</template>