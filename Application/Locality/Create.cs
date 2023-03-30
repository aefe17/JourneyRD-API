using MediatR;
using Domain;
using Persistence;

namespace Application.Locality
{
    public class Create
    {
        public class Command : IRequest
        {
            public Localities localities { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            async Task<Unit> IRequestHandler<Command, Unit>.Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Localities.Add(request.localities);
                await _context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }
}