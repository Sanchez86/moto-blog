interface IfieldsForImage {
  fields: { file: { url: string } }
}

interface IFields{
  title: string;
  image: IfieldsForImage;
  content: any;
}

export interface IData {
  fields: IFields;
  sys: { id: number };
}

export interface IState {
  data: IData[];
  error: string;
  isLoading: boolean;
  markup: string;
}
