export interface InavBar {
  id: number;
  path: string;
  name: string;
}
export interface IIconsInterface {
  className: string;
}
export interface IPillButtonInterface {
  text: string;
  variant?: "button-arrow";
  onClick?: () => void;
}
export interface IsectionHead {
  heading: string;
  description: string;
  maxWidthDescribe: string;
}
export interface ICounterInterface {
  countNumber: string;
  counterText: string;
}
export interface IStars {
  stars: number;
}
