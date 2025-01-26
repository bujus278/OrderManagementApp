using Core.Entities;
using Core.Model;

namespace Core.Interfaces
{
    public interface IOrderService
    {
        IQueryable<Order> GetOrders();

        Task<Order> AddOrUpdateOrderAsync(OrderModel orderModel);
    }
}