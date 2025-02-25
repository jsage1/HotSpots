import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  //createSwitchNavigtor,
  createStackNavigator
} from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { useScreens } from "react-native-screens";
useScreens(); //eslint-disable-line
import SearchScreen from "./src/screens/SearchScreen";
import BusinessesShowScreen from "./src/screens/BusinessesShowScreen";
import EventsResultsScreen from "./src/screens/EventsResultsScreen";
import EventsSearchScreen from "./src/screens/EventsSearchScreen";
import MapScreen from "./src/screens/MapScreen";
import DealsScreen from "./src/screens/DealsScreen";
import DealDetail from "./src/screens/DealDetail";
import { TabScreen } from "./src/screens/TabScreen";

const AppStack = createStackNavigator({ TabScreen });

/*

  TO REVERT TO OLD STYLE UNCOMMENT AND REPLACE TABSCREEN BELOW WITH 
  tabNavigator in the export function.


*/


export default createAppContainer(TabScreen);


//BELOW is all COMMENTED OUT








// const SearchStack = createStackNavigator(
//   {
//     Search: SearchScreen,
//     BusinessesShow: BusinessesShowScreen
//   },
//   {
//     initialRouteName: "Search",
//     defaultNavigationOptions: {
//       title: "HotSpots",
//       headerTitleStyle: {
//         flex: 1,
//         textAlign: "center",
//         color: "white"
//       },
//       headerStyle: {
//         backgroundColor: "black"
//       }
//     }
//   }
// );

// const EventsSearchStack = createStackNavigator(
//   {
//     EventsSearch: EventsSearchScreen,
//     EventsResults: EventsResultsScreen
//   },
//   {
//     initialRouteName: "EventsSearch",
//     defaultNavigationOptions: {
//       title: "Events",
//       headerTitleStyle: {
//         flex: 1,
//         textAlign: "center"
//       }
//     }
//   }
// );

// const MapStack = createStackNavigator(
//   {
//     Map: MapScreen
//   },
//   {
//     initialRouteName: "Map",
//     defaultNavigationOptions: {
//       title: "Map View"
//     }
//   }
// );

// const DealsStack = createStackNavigator(
//   {
//     Deals: DealsScreen,
//     Detail: DealDetail
//     // Map: MapScreen
//   },
//   {
//     initialRouteName: "Deals",
//     defaultNavigationOptions: {
//       title: "Daily Deals",
//       headerTitleStyle: {
//         flex: 1,
//         textAlign: "center",
//         color: "white"
//       },
//       headerStyle: {
//         backgroundColor: "black"
//       }
//     }
//   }
// );

// const tabNavigator = createBottomTabNavigator(
//   {
//     //Home: HomeStack
//     Search: SearchStack,
//     EventsSearch: EventsSearchStack,
//     Deals: DealsStack,
//     Map: MapStack
//   },
//   {
//     initialRouteName: "Search",
//     color: "white",
//     tabBarOptions: {
//       activeBackgroundColor: "black",
//       inactiveBackgroundColor: "black",
//       activeTintColor: "white"
//     }
//   }
// );



