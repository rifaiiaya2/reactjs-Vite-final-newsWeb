import { News } from "./newsType";

export interface INewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  news: News | undefined;
}
