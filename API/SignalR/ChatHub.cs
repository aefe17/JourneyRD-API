using Application.Destiny;
using MediatR;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    public class ChatHub : Hub
    {
        private readonly IMediator mediator;

        public ChatHub(IMediator mediator) 
        {
            this.mediator = mediator;
        }

        public async Task SendComment(Create.Command command)
        {
            var comment = await mediator.Send(command);

            await Clients.Group(command.LocalitiesId)
        }
    }
}
