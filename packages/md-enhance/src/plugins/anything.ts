import Reveal from "reveal.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseJSON = (str: string): Record<string, any> | null => {
  str = str.replace(/(\r\n|\n|\r|\t)/gm, ""); // remove line breaks and tabs
  let json;

  try {
    json = JSON.parse(str, (_key, value) => {
      if (
        value &&
        typeof value === "string" &&
        value.indexOf("function") === 0
      ) {
        // we can only pass a function as string in JSON ==> doing a real function
        //			        eval("var jsFunc = " + value);
        // eslint-disable-next-line
        return new Function(`return ${value}`)();
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return value;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as Record<string, any>;
  } catch (err) {
    return null;
  }

  return json;
};

/*
 * Recursively merge properties of two objects without overwriting the first
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mergeRecursive = <T extends Record<string, any>>(obj1: T, obj2: T): T => {
  for (const key in obj2) {
    try {
      // Property in destination object set; update its value.
      if (obj2[key].constructor == Object)
        obj1[key] = mergeRecursive(obj1[key], obj2[key]);
      else if (!obj1[key]) obj1[key] = obj2[key];
    } catch (err) {
      // Property in destination object not set; create it and set its value.
      if (!obj1[key]) obj1[key] = obj2[key];
    }
  }

  return obj1;
};

const initAnything = (reveal: Reveal): void => {
  const config = reveal.getConfig().anything;

  if (config)
    reveal.addEventListener(
      "ready",
      () => {
        for (let i = 0; i < config.length; i++) {
          // Get all elements of the class
          const elements = document.getElementsByClassName(config[i].className);
          const initialize = config[i].initialize;
          if (initialize)
            for (let j = 0; j < elements.length; j++) {
              const options = config[i].defaults || {};
              const comments = elements[j].innerHTML
                .trim()
                .match(/<!--[\s\S]*?-->/g);

              if (comments !== null)
                for (let k = 0; k < comments.length; k++) {
                  const elementOptions = parseJSON(
                    comments[k].replace(/<!--/, "").replace(/-->/, "")
                  );
                  if (elementOptions) {
                    mergeRecursive(options, elementOptions);
                    break;
                  }
                }
              initialize(elements[j] as HTMLElement, options);
            }
        }
      },
      false
    );
};

export default {
  id: "RevealAnything",
  init: initAnything,
};
