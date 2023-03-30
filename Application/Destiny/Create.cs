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
    public class Create
    {
        public class Command : IRequest 
        {
            public Destinies Destinies { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                context.Destinies.Add(request.Destinies);
                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
