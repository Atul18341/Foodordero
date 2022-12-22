import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //Styles for All Icons

  PageIcon: {marginLeft: 10},
  ProfileIcon: {marginRight: 10},

  //Styles for Splash Screen
  SplashScreenView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  SplashImage: {width: 150, height: 150},
  // Styles for Login Page
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  heading: {fontWeight: 'bold', fontSize: 24, color: '#282A3A'},
  inputField: {borderWidth: 1, width: 300, borderRadius: 10, margin: 10},
  submitButton: {backgroundColor: '#00ADB5', alignItems: 'center', padding: 10},
  buttonText: {fontWeight: 'bold', fontSize: 18},

  // Styles for Restaurant List Page
  SearchBarView: {flexDirection: 'row', margin: 10},
  Searchbar: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    width: 320,
    height: 40,
  },
  card: {
    borderWidth: 1,
    borderRadius: 5,
    height: 200,
    padding: 10,
    margin: 2,
  },
  RestaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Listimage: {
    width: 360,
    height: 100,
  },

  // Styles For Restaurant Details Page
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    color: 'black',
  },
  address: {marginLeft: 15, fontSize: 18},
  img: {height: 200, marginTop: 10, borderRadius: 5},
  menu: {borderBottomWidth: 1, margin: 20, fontSize: 24, fontWeight: 'bold'},
  menuList: {
    marginLeft: 25,
    marginRight: 25,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    flex: 1,
    justifyContent: 'space-between',
  },
  cartButton: {flex: 1, justifyContent: 'flex-end'},

  // Style for Cart Page

  CartCard: {borderWidth: 2, borderRadius: 10, margin: 5, padding: 10},
  CartCardIcon: {flex: 1, marginLeft: 330},

  // Styles for Order CheckOut Page
  ChecKOutView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  SuccessfulText: {fontSize: 25, color: 'green', fontWeight: 'bold'},

  // Styles for Order History page
  TrackButton: {flex: 1, alignItems: 'center'},
  // Common Style for Button at Bottom on All Pages
  BottomButtonView: {
    right: 10,
    left: 10,
    position: 'absolute',
    bottom: 10,
  },
  Button: {borderRadius: 10, height: 20, marginTop: 50},
});

export {styles};
