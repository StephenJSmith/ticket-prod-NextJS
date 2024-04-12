import prisma from "@/prisma/db";
import TicketDetail from "./TicketDetail";

interface Props {
  params: { id: string },
}

const ViewTicket = async ({params}: Props) => {
  const ticket = await prisma?.ticket.findUnique({
    where: {id: parseInt(params.id)}
  });
  if (!ticket) {
    return <p className='text-destructive'>
      Ticket not found!
    </p>
  }

  const users = await prisma.user.findMany();

  return (
    <TicketDetail ticket={ticket} users={users} />
  )
}
export default ViewTicket