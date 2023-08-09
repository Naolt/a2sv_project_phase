import { Food } from "./model";

export const foodData: Food[] = [
  {
    id: "1",
    name: "Pasta Carbonara",
    url: "/Pastaa.jpg",
    description:
      "Classic Italian pasta dish with eggs, pancetta, and Parmesan cheese.",
    recipe: {
      ingredients: [
        "Spaghetti",
        "Eggs",
        "Pancetta or bacon",
        "Parmesan cheese",
        "Black pepper",
      ],
      steps: [
        "Cook the pasta according to package instructions.",
        "In a bowl, whisk eggs, grated Parmesan cheese, and black pepper.",
        "Cook pancetta or bacon until crispy, then mix with cooked pasta.",
        "Pour the egg mixture over the pasta and toss to coat.",
        "The heat from the pasta will cook the eggs and create a creamy sauce.",
      ],
    },
    cookingTime: 20, // Cooking time in minutes
  },
  {
    id: "2",
    name: "Chicken Tacos",
    url: "/Tacos.jpg",
    description:
      "Delicious tacos filled with seasoned chicken and fresh toppings.",
    recipe: {
      ingredients: [
        "Chicken breast",
        "Taco seasoning",
        "Tortillas",
        "Lettuce",
        "Tomatoes",
        "Shredded cheese",
        "Sour cream",
      ],
      steps: [
        "Season chicken with taco seasoning and cook until done.",
        "Warm tortillas in a pan or microwave.",
        "Assemble tacos with sliced chicken, lettuce, diced tomatoes, shredded cheese, and sour cream.",
      ],
    },
    cookingTime: 30, // Cooking time in minutes
  },
  {
    id: "3",
    name: "Caprese Salad",
    url: "/Salad.jpg",
    description:
      "Fresh and vibrant salad with tomatoes, mozzarella, basil, and balsamic drizzle.",
    recipe: {
      ingredients: [
        "Tomatoes",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Balsamic vinegar",
        "Olive oil",
        "Salt and pepper",
      ],
      steps: [
        "Slice tomatoes and fresh mozzarella cheese.",
        "Arrange tomato and mozzarella slices on a plate, alternating them.",
        "Tuck fresh basil leaves between the slices.",
        "Drizzle with balsamic vinegar and olive oil.",
        "Sprinkle with salt and pepper to taste.",
      ],
    },
    cookingTime: 10, // Cooking time in minutes
  },
  {
    id: "4",
    name: "Vegetable Stir-Fry",
    url: "/Vegetable.jpg",
    description:
      "Colorful stir-fried vegetables with tofu, served over fragrant rice.",
    recipe: {
      ingredients: [
        "Assorted vegetables (bell peppers, broccoli, carrots, etc.)",
        "Tofu or protein of choice",
        "Soy sauce",
        "Ginger",
        "Garlic",
        "Sesame oil",
        "Rice",
      ],
      steps: [
        "Cut vegetables into bite-sized pieces.",
        "Heat sesame oil in a wok or skillet.",
        "Stir-fry vegetables until slightly tender.",
        "Add tofu or your choice of protein.",
        "Season with minced ginger, garlic, and soy sauce.",
        "Continue to stir-fry until everything is cooked and coated in sauce.",
        "Serve over cooked rice.",
      ],
    },
    cookingTime: 25, // Cooking time in minutes
  },
  {
    id: "5",
    name: "Homemade Pizza",
    url: "/Pizza.jpg",
    description:
      "Customizable pizza with your favorite toppings and melted cheese.",
    recipe: {
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Mozzarella cheese",
        "Toppings of your choice (pepperoni, mushrooms, etc.)",
        "Olive oil",
        "Italian herbs",
      ],
      steps: [
        "Roll out the pizza dough on a floured surface.",
        "Spread tomato sauce over the dough.",
        "Sprinkle mozzarella cheese over the sauce.",
        "Add your favorite toppings.",
        "Drizzle olive oil and sprinkle Italian herbs over the toppings.",
        "Bake in a preheated oven according to the dough instructions.",
      ],
    },
    cookingTime: 18, // Cooking time in minutes
  },
  {
    id: "6",
    name: "Greek Salad",
    url: "/GreekSalad.jpg",
    description:
      "Fresh and tangy salad with cucumbers, tomatoes, olives, and feta cheese.",
    recipe: {
      ingredients: [
        "Cucumbers",
        "Tomatoes",
        "Red onion",
        "Kalamata olives",
        "Feta cheese",
        "Olive oil",
        "Red wine vinegar",
        "Dried oregano",
        "Salt and pepper",
      ],
      steps: [
        "Chop cucumbers, tomatoes, and red onion.",
        "Combine chopped vegetables in a bowl.",
        "Add Kalamata olives and crumbled feta cheese.",
        "Drizzle with olive oil and red wine vinegar.",
        "Sprinkle dried oregano, salt, and pepper to taste.",
        "Toss to combine and serve.",
      ],
    },
    cookingTime: 15, // Cooking time in minutes
  },
  {
    id: "7",
    name: "Chocolate Chip Cookies",
    url: "/Cookie.jpg",
    description:
      "Classic homemade cookies with gooey chocolate chips in every bite.",
    recipe: {
      ingredients: [
        "Butter",
        "Sugar",
        "Brown sugar",
        "Egg",
        "Vanilla extract",
        "Flour",
        "Baking soda",
        "Salt",
        "Chocolate chips",
      ],
      steps: [
        "Preheat the oven according to the cookie recipe.",
        "Cream together butter, sugar, and brown sugar.",
        "Beat in eggs and vanilla extract.",
        "In a separate bowl, whisk flour, baking soda, and salt.",
        "Combine wet and dry ingredients.",
        "Stir in chocolate chips.",
        "Drop spoonfuls of dough onto a baking sheet.",
        "Bake until golden brown, then let cool before enjoying.",
      ],
    },
    cookingTime: 12, // Cooking time in minutes
  },
  {
    id: "8",
    name: "Grilled Salmon",
    url: "/Salmon.jpg",
    description:
      "Healthy and flavorful grilled salmon fillet with a zesty lemon and dill garnish.",
    recipe: {
      ingredients: [
        "Salmon fillet",
        "Lemon",
        "Olive oil",
        "Fresh dill",
        "Salt and pepper",
      ],
      steps: [
        "Preheat the grill to medium-high heat.",
        "Brush salmon with olive oil and season with salt and pepper.",
        "Grill salmon for a few minutes on each side, until cooked through.",
        "Squeeze fresh lemon juice over the grilled salmon.",
        "Garnish with chopped fresh dill and serve.",
      ],
    },
    cookingTime: 15, // Cooking time in minutes
  },
];
