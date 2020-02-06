import {app} from '@src/helpers/constants';
const style = {
  container: {
    flex: 1,
    maxHeight: 200,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 10,
    shadowOpacity: 0.29,
    shadowRadius: 1.05,
    elevation: 1,
    flexDirection: 'row',
    margin: 10,
  },
  imageContainer: {
    // paddingLeft: 10,
  },
  cardInfoContainer: {
    flex: 1,
    width: 100,
    padding: 10,
    justifyContent: 'space-between',
  },
  cardBookContainer: {
    flex: 0.7,
    flexDirection: 'column',
  },
  cardBook: {
    flex: 1,
    backgroundColor: app.primaryColorLight,
    flexDirection: 'row',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
};

export default style;
