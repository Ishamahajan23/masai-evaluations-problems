class RouteStrategy{
   calculateRoute(from, to){
    console.log("error");
   }
}

class FastestRoute extends RouteStrategy{
    calculateRoute(from,to){
        console.log(`Calculating fastest route from ${from} to ${to}...`);
        console.log(`Recommended route: NH48 - 280 km - 4 hours`);
    }
}
class ScenicRoute extends RouteStrategy{
    calculateRoute(from,to){
         console.log(`Calculating scenic route from ${from} to ${to}...`);
         console.log(`Recommended route: NH48 - 310 km - 6 hours`);
    }
}
class ShortestDistanceRoute extends RouteStrategy {
  calculateRoute(from, to) {
    console.log(`Calculating shortest route from ${from} to ${to}...`);
    console.log(`Recommended route: NH48 - 260 km - 3.7 hours`);
  }
}

class RoutePlanner{
    constructor(strategy){
       this.strategy = strategy;
    }
    setStrategy(strategy){
        this.strategy = strategy;
    }
    showRoute(from, to){
       this.strategy.calculateRoute(from,to);
    }

}
const planner = new RoutePlanner(new FastestRoute());
planner.showRoute("Delhi", "Jaipur");

planner.setStrategy(new ScenicRoute());
planner.showRoute("Delhi", "Jaipur");

planner.setStrategy(new ShortestDistanceRoute());
planner.showRoute("Delhi", "Jaipur");

