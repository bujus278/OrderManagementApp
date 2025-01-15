using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IDbContextFactory<OMAContext> _contextFactory;

        public OrderService(IDbContextFactory<OMAContext> contextFactory)
        {
            _contextFactory = contextFactory;
        }
        public IQueryable<Order> GetOrders()
        {
            var context = _contextFactory.CreateDbContext();
            context.Database.EnsureCreated();

            return context.Orders
                .Where(c => !c.IsDeleted)
                .Include(c => c.Customer);
        }

        
    }
}