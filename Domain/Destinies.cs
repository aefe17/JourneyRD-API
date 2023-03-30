using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Destinies
    {
        public Guid Id { get; set; }
        public int MaxPeople { get; set; }
        public double budget { get; set; }
        public DateTime date { get; set; }
    }
}
