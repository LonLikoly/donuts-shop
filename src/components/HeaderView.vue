<template>
       <header>
        <div class="full_screen">
          <div class="company_info_head">
            <div class="phone_container">
              <img src="/call-icon.png" class="call-icon" />
              <h3>
                <a href="tel:+558737325217" class="phone_number">
                  +55 (873) 732-52-17
                </a>
              </h3>
            </div>
            <div class="logo_container">
              <img src="/donuteria-logo.png" class="logo" />
            </div>
          </div>
          <div class="text_header">
            <p>
              Delicious donuts in
              <span style="color: #f95e7a">Nitra </span> with delivery!
            </p>
          </div>
          <div class="navigate">
            <router-link to = "/" class="navigate_item">Home</router-link>
            <router-link to = "/Donuts" class="navigate_item">Donuts</router-link>
            <router-link to = "/Contacts" class="navigate_item">Contacts</router-link>
            <router-link to = "/Gallery" class="navigate_item">Gallery</router-link>
          </div>
        </div>
        <hr class="pink_hr" />
      </header>
</template>