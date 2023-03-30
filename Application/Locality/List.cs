using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Locality
{
    public class List
    {
        public class Query : IRequest<List<Localities>> { }

        public class Handler : IRequestHandler<Query, List<Localities>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<List<Localities>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Localities.ToListAsync();
            }
        }
    }
}