package cl.cs.interlogica.entities;

import jdk.nashorn.internal.objects.annotations.Constructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "products")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Integer id;

    @NotNull
    private String name;

    @NotNull
    @Type(type= "text")
    private String img;

    @NotNull
    private Double price;


    @NotNull
    @Column(name= "created_at")
    private Timestamp createdAt;

    @NotNull
    private Integer stock;

    @NotNull
    private boolean expired;

    private Double salePrice;

    @ManyToMany(fetch = FetchType.LAZY, cascade ={ CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH,CascadeType.PERSIST})
    @JoinTable(
            name = "product_ingredient",
            joinColumns= @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
    )
    private Set<Ingredient> ingredients = new HashSet<>();
}
