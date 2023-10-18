const translator = (expr: string) => {
    switch (expr) {
      case "ring":
        return "Ringer";
        break;
      case "necklace":
        return "Smykker";
        break;
      case "bracelet":
        return "Armbånd";
        break;
      case "watch":
        return "Armbåndsur";
        break;
      case "earring":
        return "Øredobber";
        break;
      default:
        return "we encountered a problem";
    }
  };

  export default translator;