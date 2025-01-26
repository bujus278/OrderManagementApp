using Core.Entities;
using Core.Interfaces;
using Core.Model;

namespace API.GraphQL
{
    public class Mutation
    {
        public async Task<Customer> AddOrUpdateCustomer([Service] ICustomerService customerService, CustomerModel customer)
        {
            return await customerService.AddOrUpdateCustomer(customer);
        }

        public async Task<Order> AddOrUpdateOrder([Service] IOrderService orderService, OrderModel order)
        {
            return await orderService.AddOrUpdateOrderAsync(order);
        }
    }
}