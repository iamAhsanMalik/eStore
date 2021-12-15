using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProductsController : ControllerBase
  {
    private readonly eStoreContext _context;

    public ProductsController(eStoreContext context)
    {
      _context = context;
    }
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<Product>>> GetProducts()
    {
      var products = await _context.Products.ToListAsync();
      return Ok(products);
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
      var product = await _context.Products.FindAsync(id);
      return Ok(product);
    }
  }
}