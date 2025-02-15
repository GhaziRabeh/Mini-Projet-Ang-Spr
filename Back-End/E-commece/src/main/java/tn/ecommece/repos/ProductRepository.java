package tn.ecommece.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.ecommece.entities.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByCategoryId(Long categoryId);
}
