using Core.Entities;
using Core.Model;

namespace Core.Interfaces
{
    public interface ICustomerService
    {
        IQueryable<Customer> GetCustomersAndOrders();

        Task<Customer> AddOrUpdateCustomer(CustomerModel customerModel);
    }
}