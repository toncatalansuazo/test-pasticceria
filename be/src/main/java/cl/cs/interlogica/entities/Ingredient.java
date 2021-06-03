package cl.cs.interlogica.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "ingredients")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Ingredient {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Integer id;

    @NotNull
    private String name;

    @ManyToMany(fetch = FetchType.LAZY, cascade ={ CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH,CascadeType.PERSIST})
    @JoinTable(
            name = "product_ingredient",
            joinColumns = @JoinColumn(name = "ingredient_id"),
            inverseJoinColumns= @JoinColumn(name = "product_id")
    )
    private Set<Ingredient> products = new HashSet<>();
}
