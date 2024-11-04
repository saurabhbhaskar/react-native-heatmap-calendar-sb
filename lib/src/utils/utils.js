export const getShadeIndex = (percentage, colors) => {
    return Math.min(Math.floor(percentage / 20), colors.length - 1);
  };
  