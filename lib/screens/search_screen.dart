import 'package:flutter/material.dart';
import '../models/models.dart';
import '../data/data.dart';
import '../widgets/restaurant_card.dart';

class SearchScreen extends StatefulWidget {
  const SearchScreen({super.key});

  @override
  State<SearchScreen> createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  final TextEditingController _searchController = TextEditingController();
  String _searchQuery = "";
  String _selectedFilter = "All";

  final List<String> _filters = [
    "All",
    "Italian",
    "Chinese",
    "Nigerian",
    "Japanese",
    "Mexican",
    "Indian",
    "Thai",
  ];

  List<Restaurant> get _filteredRestaurants {
    var result = restaurants;
    
    if (_searchQuery.isNotEmpty) {
      result = result.where((r) =>
        r.name.toLowerCase().contains(_searchQuery.toLowerCase()) ||
        r.cuisine.toLowerCase().contains(_searchQuery.toLowerCase()) ||
        r.address.toLowerCase().contains(_searchQuery.toLowerCase())
      ).toList();
    }
    
    if (_selectedFilter != "All") {
      result = result.where((r) => r.cuisine == _selectedFilter).toList();
    }
    
    return result;
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9FAFB),
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header
            const Padding(
              padding: EdgeInsets.all(16),
              child: Text(
                "Search",
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF111827),
                ),
              ),
            ),
            
            // Search Bar
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.05),
                      blurRadius: 10,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: TextField(
                  controller: _searchController,
                  onChanged: (value) {
                    setState(() {
                      _searchQuery = value;
                    });
                  },
                  decoration: InputDecoration(
                    hintText: "Search restaurants, cuisines...",
                    hintStyle: TextStyle(color: Colors.grey[400]),
                    prefixIcon: const Icon(Icons.search_rounded, color: Color(0xFF10B981)),
                    suffixIcon: _searchQuery.isNotEmpty
                        ? IconButton(
                            icon: const Icon(Icons.clear_rounded, color: Colors.grey),
                            onPressed: () {
                              _searchController.clear();
                              setState(() {
                                _searchQuery = "";
                              });
                            },
                          )
                        : null,
                    border: InputBorder.none,
                    contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
                  ),
                ),
              ),
            ),
            
            const SizedBox(height: 16),
            
            // Filters
            SizedBox(
              height: 40,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 16),
                itemCount: _filters.length,
                itemBuilder: (context, index) {
                  final filter = _filters[index];
                  final isSelected = _selectedFilter == filter;
                  return Padding(
                    padding: const EdgeInsets.only(right: 8),
                    child: FilterChip(
                      label: Text(filter),
                      selected: isSelected,
                      onSelected: (selected) {
                        setState(() {
                          _selectedFilter = filter;
                        });
                      },
                      backgroundColor: Colors.white,
                      selectedColor: const Color(0xFF10B981).withOpacity(0.2),
                      labelStyle: TextStyle(
                        color: isSelected ? const Color(0xFF10B981) : Colors.grey[700],
                        fontWeight: isSelected ? FontWeight.w600 : FontWeight.normal,
                      ),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20),
                        side: BorderSide(
                          color: isSelected ? const Color(0xFF10B981) : Colors.grey[300]!,
                        ),
                      ),
                      showCheckmark: false,
                    ),
                  );
                },
              ),
            ),
            
            const SizedBox(height: 16),
            
            // Results
            Expanded(
              child: _filteredRestaurants.isEmpty
                  ? Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(
                            Icons.search_off_rounded,
                            size: 64,
                            color: Colors.grey[400],
                          ),
                          const SizedBox(height: 16),
                          Text(
                            "No restaurants found",
                            style: TextStyle(
                              fontSize: 18,
                              color: Colors.grey[600],
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            "Try searching for something else",
                            style: TextStyle(
                              fontSize: 14,
                              color: Colors.grey[400],
                            ),
                          ),
                        ],
                      ),
                    )
                  : ListView.builder(
                      padding: const EdgeInsets.symmetric(horizontal: 16),
                      itemCount: _filteredRestaurants.length,
                      itemBuilder: (context, index) {
                        final restaurant = _filteredRestaurants[index];
                        return Padding(
                          padding: const EdgeInsets.only(bottom: 12),
                          child: RestaurantCard(
                            restaurant: restaurant,
                            isHorizontal: false,
                            onTap: () {
                              Navigator.pushNamed(
                                context,
                                '/restaurant',
                                arguments: {
                                  'id': restaurant.id,
                                  'name': restaurant.name,
                                  'address': restaurant.address,
                                  'rating': restaurant.rating,
                                  'isOpen': restaurant.isOpen,
                                  'image': restaurant.image,
                                  'cuisine': restaurant.cuisine,
                                  'deliveryTime': restaurant.deliveryTime,
                                  'deliveryFee': restaurant.deliveryFee,
                                  'description': restaurant.description,
                                },
                              );
                            },
                          ),
                        );
                      },
                    ),
            ),
          ],
        ),
      ),
    );
  }
}
