function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const restaurantsJSON = document.getElementsByTagName('textarea')[0].value;
      let restaurantsData = JSON.parse(restaurantsJSON);
      let restaurants = {};

      for (let i = 0; i < restaurantsData.length; i++) {
         let [restaurantName, inputWorkersData] = restaurantsData[i].split(' - ');
         let inputWorkers = inputWorkersData.split(', ')
             .filter(a => a)
             .map(wd => {
                let [name, salary] = wd.split(' ').filter(a => a);
                return { name, salary: Number(salary) };
             });

         if (!restaurants[restaurantName]){
            restaurants[restaurantName] = {
               restaurantName: restaurantName,
               workers: [],
               getAverageSalary: function (){
                  return this.workers.reduce((acc, el) => acc + el.salary, 0) / this.workers.length;
               }
            }
         }

         restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers);
      }

      let sortedRestaurants = Object.values(restaurants)
          .sort((a, b) => b.getAverageSalary() - a.getAverageSalary());
      let bestRestaurant = sortedRestaurants[0];
      let averageSalary = bestRestaurant.getAverageSalary().toFixed(2);
      let sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
      let bestSalary = sortedWorkers[0].salary.toFixed(2);
      let bestRestaurantString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
      let workersString = sortedWorkers
          .map(wd => `Name: ${wd.name} With Salary: ${wd.salary}`)
          .join(' ');

      document.querySelector("#outputs #bestRestaurant p").textContent = bestRestaurantString;
      document.querySelector("#outputs #workers p").textContent = workersString;
   }
}