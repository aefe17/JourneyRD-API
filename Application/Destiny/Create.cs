﻿using Application.Core;
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
        public class Command : IRequest<Result<Unit>>
        {
            public Destinies Destinies { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                context.Destinies.Add(request.Destinies);

                var result = await context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Error al crear Destion");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
