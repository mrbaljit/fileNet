package co.nz.suncorp.controller;


import co.nz.suncorp.domain.FileNetProfile;
import co.nz.suncorp.repository.FileNetProfileRepository;
import co.nz.suncorp.ProfileViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * Created by u342597 on 14/04/2016.
 */
@RestController
@RequestMapping("/profile")
public class FileNetProfileController {

    @Autowired
    private FileNetProfileRepository repository;


    @RequestMapping(value = "/allProfiles", method = GET)
    public List<FileNetProfile> getAll(){
        return  repository.findAll();
    }

    @RequestMapping(value = "/createUpdateProduct" , method = RequestMethod.POST)
    public void createUpdateProduct(@RequestBody FileNetProfile fileNetProfile) {
        repository.save(new FileNetProfile(fileNetProfile.getProfileName(), fileNetProfile.getSourceRepository(), fileNetProfile.getTargetRepository()));

    }

    @RequestMapping(value = "{id}/getProduct", method = GET)
    public FileNetProfile getAll(@PathVariable String id){
        System.out.println("getProduct : " + id);
        //Product product = productService.getProduct(Long.valueOf(id));
        //ProductViewModel productViewModel = productMapper.mapDomainToProductViewModel(product, product.getProductDiscount());
       // ProfileViewModel p = repository.findByProfileName("qazxsw");
        return repository.findById(id);
        //return p;
    }

/*
    @RequestMapping(value = "{id}/getProduct", method = GET)
    public ProductViewModel getAll(@PathVariable String id){
        Product product = productService.getProduct(Long.valueOf(id));
        ProductViewModel productViewModel = productMapper.mapDomainToProductViewModel(product, product.getProductDiscount());
        return productViewModel;
    }
*/

    @RequestMapping(value = "{id}/deleteProduct", method = POST)
    public void deleteProduct(@PathVariable String id)
    {
        System.out.println(">>>>>>> delete id : " + id);
        repository.delete(id);
    }

    /*@RequestMapping(value = "/createUpdateProduct" , method = RequestMethod.POST)
    public void createUpdateProduct(@RequestBody ProductViewModel productViewModel) {

        try {

            Product product = new Product(1L);

            if(!StringUtils.isEmpty(productViewModel.getProductId()))
            {
                product = productService.getProduct(Long.valueOf(productViewModel.getProductId()));
            }

            product = productMapper.mapProductViewModelToProduct(productViewModel, product);
            ProductDiscount productDiscount = new ProductDiscount();
            productDiscount = productMapper.mapProductViewModelToProductDiscount(productViewModel, productDiscount);
            productService.saveProduct(product, productDiscount);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }*/
}