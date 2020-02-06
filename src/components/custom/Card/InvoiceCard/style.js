import {app} from '@src/helpers/constants';

const style = {
  cardContainer: {
    flex: 1,
    maxHeight: 100,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    height: 100,
    flexDirection: 'row',
  },
  cardLeftInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardRightInfo: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  subTitle: {
    fontFamily: app.primaryFontMedium,
    color: app.primaryColor,
    fontSize: 12,
  },
  subTitleText: {
    fontFamily: app.primaryFontMedium,
    color: 'rgba(0,0,0,0.8)',
    textTransform: 'capitalize',
  },
  editContainer: {
    backgroundColor: '#388e3c',
    justifyContent: 'center',
    flex: 1,
  },
  editText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
  },
};

export default style;
