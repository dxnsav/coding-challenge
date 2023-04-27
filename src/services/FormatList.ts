import { injectable } from "inversify";

export interface ListItem {
  id: number;
  title: string;
  description: string;
  price: number;
}

@injectable()
export default class FormatList {
  public formatList = (list: Array<ListItem>): Array<ListItem> => {
    return list.map((item: ListItem) => {
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
      };
    });
  }
}
