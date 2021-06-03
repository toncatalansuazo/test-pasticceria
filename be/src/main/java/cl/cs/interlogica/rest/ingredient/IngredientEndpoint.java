package cl.cs.interlogica.rest.ingredient;

import cl.cs.interlogica.entities.Ingredient;
import cl.cs.interlogica.rest.InterlogicaEndpointPaths;
import cl.cs.interlogica.services.ingredient.IngredientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IngredientEndpoint {
    private IngredientService ingredientService;

    public IngredientEndpoint(IngredientService ingredientService) {
        this.ingredientService = ingredientService;
    }

    @RequestMapping(method = RequestMethod.GET, value = InterlogicaEndpointPaths.Ingredient.INGREDIENTS)
    private List<Ingredient> getIngredients() {
        return this.ingredientService.findAll();
    }

    @RequestMapping(method = RequestMethod.PUT, value = InterlogicaEndpointPaths.Ingredient.INGREDIENTS)
    private Ingredient updateIngredient(@RequestBody Ingredient ingredient) {
        return this.ingredientService.update(ingredient);
    }

    @RequestMapping(method = RequestMethod.POST, value = InterlogicaEndpointPaths.Ingredient.INGREDIENTS)
    private Ingredient saveIngredient(@RequestBody Ingredient ingredient) {
        return this.ingredientService.save(ingredient);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = InterlogicaEndpointPaths.Ingredient.INGREDIENTS)
    private void deleteIngredient(Integer id) {
        this.ingredientService.delete(id);
    }
}
