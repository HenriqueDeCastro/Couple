interface TimeineLeftItem {
  number: string;
  title: string;
  description: string;
  hint?: string;
}

interface TimeineRightItem {
  image: string;
  hint?: string;
}

interface TimeineDate {
  month: string;
  year: string;
}

export interface ITimelineElement {
  leftItem: TimeineLeftItem;
  rightItem: TimeineRightItem;
  date: TimeineDate;
}
