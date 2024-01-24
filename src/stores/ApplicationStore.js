import { defineStore } from 'pinia';

export const useApplicationStore = defineStore('application', {
  state: () => ({
    name: '',
    phone: '',
    email: '',
    additionalInfo: '',
    checkboxAccepted: false,
    firstName: '',
    lastName: '',
    middleName: '',
    applications: [],
  }),
  actions: {
    saveFullName(firstName, lastName, middleName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.middleName = middleName;
    },
    saveApplication(applicationData) {
      this.applications.push(applicationData);
    },
  },
});
