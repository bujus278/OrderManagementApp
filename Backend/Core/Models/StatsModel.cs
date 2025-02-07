using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Models
{
    public class Stats
    {
        public int TotalCustomers { get; set; }

        public int TotalOrders { get; set; }

        public int PendingOrders { get; set; }

        public int DraftOrders { get; set; }

        public int CompletedOrders { get; set; }        

        public int ShippedOrders { get; set; }
    }
}