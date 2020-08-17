const categoriesKey = (email: string) => `categories.${email}`;

export function getCategories(email: string) {
  const key = categoriesKey(email);
  const categories = (JSON.parse(localStorage.getItem(key) as string) || []) as string[];
  return categories;
}

function setCategories(email: string, categories: string[]) {
  const key = categoriesKey(email);
  localStorage.setItem(key, JSON.stringify(categories));
}

export function addCategory(email: string, categoryName: string) {
  const categories = getCategories(email);
  if (categories.includes(categoryName)) {
    return false;
  }

  categories.push(categoryName);
  setCategories(email, categories);

  return true;
}
