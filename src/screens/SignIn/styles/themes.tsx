import {StyleSheet} from 'react-native';
import COLORS from '../../../config/COLORS';

const themes = {
  white: StyleSheet.create({
    textAreaContainer: {
        borderColor: COLORS.codGray,
        borderBottomWidth: 0.5,
        marginTop: 12,
        // flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 15,
      },
      textArea: {
        justifyContent: 'flex-start',
        flex: 1,
        color: COLORS.black,
      },
  }),
  black: StyleSheet.create({
    textAreaContainer: {
        borderColor: COLORS.codGray,
        borderBottomWidth: 0.5,
        marginTop: 12,
        // flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 15,
      },
      textArea: {
        justifyContent: 'flex-start',
        flex: 1,
        color: COLORS.white,
      },
  }),
};

export default themes;
