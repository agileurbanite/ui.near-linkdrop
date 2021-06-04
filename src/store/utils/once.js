export const once = () => {
  const ignoreNext = () => ({ case: ignoreNext });
  return {
    case: (condition, callback) => {
      if (condition) {
        callback();
        return ignoreNext();
      } else {
        return once();
      }
    },
  };
};

export const maybe = (condition, callback) => {
  if (condition) callback();
};
