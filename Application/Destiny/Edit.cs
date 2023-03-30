using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Destiny
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Destinies Destiny { get; set; }
        }

        public class Hanlder : IRequestHandler<Command> 
        {
            private readonly DataContext context;

            public Hanlder(DataContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var destinies = await context.Destinies.FindAsync(request.Destiny.Id);

                destinies.MaxPeople = request.Destiny.MaxPeople;
                destinies.budget = request.Destiny.budget;
                destinies.date = request.Destiny.date;

                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
