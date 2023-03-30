using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {

            if (context.Destinies.Any()) return;

            var destinies = new List<Destinies>
            {
                new Destinies
                {
                    budget = 350.99,
                    date = DateTime.Now,
                    MaxPeople = 100
                }
            };

            await context.Destinies.AddRangeAsync(destinies);
            await context.SaveChangesAsync();
        }
    }
}
