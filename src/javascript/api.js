export default class CoffeDBAPI {
  constructor() {}

  getAllCoffees() {
    try {
      //   let promise = fetch(this.url, {
      //       method: "GET",
      //   });

      //   // console.log("Promise: " + promise);

      //   let response = await promise;
      //   // console.log("Response: " + response);

      //   let data = await response.json();

      //   // console.log("Data: " + data);
      let x = [
        {
          id: "1",
          title: "Caffe Latte",
          description: "Stirred Coffe with Milk",
          price: "40",
        },
        {
          id: "2",
          title: "Caffe Machiatto",
          description: "Stirred Coffe with Milk",
          price: "60",
        },
        {
          id: "3",
          title: "Caffe Latte",
          description: "Stirred Coffe with Milk",
          price: "50",
        },
      ];
      return x;
    } catch (error) {
      console.log("Corrupted Data");
    }
  }
  async getOrdersForCustomer(id) {}
  async createNewCustomer(name, email) {}
  async checkValidCustomer() {}
}
