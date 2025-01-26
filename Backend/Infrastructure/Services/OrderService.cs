using Core.Entities;
using Core.Interfaces;
using Core.Model;
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

        public async Task<Order> AddOrUpdateOrderAsync(OrderModel orderModel)
        {
            var context = _contextFactory.CreateDbContext();
            Order order;

            var customer = context.Customers
                            .Where(c => c.Id == orderModel.CustomerId)
                            .FirstOrDefault();

            if (customer == null)
                throw new Exception($"Customer with Id:{orderModel.CustomerId} was not found");

            if (orderModel.Id == null)
            {
                order = new Order
                {
                    OrderDate = orderModel.OrderDate,
                    DepositAmount = orderModel.DepositAmount,
                    Description = orderModel.Description,
                    OtherNotes = orderModel.OtherNotes,
                    TotalAmount = orderModel.TotalAmount,
                    Status = Core.Enums.Status.PENDING,
                    IsDelivery = orderModel.IsDelivery,
                    CustomerId = orderModel.CustomerId
                };
                await context.Orders.AddAsync(order);
            }
            else
            {
                order = await context.Orders
                    .Where(c => c.Id == orderModel.Id)
                    .FirstOrDefaultAsync();

                if (order == null)
                    throw new Exception($"Order with id {orderModel.Id} was not found");

                order.OrderDate = orderModel.OrderDate;
                order.Status = orderModel.Status;
                order.DepositAmount = orderModel.DepositAmount;
                order.Description = orderModel.Description;
                order.OtherNotes = orderModel.OtherNotes;
                order.TotalAmount = orderModel.TotalAmount;
                order.IsDelivery = orderModel.IsDelivery;

                context.Orders.Update(order);
            }
            await context.SaveChangesAsync();
            return order;
        }

    }
}