/* eslint-disable no-bitwise */

export const colors = {
  primary: {
    main: '#333333',
  },
  secondary: {
    main: '#4f9ee3',
  },
  background: {
    light: '#fafafa',
    default: 'rgba(233,233,233, 0.7)',
  },
};

export default {
  getColorFromString: (string) => {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }

    return color;
  },
  type: 'light',
  ...colors,
};
