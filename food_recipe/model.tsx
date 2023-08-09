export interface Food {
  id: string;
  name: string;
  description: string;
  url: string;
  recipe: {
    ingredients: string[];
    steps: string[];
  };
  cookingTime: number;
}
