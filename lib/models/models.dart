class Restaurant {
  final int id;
  final String name;
  final String address;
  final double rating;
  final bool isOpen;
  final String image;
  final String cuisine;
  final String deliveryTime;
  final bool featured;
  final double deliveryFee;
  final String description;
  final List<MenuItem> menuItems;

  Restaurant({
    required this.id,
    required this.name,
    required this.address,
    required this.rating,
    required this.isOpen,
    required this.image,
    required this.cuisine,
    required this.deliveryTime,
    this.featured = false,
    this.deliveryFee = 2.99,
    this.description = '',
    this.menuItems = const [],
  });
}

class MenuItem {
  final int id;
  final String name;
  final String description;
  final double price;
  final String image;
  final String category;

  MenuItem({
    required this.id,
    required this.name,
    required this.description,
    required this.price,
    required this.image,
    required this.category,
  });
}

class Category {
  final String name;
  final String icon;
  final bool isActive;

  Category({
    required this.name,
    required this.icon,
    this.isActive = false,
  });
}

class Order {
  final int id;
  final String restaurantName;
  final String restaurantImage;
  final List<OrderItem> items;
  final double total;
  final String status;
  final DateTime date;

  Order({
    required this.id,
    required this.restaurantName,
    required this.restaurantImage,
    required this.items,
    required this.total,
    required this.status,
    required this.date,
  });
}

class OrderItem {
  final String name;
  final int quantity;
  final double price;

  OrderItem({
    required this.name,
    required this.quantity,
    required this.price,
  });
}
