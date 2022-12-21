import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  CartCard: {borderWidth: 2, borderRadius: 10, margin: 5, padding: 10},
  CartCardIcon: {flex: 1, marginLeft: 330},

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

// Common Style for Button at Bottom on All Pages
  BottomButtonView: {
    right: 10,
    left: 10,
    position: 'absolute',
    bottom: 10,
  },
  Button:{borderRadius:10,height:20,marginTop:50}
});

export {styles};
