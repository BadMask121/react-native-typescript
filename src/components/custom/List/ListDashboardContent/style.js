import {app} from '@src/helpers/constants';

const style = {
  sectionContainer: {flex: 1, margin: 10},
  sectionHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 30,
    color: app.primaryColor,
    fontFamily: app.primaryFontBold,
    padding: 20,
  },
  listText: {
    width: 150,
    fontSize: 15,
    fontFamily: app.primaryFontRegular,
    paddingBottom: 10,
  },
};

export default style;
