package tn.ecommece.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.ecommece.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
