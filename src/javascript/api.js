export default class CoffeDBAPI {
  constructor(url) {
    this.url = url;
  }

  async getAllCoffees() {
    try {
      let promise = fetch(this.url + "coffee", {
        method: "GET",
      });

      // console.log("Promise: " + promise);

      let response = await promise;
      // console.log("Response: " + response);

      let data = await response.json();

      // console.log("Data: " + data);

      return data;
    } catch (error) {
      console.log("Corrupted Data");
    }
  }
  async logIn(customer) {
    try {
      let promise = fetch(this.url + "customer", {
        method: "POST",
        body: JSON.stringify(customer),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      //   console.log("Promise: " + promise);

      let response = await promise;
      //   console.log("Response: " + response);

      let data = await response.json();

      //   console.log("Data: " + data);

      return data;
    } catch (error) {
      console.log("Corrupted Data");
    }
  }
  async placeOrder(payload) {
    console.log("Place order");
    try {
      let promise = fetch(this.url + "customer/" + payload.customerId, {
        method: "PUT",
        body: JSON.stringify(payload.order),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      //   console.log("Promise: " + promise);

      let response = await promise;
      //   console.log("Response: " + response);

      let data = await response.json();

      //   console.log("Data: " + data);

      return data;
    } catch (error) {
      console.log("Corrupted Data");
    }
  }

  //   async getOrdersForCustomer(id) {}
  //   async createNewCustomer(name, email) {}
  //   async checkValidCustomer() {}
}
