const foodSimplify = data => {
  food = {};

  food.id = data._id;
  food.name = data.name;
  food.price = data.price;
  food.category = data.category.name;
  food.discount = data.discount;
  food.shortDescription = data.description.short;
  food.fullDescription = data.description.long;
  food.images = data.images;
  food.isAvailable = data.stock > 0 ? true : false;
  food.isPublished = data.isPublished;

  return food;
};

module.exports = {
  foodSimplify
}