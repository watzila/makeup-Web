import React from "react";

//創建商品卡
class CreateCard {
  create(count, element, data) {
    let arr = new Array(count).fill(undefined);

    if (count) {
      let cards = arr.map((item, index) => {
        let newCard = React.createElement(element, { key: index, pID: index + 1, data: (data != null) ? data[index] : null });
        return newCard;
      });
      // console.log(count);

      return cards;
    }
  }
}

export default CreateCard;