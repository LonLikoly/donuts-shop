<template>
<body>
    <main>
    <div class="con_txt">
        <img src="../../public/contacts.jpg" class="con">
        <div class="centered_txt">
            <div class="banner-txt">
                <h1 class="txt_banner">Contact us and get your Best Donuts to your door</h1>
            </div>
        </div>
    </div>
    <table class="contact_table">
        <thead>
            <tr>
                <th class="curriculum, benefits">Delivery area</th>
                <th class="curriculum">Delivery time</th>
                <th class="curriculum">Shipping costs*</th>
                <th class="curriculum">Minimum order price</th>
                <th class="curriculum">Free shipping</th>
            </tr>
        </thead>
        <tbody>
            <InfoTable
                v-for="info in InfoTableList"
                :key="info.id"
                :name="info.name"
                :time="info.time"
                :cost="info.cost"
                :order_price="info.order_price"
                :free_shipping="info.free_shipping"
            />
        </tbody>
    </table>
    <div class="pr-box">
        <p class="pr-podpis">*We strive to ship your orders as quickly as possible,
            but we cannot guarantee that all orders will be delivered on time. Delivery
            times may vary depending on several factors including destination, time of
            order and volume of orders.</p>
    </div>
    <div class="buy-field">
      <form class="buy-form" @submit.prevent="checkInputs">
        <label for="txtFirstName"><b class="form-txt">First Name <small>*</small></b></label>
        <input type="text" placeholder="Enter First Name" name="firstName" id="txtFirstName" required v-model="appStore.firstName">

        <label for="txtLastName"><b class="form-txt">Last Name <small>*</small></b></label>
        <input type="text" placeholder="Enter Last Name" name="lastName" id="txtLastName" required v-model="appStore.lastName">

        <label for="txtMiddleName"><b class="form-txt">Middle Name</b></label>
        <input type="text" placeholder="Enter Middle Name" name="middleName" id="txtMiddleName" v-model="appStore.middleName">

        <label for="txtPhone"><b class="form-txt">Phone <small>*</small></b></label>
        <input type="text" placeholder="Enter Phone number" name="phone" id="txtPhone" required v-model="appStore.phone">

        <label for="txtEmail"><b class="form-txt">Email <small>*</small></b></label>
        <input type="email" placeholder="Enter Email" name="email" id="txtEmail" required v-model="appStore.email">

        <label for="Additional"><b class="form-txt">Additional (optional)</b></label>
        <textarea name="additionalInfo" rows="2" cols="90" id="Additional" placeholder="Add additional information as desired " v-model="appStore.additionalInfo"></textarea>

        <label class="txtCheckbox">I accept the processing of personal data <small>*</small>
          <input type="checkbox" id="txtCheckbox" required v-model="appStore.checkboxAccepted">        </label>

        <button type="submit" class="btn1">Call me back</button>
      </form>
    </div>
      <form class="buy-form" @submit.prevent="checkInputs">
        <div>
          <p>First Name: {{ appStore.firstName }}</p>
          <p>Last Name: {{ appStore.lastName }}</p>
          <p>Middle Name: {{ appStore.middleName }}</p>
          <p>Phone: {{ appStore.phone }}</p>
          <p>Email: {{ appStore.email }}</p>
          <p>Additional Info: {{ appStore.additionalInfo }}</p>
          <p>Checkbox Accepted: {{ appStore.checkboxAccepted }}</p>
          {{appStore.applications}}
        </div>
      </form>
</main>
<hr class="pink_hr" />

</body>
</template>
<script>
import { useApplicationStore } from '@/stores/ApplicationStore';
import deliveryInfo from '@/assets/deliveryInfo.json';
import InfoTable from '@/components/InfoTable.vue';
export default {
    components: { InfoTable },
  data() {
    const appStore = useApplicationStore();
    return { appStore,
             InfoTableList: [] };
  },
  methods: {
    checkInputs() {
          this.appStore.saveFullName(
          this.appStore.firstName,
          this.appStore.lastName,
          this.appStore.middleName
      );
      console.log('First Name:', this.appStore.firstName);
      console.log('Last Name:', this.appStore.lastName);
      console.log('Middle Name:', this.appStore.middleName);
      console.log('Phone:', this.appStore.phone);
      console.log('Email:', this.appStore.email);
      console.log('Additional Info:', this.appStore.additionalInfo);
      console.log('Checkbox Accepted:', this.appStore.checkboxAccepted);

      // Создание объекта с данными о заявке
      const applicationData = {
        firstName: this.appStore.firstName,
        lastName: this.appStore.lastName,
        middleName: this.appStore.middleName,
        phone: this.appStore.phone,
        email: this.appStore.email,
        additionalInfo: this.appStore.additionalInfo,
        checkboxAccepted: this.appStore.checkboxAccepted,
      };

      // Сохранение заявки в массиве
      this.appStore.saveApplication(applicationData);

      // ... остальные действия, если они есть
    },
  },
  mounted() {
    this.InfoTableList = deliveryInfo.deliveryInfo
  }
};
</script>
