async function getTicketById(id){
    const res = await fetch(`http://localhost:4000/tickets/${id}`,{
        next: {
            revalidate: 0 //using 0 to opt out of caching and making sure data is immidiately refreshed
        }
            
    })
    return res.json();
}

export default async function TicketDetails({ params}) {
    const id = params.id
    const ticket = await getTicketById(id);
  return (
    <>
        <div className="card my-5" key={ticket.id}>
            <h3>{ticket.title}</h3>
            <small>Created By : {ticket.user_email} </small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
        </div>

   </>
  )
}
