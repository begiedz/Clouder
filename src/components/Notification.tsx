
const NotificationCard = ({ message }: { message: string }) => {
  return (
    <main className="card main">
      <h2>Error:</h2>
      <div>{message}</div>
    </main>
  )
}

export default NotificationCard