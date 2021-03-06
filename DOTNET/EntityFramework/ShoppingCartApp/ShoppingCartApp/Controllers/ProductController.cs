﻿using ShoppingCartCore.Framework.Repository.EntityFramework;
using ShoppingCartCore.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ShoppingCartApp.Controllers
{
    [RoutePrefix("api/v1/ShoppingCart/Product")]
    public class ProductController : ApiController
    {
        private EntityFrameworkRepository<Product> erf = new EntityFrameworkRepository<Product>();

        [Route("AddProduct")]
        public IHttpActionResult PostProduct(Product product)
        {
            erf.Add(product);
            return Ok("Product Added");
        }

        [Route("GetAllProduct")]
        public IHttpActionResult GetAllProduct()
        {
            return Ok(erf.Get());
        }

        [Route("DeleteProduct/{productId}")]
        public IHttpActionResult DeleteUser(Guid productId)
        {
            erf.Delete(productId);
            return Ok("Product Deleted");
        }

        [Route("UpdateProduct")]
        public IHttpActionResult PutEditUser(Product product)
        {
            erf.Update(product);
            return Ok("Product Updated");
        }

        [Route("GetProduct/{id}")]
        public IHttpActionResult GetById(Guid id)
        {
            return Ok(erf.GetById(id));
        }
    }
}