package cl.cs.interlogica.services.product;

import cl.cs.interlogica.entities.Ingredient;
import cl.cs.interlogica.entities.Product;
import cl.cs.interlogica.repositories.product.ProductRepository;
import cl.cs.interlogica.utils.DateUtils;

import java.sql.Timestamp;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public class DefaultProductService implements ProductService {
    private ProductRepository productRepository;
    public DefaultProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product find(Integer id) {
        return productRepository.getOne(id);
    }

    @Override
    public List<Product> findAll() {
        List<Product> products = productRepository.findAll();
        return setSalePrice(products);
    }

    @Override
    public Product save(Product product) {
        this.refreshIngredientStock(product.getIngredients());
        return productRepository.save(product);
    }

    @Override
    public void delete(Integer id) {
        Optional<Product> product = productRepository.findById(id);
        if (!product.isPresent()) {
            // todo wrap in Error object using app  error code
            throw new Error("Product not found");
        }
        productRepository.delete(product.get());
    }

    @Override
    public Product update(Product product) {
        Optional<Product> prod = productRepository.findById(product.getId());
        if (!prod.isPresent()) {
            // todo wrap in Error object using app  error code
            throw new Error("Product not found");
        }
        return productRepository.save(prod.get());
    }

    @Override
    public List<Product> findActiveProducts() {
        return null;
    }

    private void refreshIngredientStock(Set<Ingredient> ingredients) {
        // refresh stock
    }

    private List<Product> setSalePrice(List<Product> products) {
        products.forEach(product -> {
            long daysDiff = DateUtils.getDiffDays(product.getCreatedAt(), Timestamp.from(ZonedDateTime.now().toInstant()));
            final Double price = product.getPrice();
            Double salePrice = new Double(0);
            boolean isExpired;
            if (daysDiff == 0) {
                salePrice = price;
                isExpired = false;
            } else if (daysDiff == 1) {
                salePrice = (price * 0.8);
                isExpired = false;
            } else if (daysDiff == 2) {
                salePrice = (price * 0.2);
                isExpired = false;
            } else {
                isExpired = true;
            }
            product.setSalePrice(salePrice);
            product.setExpired(isExpired);
        });

        return products;
    }
}
