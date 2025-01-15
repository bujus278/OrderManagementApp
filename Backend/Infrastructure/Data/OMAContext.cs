using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class OMAContext : DbContext
    {
        public OMAContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().HasData(
                new Customer
                {
                    Id = 1,
                    FirstName = "James",
                    LastName = "BOnd",
                    ContactNumber = "0123456",
                    IsDeleted = false,
                    Email = "bond@wp.pl"
                },
                new Customer
                {
                    Id = 2,
                    FirstName = "Monty",
                    LastName = "Pyton",
                    ContactNumber = "1234567",
                    IsDeleted = false,
                    Email = "monty@wp.pl"
                }
            );

            modelBuilder.Entity<Address>().HasData(
                new Address
                {
                    Id = 1,
                    CustomerId = 1,
                    AddressLine1 = "SomePlace",
                    AddressLine2 = "There",
                    City = "Melbourne",
                    State = "Victoria",
                    Country = "AU"
                },
                new Address
                {
                    Id = 2,
                    CustomerId = 2,
                    AddressLine1 = "Another Place",
                    AddressLine2 = "Here",
                    City = "Melbourne",
                    State = "Victoria",
                    Country = "AU"
                }
            );

            modelBuilder.Entity<Order>().HasData(
                new Order
                {
                    Id = 1,
                    CustomerId = 1,
                    OrderDate = new DateTime(2024, 1, 10),
                    Description = "new order",
                    TotalAmount = 500,
                    DepositAmount = 10,
                    IsDelivery = true,
                    Status = Status.Pending,
                    OtherNotes = "New notes",
                    IsDeleted = false
                },
                new Order
                {
                    Id = 2,
                    CustomerId = 2,
                    OrderDate = new DateTime(2024, 2, 11),
                    Description = "secund order",
                    TotalAmount = 5000,
                    DepositAmount = 250,
                    IsDelivery = false,
                    Status = Status.Draft,
                    OtherNotes = "Some notes",
                    IsDeleted = false
                }
            );

            //base.OnModelCreating(modelBuilder);
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Address> Addresses { get; set; }
    }
}