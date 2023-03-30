using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Localities
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string category { get; set; }
        public double expenses { get; set; }
        public ICollection<Comment> comments { get; set;} = new List<Comment>();
    }
}
